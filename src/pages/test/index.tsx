import Link from "next/link";
import React from "react";

type Props = {};

const TestPage = (props: Props) => {
  return (
    <div>
      <h1>PAGE TEST1</h1>
      <h2>page</h2>
      <Link href="/">back</Link>
    </div>
  );
};

export default TestPage;
