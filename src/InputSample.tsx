import React, { useState } from 'react';

// 여러개의 input값을 변화시킬 때 (동시에)
// 리액트에서 객체를 업데이트 할 때에는 절대로 객체 자체를 건들면 안된다. 불변성을 유지하기 위해.
export default function InputSample() {
	const [inputs, setInputs] = useState({
		name: '',
		nickName: '',
	});
	const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = event.target;
		setInputs({
			...inputs,
			[name]: value, // 계산된 속성명 : []으로 감싸면 동적으로 key값을 만들 수 있다.
		});
	};
	const onResetButton = () => {
		setInputs({
			name: '',
			nickName: '',
		});
	};

	return (
		<div>
			<input
				name="name"
				placeholder="이름"
				type="text"
				onChange={onChange}
			/>
			<input
				name="nickName"
				placeholder="닉네임"
				type="text"
				onChange={onChange}
			/>
			<button onClick={onResetButton}>reset</button>
			<div>
				이름 : {inputs.name} ({inputs.nickName})
			</div>
		</div>
	);
}
