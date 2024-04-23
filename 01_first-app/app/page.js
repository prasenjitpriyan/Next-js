import Header from "@/components/header";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <Header />
      <h1>Let&apos;s get started</h1>
      <p>
        <Link href="/about">About Us</Link>
      </p>
    </main>
  );
}
