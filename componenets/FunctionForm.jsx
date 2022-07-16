import React, { useState } from "react";

function FunctionForm() {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [gen, setGen] = useState("");
	const [students, setStudents] = useState([
		{ name: "Eric", email: "Eric@gmail.com", gen: 22 },
		{ name: "val", email: "Eric@gmail.com", gen: 4 },
	]);
	const handleSubmit = (e) => {
		e.preventDefault();
		setStudents(
			[...students, { name, email, gen }],
			setName(""),
			setEmail(""),
			setGen("")
		);
	};

	return (
		<>
			<form style={{ margin: "40px" }}>
				<h1>Register Here</h1>
				<label>Name:</label>
				<input
					type="text"
					name="name"
					value={name}
					onChange={(e) => {
						setName(e.target.value);
					}}
				/>
				<br />
				<label>Email:</label>
				<input
					type="text"
					name="email"
					value={email}
					onChange={(e) => {
						setEmail(e.target.value);
					}}
				/>
				<br />
				<label>Gen:</label>
				<input
					type="text"
					name="gen"
					value={gen}
					onChange={(e) => {
						setGen(e.target.value);
					}}
				/>
				<br />
				<button onClick={handleSubmit}>Submit</button>
			</form>
			{students.map((item, index) => {
				return (
					<div style={{ margin: "40px" }} key={index}>
						<h1>{item.name}</h1>
						<h2>{item.email}</h2>
						<h3>{item.gen}</h3>
					</div>
				);
			})}
		</>
	);
}

export default FunctionForm;
