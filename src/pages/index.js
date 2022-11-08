import Head from "next/head";
import Image from "next/image";
import { useEffect } from "react";
import styles from "../../styles/Home.module.css";
import { useGlobalContext } from "../context";
import PrimarySearchAppBar from "../components/Layout";

export default function Home() {
  const state = useGlobalContext();
  console.log("hello");

  useEffect(() => {
    console.log("state", state);
  }, []);

  return (
    <div>
      {" "}
      <PrimarySearchAppBar />
    </div>
  );
}
