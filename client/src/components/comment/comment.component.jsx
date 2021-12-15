import React from "react";

import "./comment.styles.scss";

const Comment = ({ userName, message, date }) => {
	return (
		<div className='comment'>
			<img
				src='https://images.unsplash.com/photo-1628890920690-9e29d0019b9b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80'
				alt=''
				className='avatar'
			/>
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
