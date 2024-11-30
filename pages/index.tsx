import type { ReactElement } from "react";
import type { InferGetServerSidePropsType, GetServerSideProps } from "next";
//
import type { NextPageWithLayout } from "./_app";
import DashboardLayout from "@/components/layouts/dashboard-layout";
import Ribbon from "@/components/atoms/ribbon";
import { fakePeople } from "@/data/fake-people";
//
import {
  useDashboard,
  AddProductButton,
  AddProductForm,
  ProductListCard,
} from "@/features/dashboard";

type IProps = {
  name: string;
  stargazers_count: number;
};

export const getServerSideProps = (async () => {
  const raw = await fetch("https://api.github.com/repos/vercel/next.js");
  const res = await raw.json();
  //
  return { props: { data: res } };
}) satisfies GetServerSideProps<{ data: IProps }>;

const Dashboard: NextPageWithLayout<
  InferGetServerSidePropsType<typeof getServerSideProps>
> = ({ data }) => {
  const { openFormDialog, toggleFormDialog } = useDashboard();
  console.log("🚀 ~ Dashboard", data);
  // renders
  return (
    <>
      <AddProductForm open={openFormDialog} onClose={toggleFormDialog} />
      <Ribbon title="Dashboard">
        <AddProductButton onClick={toggleFormDialog} />
      </Ribbon>
      <main>
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <ul role="list" className="divide-y divide-gray-100">
            {fakePeople.map((item) => (
              <ProductListCard key={item.email} product={item} />
            ))}
          </ul>
        </div>
      </main>
    </>
  );
};

Dashboard.getLayout = function getLayout(page: ReactElement) {
  return <DashboardLayout>{page}</DashboardLayout>;
};

export default Dashboard;
