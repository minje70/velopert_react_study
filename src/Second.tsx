import React from "react";

interface SecondProp {
  numbers: number[];
}

export default function Second(props: SecondProp) {
  return (
    <>
      <h1>이건 테스트 입니다.</h1>
      {props.numbers.map((num) => {
        return <div>{num}</div>;
      })}
    </>
  );
}
