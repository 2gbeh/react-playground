import { useState, type ReactElement } from "react";
import { PlusCircleIcon } from "@heroicons/react/16/solid";
//
import type { NextPageWithLayout } from "./_app";
import DashboardLayout from "@/components/layouts/dashboard-layout";
import Ribbon from "@/components/atoms/ribbon";
import FormDialog from "@/components/molecules/form-dialog";
import { fakePeople } from "@/data/fake-people";

const Dashboard: NextPageWithLayout = () => {
  const [openFormDialog, setOpenFormDialog] = useState(false);
  const toggleFormDialog = () => setOpenFormDialog((prev) => !prev);
  console.log("🚀 ~ Dashboard");
  // renders
  return (
    <>
      <FormDialog open={openFormDialog} onClose={setOpenFormDialog} />
      <Ribbon title="Dashboard">
        <button
          onClick={toggleFormDialog}
          className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 flex items-center"
        >
          <PlusCircleIcon
            aria-hidden="true"
            className="mr-2 size-5 sm:size-4"
          />
          Add New
        </button>
      </Ribbon>
      <main>
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <ul role="list" className="divide-y divide-gray-100">
            {fakePeople.map((item) => (
              <li
                key={item.email}
                className="flex justify-between gap-x-6 py-5"
              >
                <div className="flex min-w-0 gap-x-4">
                  <img
                    alt=""
                    src={item.imageUrl}
                    className="size-12 flex-none rounded-full bg-gray-50"
                  />
                  <div className="min-w-0 flex-auto">
                    <p className="text-sm/6 font-semibold text-gray-900">
                      {item.name}
                    </p>
                    <p className="mt-1 truncate text-xs/5 text-gray-500">
                      {item.email}
                    </p>
                  </div>
                </div>
                <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
                  <p className="text-sm/6 text-gray-900">{item.role}</p>
                  {item.lastSeen ? (
                    <p className="mt-1 text-xs/5 text-gray-500">
                      Last seen{" "}
                      <time dateTime={item.lastSeenDateTime}>
                        {item.lastSeen}
                      </time>
                    </p>
                  ) : (
                    <div className="mt-1 flex items-center gap-x-1.5">
                      <div className="flex-none rounded-full bg-emerald-500/20 p-1">
                        <div className="size-1.5 rounded-full bg-emerald-500" />
                      </div>
                      <p className="text-xs/5 text-gray-500">Online</p>
                    </div>
                  )}
                </div>
              </li>
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
