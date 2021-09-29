import React from "react";
import { useState } from "react";

export default function Counter() {
  const [countNumber, setCountNumber] = useState(0);
  const onClickPlusButton = () => {
    setCountNumber(countNumber + 1);
  };
  const onClickMinusButton = () => {
    setCountNumber(countNumber - 1);
  };
  return (
    <>
      <button onClick={onClickPlusButton}>더하는 버튼!!</button>
      <button onClick={onClickMinusButton}>빼는 버튼!!</button>
      <div>{countNumber}</div>
    </>
  );
}
