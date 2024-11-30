import type { ReactElement } from "react";
import type { NextPageWithLayout } from "./_app";

import DashboardLayout from "@/components/layouts/dashboard-layout";
import Ribbon from "@/components/atoms/ribbon";

const Dashboard: NextPageWithLayout = () => {
  console.log("🚀 ~ Dashboard");
  // renders
  return (
    <>
      <Ribbon title="Dashboard" />
      <main>
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8"></div>
      </main>
    </>
  );
};

Dashboard.getLayout = function getLayout(page: ReactElement) {
  return <DashboardLayout>{page}</DashboardLayout>;
};

export default Dashboard;
