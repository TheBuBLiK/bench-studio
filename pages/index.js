import Head from "next/head";
import Image from "next/image";
import Content from "./components/Content/Content";
import Sidebar from "./components/Sidebar/Sidebar";

export default function Home() {
    return (
         <div className="main-container">
      <div className="main-wrapper">
        <Sidebar />
        <Content />
      </div>
    </div>
    );
}
