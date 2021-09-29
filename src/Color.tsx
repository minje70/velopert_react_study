import React from "react";

interface IColor {
  color: string;
  name: string;
}

export default function Color(props: IColor) {
  return (
    <div style={{ color: props.color }}> 색깔이 바뀝니다!! {props.name} </div>
  );
}
