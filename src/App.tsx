import React, { useRef, useState } from 'react';
import './App.css';
import Second from './Second';
import Color from './Color';
import Hello from './Hello';
import Counter from './Counter';
import InputSample from './InputSample';
import UserList, { IUser } from './UserLIst';
import CreateUser from './CreateUser';

export default function App() {
	const [inputs, setInputs] = useState({
		username: '',
		email: '',
	});
	const { username, email } = inputs;
	const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = event.target;
		setInputs({
			...inputs,
			[name]: value,
		});
	};
	const [users, setUsers] = useState<IUser[]>([
		{
			id: 1,
			username: 'velopert',
			email: 'public.velopert@gmail.com',
		},
		{
			id: 2,
			username: 'tester',
			email: 'tester@example.com',
		},
		{
			id: 3,
			username: 'liz',
			email: 'liz@example.com',
		},
	]);

	const nextId = useRef(4);
	const onCreate = () => {
		const user: IUser = {
			id: nextId.current,
			username,
			email,
		};
		setInputs({
			username: '',
			email: '',
		});
		setUsers([...users, user]);
		nextId.current += 1;
	};
	const numbers: number[] = [1, 2, 3, 4, 5];
	return (
		<>
			<div
				style={{
					width: '500px',
					height: '500px',
					background: 'blue',
				}}
			>
				<div>테스트 입니다!!!!!!!!</div>
				<div className="gray-box">css 적용</div>
			</div>
			<Second numbers={numbers} />
			<Color color={'red'} name={'빨강!!'} />
			<Color color={'yellow'} name={'노랑!!'} />
			<Color color={'orange'} name={'오렌지!!'} />
			<Hello name="mijeong" isSpecial={true} />
			<Hello name="minjae" isSpecial={false} />
			<Counter />
			<InputSample />
			<CreateUser
				username={username}
				email={email}
				onChange={onChange}
				onCreate={onCreate}
			/>
			<UserList users={users} />
		</>
	);
}
