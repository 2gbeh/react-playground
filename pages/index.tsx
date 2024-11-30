import type { ReactElement } from "react";
import type { InferGetServerSidePropsType, GetServerSideProps } from "next";
//
import type { NextPageWithLayout } from "./_app";
import DashboardLayout from "@/components/layouts/dashboard-layout";
import Ribbon from "@/components/atoms/ribbon";
//
import {
  ProductEntity,
  ProductsService,
  AddProductForm,
  ProductListCard,
} from "@/features/products";
import { useDashboard, CTAButton } from "@/features/dashboard";

export const getServerSideProps = (async () => {
  const response = await ProductsService.getAll();
  const data = JSON.parse(response);
  return { props: { data } };
}) satisfies GetServerSideProps<{ data: ProductEntity[] }>;

const Dashboard: NextPageWithLayout<
  InferGetServerSidePropsType<typeof getServerSideProps>
> = ({ data }) => {
  const { openFormDialog, toggleFormDialog } = useDashboard();
  console.log("🚀 ~ Dashboard");
  // renders
  return (
    <>
      <AddProductForm open={openFormDialog} onClose={toggleFormDialog} />
      <Ribbon title="Dashboard">
        <CTAButton onClick={toggleFormDialog} />
      </Ribbon>
      <main>
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <ul role="list" className="divide-y divide-gray-100">
            {data.map((item) => (
              <ProductListCard key={item.id} product={item} />
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
