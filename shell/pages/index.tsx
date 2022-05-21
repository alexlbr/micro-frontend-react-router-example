import type { NextPage } from "next";
import Link from "next/link";

const Home: NextPage = () => {
  return (
    <>
      <h1>Nextjs Host</h1>
      <Link href="/react-sub-pages">React Router pages</Link>
    </>
  );
};

export default Home;
