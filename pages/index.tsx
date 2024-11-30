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
        {/* <CTAButton onClick={toggleFormDialog} /> */}
        <button type="button" className="bg-indigo-500 flex" disabled>
          <svg className="animate-spin h-5 w-5 mr-3" viewBox="0 0 24 24"></svg>
          Processing...
        </button>
      </Ribbon>
      <main>
        {/* <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8"> */}
        <div className="overflow-auto max-h-screen px-4 sm:px-6 lg:px-8 pb-10">
          <ul
            role="list"
            className="divide-y divide-gray-100 bg-white my-10 px-6 rounded-lg shadow"
          >
            {productsSelector?.products ? (
              productsSelector.products.map((item) => (
                <ProductListCard
                  key={item.id}
                  product={item}
                  onDelete={onDelete}
                />
              ))
            ) : (
              <div className="border border-blue-300 shadow rounded-md p-4 max-w-sm w-full mx-auto">
                <div className="animate-pulse flex space-x-4">
                  <div className="rounded-full bg-slate-700 h-10 w-10"></div>
                  <div className="flex-1 space-y-6 py-1">
                    <div className="h-2 bg-slate-700 rounded"></div>
                    <div className="space-y-3">
                      <div className="grid grid-cols-3 gap-4">
                        <div className="h-2 bg-slate-700 rounded col-span-2"></div>
                        <div className="h-2 bg-slate-700 rounded col-span-1"></div>
                      </div>
                      <div className="h-2 bg-slate-700 rounded"></div>
                    </div>
                  </div>
                </div>
              </div>
            )}
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
