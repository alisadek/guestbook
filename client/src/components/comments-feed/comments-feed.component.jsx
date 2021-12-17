import React, { useState } from "react";
import Comment from "../comment/comment.component";

import "./comments-feed.styles.scss";

const comments = [
	{
		id: 1,
		userName: "Ali Sadek",
		date: "15/12/2021",
		message: "this is the first message",
	},
	{
		id: 2,
		userName: "Mohamed Ahmed",
		date: "12/12/2021",
		message: "this is the second message",
	},
	{
		id: 3,
		userName: "Ahmed Haytham",
		date: "15/12/2021",
		message: "this is the third message",
	},
	{
		id: 4,
		userName: "Saleh Mohamed",
		date: "30/12/2021",
		message: "this is the fourth message",
	},
];

const CommentsFeed = () => {
	const [activeComments, setActiveComments] = useState(null);
	return (
		<div className='comments-feed'>
			{comments.map(({ id, ...otherProps }) => (
				<Comment key={id} {...otherProps} />
			))}
		</div>
	);
};

export default CommentsFeed;
