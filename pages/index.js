import Head from "next/head";
import Image from "next/image";
import Container from "../components/Layout/Container";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <Container>
      <div className='text-5xl text-blue-600 font-JetBrains'>
        Hack The October
      </div>
    </Container>
  );
}
