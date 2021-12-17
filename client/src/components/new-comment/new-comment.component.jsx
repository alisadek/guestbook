import React, { useState } from "react";
import Button from "../button/button.component";
import FormInput from "../form-input/form-input.component";

import "./new-comment.styles.scss";

const NewComment = () => {
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		message: "",
	});
	const [isLoggedIn, setIsLoggedIn] = useState(true);
	const handleSubmit = (event) => {
		event.preventDefault();
		setFormData({ name: "", email: "", message: "" });
	};

	const handleChange = (event) => {
		const { value, name } = event.target;
		setFormData((prevValue) => {
			return {
				...prevValue,
				[name]: value,
			};
		});
	};

	return (
		<div className='new-message'>
			<form onSubmit={handleSubmit}>
				{!isLoggedIn && (
					<FormInput
						label='Your Name'
						handleChange={handleChange}
						name='name'
						value={formData.name}
						type='text'
						required
					/>
				)}
				{!isLoggedIn && (
					<FormInput
						label='Email'
						handleChange={handleChange}
						name='email'
						value={formData.email}
						type='email'
						required
					/>
				)}
				<FormInput
					label='Message'
					handleChange={handleChange}
					name='message'
					value={formData.message}
					type='text'
					rows={3}
					required
				/>
				<Button type='submit'>Submit</Button>
			</form>
		</div>
	);
};

export default NewComment;
