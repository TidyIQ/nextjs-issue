import findUp from "find-up";
import React from "react";

export default function Index() {
  const testFind = findUp("findMe.txt");
  console.log(testFind)
  return <p>Test</p>
};