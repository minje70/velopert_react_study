import React, { useEffect, useState } from "react";

let test = 0;
export default function UseEffecTest() {
  const [isOn, setIsOn] = useState(false);
  console.log("리렌더링 되었습니다.");

  useEffect(() => {
    console.log("useEffect 내부");
  }, [test]);
  const onClick = () => {
    console.log("클릭되었습니다.");
    test++;
  };
  const testConsole = () => {
    console.log(`test : ${test}`);
    isOn ? setIsOn(false) : setIsOn(true);
  };
  return (
    <>
      {test}
      <button onClick={onClick}>버튼</button>
      <button onClick={testConsole}>테스트</button>
    </>
  );
}
