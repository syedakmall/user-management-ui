import Head from "next/head";
import Navbar from "../components/Navbar";
import UserList from "../components/UserList";

export default function Home() {
  return (
    <div>
      <Head>
        <title>User Management System</title>
        <meta name="keyword" content="web dev" />
      </Head>
      <UserList />
    </div>
  );
}
