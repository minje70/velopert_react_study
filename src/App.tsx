import React from "react";
import "./App.css";
import Second from "./Second";
import Color from "./Color";
import Hello from "./Hello";

export default function App() {
  const numbers: number[] = [1, 2, 3, 4, 5];
  return (
    <>
      <div
        style={{
          width: "500px",
          height: "500px",
          background: "blue",
        }}
      >
        <div>테스트 입니다!!!!!!!!</div>
        <div className="gray-box">css 적용</div>
      </div>
      <Second numbers={numbers} />
      <Color color={"red"} name={"빨강!!"} />
      <Color color={"yellow"} name={"노랑!!"} />
      <Color color={"orange"} name={"오렌지!!"} />
      <Hello name="mijeong" isSpecial={true} />
      <Hello name="minjae" isSpecial={false} />
    </>
  );
}
