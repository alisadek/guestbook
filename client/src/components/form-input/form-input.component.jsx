import React from "react";

import "./form-input.styles.scss";

const FormInput = ({ handleChange, label, rows, ...otherProps }) => {
	return (
		<div className='group'>
			{!rows ? (
				<input
					className='form-input'
					onChange={handleChange}
					{...otherProps}
				/>
			) : (
				<textarea
					className='form-input'
					rows={rows}
					onChange={handleChange}
					{...otherProps}
				/>
			)}
			{label && (
				<label
					className={`${
						otherProps.value.length && "shrink"
					} form-input-label`}
				>
					{label}
				</label>
			)}
		</div>
	);
};

export default FormInput;
