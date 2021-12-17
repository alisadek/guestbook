import React, { useState } from "react";

import "./comment.styles.scss";

const Comment = ({ userName, message, date, setActveComment }) => {
	return (
		<div className='comment'>
			<div className='avatar' />
			<div className='comment-data'>
				<h3 className='username'>{userName}</h3>
				<p className='comment-text'>{message}</p>
				<div className='comment-details'>
					<p className='date'>{date}</p>
					<ul className='comment-actions-group'>
						<li className='comment-action'>Edit</li>
						<li className='comment-action'>Delete</li>
						<li className='comment-action'>Reply</li>
					</ul>
				</div>
			</div>
		</div>
	);
};

export default Comment;
