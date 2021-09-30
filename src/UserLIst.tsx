import React from 'react';

interface UserProp {
	user: {
		id: number;
		username: string;
		email: string;
	};
}

function User(props: UserProp) {
	return (
		<div>
			{props.user.username}의 이메일은 {props.user.email}
		</div>
	);
}

// key가 있어야 하는 이유
// 각 배열을 렌더링 할 때에 요소가 추가, 제거 되었을 경우 c의 배열 처럼 효율이 안좋다. 여기서 key를 추가하게 되면 map 처럼 동작하여 요소가 추가, 제거 되었을 경우 효율적으로 렌더링된다.
export default function UserList() {
	const users = [
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
	];

	return (
		<>
			{users.map((user) => {
				return <User key={user.id} user={user} />;
			})}
		</>
	);
}