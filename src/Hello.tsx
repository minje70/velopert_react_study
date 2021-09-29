import React from "react";

interface HelloProps {
  isSpecial: boolean;
  name: string;
}

export default function Hello(props: HelloProps) {
  return (
    <>
      {props.isSpecial ? <p>**</p> : null} hello {props.name}
    </>
  );
}
