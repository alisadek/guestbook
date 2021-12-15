import React, { useState } from "react";

import FormInput from "../form-input/form-input.component";

import "./sign-in.styles.scss";
import Button from "../button/button.component";

function SignIn() {
	const [signInForm, setSignInForm] = useState({
		email: "",
		password: "",
	});

	const handleSubmit = (event) => {
		event.preventDefault();
		setSignInForm({ email: "", password: "" });
	};

	const handleChange = (event) => {
		const { value, name } = event.target;
		setSignInForm({ [name]: value });
	};
	return (
		<div className='sign-in'>
			<h2>I already have an account</h2>
			<span>Sign in with your email and password</span>
			<form onSubmit={handleSubmit}>
				<FormInput
					type='email'
					name='email'
					value={signInForm.email}
					handleChange={handleChange}
					required
					label='Email'
				/>
				<FormInput
					type='password'
					name='password'
					value={signInForm.password}
					handleChange={handleChange}
					required
					label='Password'
				/>

				<div className='buttons'>
					<Button type='submit'>Sign In</Button>
				</div>
			</form>
		</div>
	);
}

export default SignIn;
