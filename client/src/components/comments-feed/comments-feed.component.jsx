import React from "react";
import Comment from "../comment/comment.component";

const CommentsFeed = () => {
	return (
		<div>
			<Comment
				userName='Ali Sadek'
				date='15/12/2021'
				message='This is my message to the world '
			/>
		</div>
	);
};

export default CommentsFeed;
