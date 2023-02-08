import Head from "next/head";
import Link from "next/link";
import React from "react";

const TestPage = () => {
  return (
    <div>
      <Head>
        <title>Test Page 2</title>
      </Head>

      <h1>PAGE TEST 2</h1>
      <h2>page</h2>
      <Link href="/">back</Link>
    </div>
  );
};

export default TestPage;
