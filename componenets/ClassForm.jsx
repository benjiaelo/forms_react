import React, { Component } from "react";

class ClassForm extends Component {
	constructor(props) {
		super();
		this.state = {
			students: [
				{ name: "Eric", email: "Eric@gmail.com", gen: 22 },
				{ name: "val", email: "Eric@gmail.com", gen: 4 },
				{ name: "kwabena", email: "Eric@gmail.com", gen: 89 },
				{ name: "zidane", email: "zz@gmail.com", gen: 89 },
				{ name: "", email: "", gen: "" },
			],
		};
	}
	handleRegister = (e) => {
		e.preventDefault();
		this.setState({ [e.target.name]: e.target.value })
	};
	handleSubmit = (e) => {
		e.preventDefault();
		this.setState({
			students: [
				...this.state.students,
				{ name: this.state.name, email: this.state.email, gen: this.state.gen },
			],
            
			name: "",
			email: "",
			gen: "",
		});
	};

	render() {
		return (
			<>
				<form>
					<h1>Register Here</h1>
					<label>Name:</label>
					<input
						type="text"
						name="name"
						value={this.state.students.name}
						onChange={this.handleRegister}
					/>
					<br />
					<label>Email:</label>
					<input
						type="text"
						name="email"
						value={this.state.students.email}
						onChange={this.handleRegister}
					/>
					<br />
					<label>Gen:</label>
					<input
						type="text"
						name="gen"
						value={this.state.students.gen}
						onChange={this.handleRegister}
					/>
					<br />
					<button onClick={this.handleSubmit}>Submit</button>
				</form>

				{this.state.students.map((student, index) => {
					return (
						<div key={index}>
							<h1>name:{student.name}</h1>
							<h2>email : {student.email}</h2>
							<h3>gen : {student.gen}</h3>
						</div>
					);
				})}
			</>
		);
	}
}

export default ClassForm;
