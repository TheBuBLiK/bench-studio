import Head from "next/head";
import Image from "next/image";
import Content from "./components/Content/Content";
import Sidebar from "./components/Sidebar/Sidebar";
import React from "react";
import FirstBlock from "./components/Blocks/FirstBlock";

export default function Home() {
  return (
    <>
      <FirstBlock />
      <div className="main-container">
        <div className="main-wrapper">
          <Sidebar />
          <Content />
        </div>
      </div>
    </>
  );
}
