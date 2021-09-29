import React from "react";

// props.child를 어떻게 사용할지 전혀 모르겠다. 특히 typescript에서
function Wrapper() {
  const style = {
    border: "2px solid black",
    padding: "16px",
  };
  return <div style={style}></div>;
}

export default Wrapper;
