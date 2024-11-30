import React from "react";

import Ribbon from "./atoms/ribbon";
import Header from "./atoms/header";

const Template = () => {
  return (
    <>
      <div className="min-h-full">
        <Header />
        <Ribbon title="Dashboard" />
        <main>
          <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
            {/* Your content */}
          </div>
        </main>
      </div>
    </>
  );
};

export default React.memo(Template);
