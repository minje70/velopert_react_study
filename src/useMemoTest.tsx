import React, { useMemo, useState } from "react";

function memoTest() {
  console.log("메모가 불불렸렸습습니니다다.");
}

export default function UseMemoTest() {
  const [testNumber, setTestNumber] = useState(0);
  const [testNumber2, setTestNumber2] = useState(0);
  const memo = useMemo(() => memoTest(), [testNumber]);
  console.log(`memo : ${memo}`);
  const onClick = () => {
    setTestNumber(testNumber + 1);
  };
  const onClick2 = () => {
    setTestNumber2(testNumber2 + 1);
  };
  return (
    <div>
      <button onClick={onClick}>메모부르기!</button>
      <button onClick={onClick2}>메모안부르기!</button>
    </div>
  );
}
