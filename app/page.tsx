import Link from "next/link";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main>
      <h1>Hello World</h1>
      <Link href="/about">About</Link>
      <br />
      <Link href="/users">Users</Link>
    </main>
  );
}
