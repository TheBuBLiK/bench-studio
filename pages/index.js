import Head from "next/head";
import Image from "next/image";
import Content from "../components/Content/Content";
import Sidebar from "../components/Sidebar/Sidebar";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div>
      <Content />
      <Sidebar />
    </div>
  );
}
