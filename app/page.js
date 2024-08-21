import Header from "@/components/Header";
import styles from "./page.module.css";
import Banner from "@/components/Banner";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <main className={styles.main}>
      <Header />
      <Banner />
      <Footer />
      </main>
    </>
  );
}
