import React, { useState } from "react";

const Test = React.memo(function Test() {
  return <div>리렌더링 안되야합니다.</div>;
});

export default function ReactMemoTest() {
  const [state, setState] = useState(0);
  const onClick = () => {
    setState(state + 1);
    console.log(state);
  };

  return (
    <div>
      <Test />
      <Test />
      <Test />
      <button onClick={onClick}>reactMemoTest</button>
    </div>
  );
}
