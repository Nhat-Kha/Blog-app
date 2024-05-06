import React from "react";
import FooterCom from "../Footer";
import Header from "../Header";

export default function Layout({ children }) {
  return (
    <div>
      <Header />
      {children}
      <FooterCom />
    </div>
  );
}
