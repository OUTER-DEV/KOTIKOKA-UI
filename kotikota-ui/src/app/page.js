import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <nav>
        <Link href="/register"> Create an acount</Link>
      </nav>
      <nav>
        <Link href="/login"> Go to Login</Link>
      </nav>
      main page here
    </main>
  );
}
