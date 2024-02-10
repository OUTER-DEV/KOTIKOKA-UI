import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <nav>
        <Link href="/inscription"> Create an acount</Link>
      </nav>
      <nav>
        <Link href="/connexion"> Go to Login</Link>
      </nav>
      main page here
    </main>
  );
}
