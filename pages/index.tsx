import type { ReactElement } from "react";
import type { InferGetServerSidePropsType, GetServerSideProps } from "next";
//
import type { NextPageWithLayout } from "./_app";
import DashboardLayout from "@/components/layouts/dashboard-layout";
import Ribbon from "@/components/atoms/ribbon";
import { AddProductForm, ProductListCard } from "@/features/products";
import { ProductEntity, ProductsService } from "@/store/products";
//
import { useDashboard, CTAButton } from "@/features/dashboard";

type Page = NextPageWithLayout<
  InferGetServerSidePropsType<typeof getServerSideProps>
>;

interface IProps {
  data: ProductEntity[];
}

export const getServerSideProps = (async () => {
  const response = await ProductsService.getAll();
  const data = JSON.parse(response);
  return { props: { data } };
}) satisfies GetServerSideProps<IProps>;

const Dashboard: Page = ({ data }: IProps) => {
  const {
    productsSelector,
    openFormDialog,
    toggleFormDialog,
    closeFormDialog,
    onDelete,
  } = useDashboard(data);
  console.log("🚀 ~ Dashboard", productsSelector?.products);
  // renders
  return (
    <>
      <Ribbon title="Dashboard" badge={data.length}>
        <CTAButton onClick={toggleFormDialog} />
      </Ribbon>
      <main>
        {/* <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8"> */}
        <div className="overflow-auto max-h-screen px-4 sm:px-6 lg:px-8 pb-10">
          <ul
            role="list"
            className="divide-y divide-gray-100 bg-white my-10 px-6 rounded-lg shadow"
          >
            {productsSelector?.products
              ? productsSelector.products.map((item) => (
                  <ProductListCard
                    key={item.id}
                    product={item}
                    onDelete={onDelete}
                  />
                ))
              : null}
          </ul>
        </div>
      </main>

      {/* MODALS */}
      <AddProductForm open={openFormDialog} onClose={closeFormDialog} />
    </>
  );
};

Dashboard.getLayout = function getLayout(page: ReactElement) {
  return <DashboardLayout>{page}</DashboardLayout>;
};

export default Dashboard;
