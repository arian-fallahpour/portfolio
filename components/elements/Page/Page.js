import React from "react";

const Page = ({ children }) => {
  return (
    <body>
      <main className="main">{children}</main>
    </body>
  );
};

export default Page;
