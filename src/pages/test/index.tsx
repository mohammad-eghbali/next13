import Head from "next/head";
import Link from "next/link";
import React from "react";

const TestPage = () => {
  return (
    <div>
      <Head>
        <title>Test Page 1</title>
      </Head>

      <h1>PAGE TEST1</h1>
      <h2>page</h2>
      <Link href="/">back</Link>
    </div>
  );
};

export default TestPage;
