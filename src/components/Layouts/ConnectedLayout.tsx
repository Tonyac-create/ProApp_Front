// import React from 'react'

import NavBar from "./NavBar copy";

function ConnectedLayout({ children }: any) {
  return (
    <div className="flex flex-col">
      <NavBar />
      <section className="flex flex-col justify-center gap-5 items-center md:flex md:flex-wrap pt-12">
        {children}
      </section>
    </div>
  );
}

export default ConnectedLayout;
