import React, { useRef } from "react";
import "./App.css";
import Second from "./Second";
import Color from "./Color";
import Hello from "./Hello";
import Counter from "./Counter";
import InputSample from "./InputSample";
import UserList, { IUser } from "./UserList";
import Animation from "./Animation";
import UseEffecTest from "./UseEffectTest";

export default function App() {
  const users: IUser[] = [
    {
      id: 1,
      username: "velopert",
      email: "public.velopert@gmail.com",
    },
    {
      id: 2,
      username: "tester",
      email: "tester@example.com",
    },
    {
      id: 3,
      username: "liz",
      email: "liz@example.com",
    },
  ];

  const nextId = useRef(4);
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
      <Counter />
      <InputSample />
      <UserList users={users} />
      <Animation />
      <UseEffecTest />
    </>
  );
}
