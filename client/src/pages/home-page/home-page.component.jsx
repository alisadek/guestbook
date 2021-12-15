import React from "react";
import CommentsFeed from "../../components/comments-feed/comments-feed.component";
import NewComment from "../../components/new-comment/new-comment.component";

const HomePage = () => {
	return (
		<div>
			<CommentsFeed />
			<NewComment />
		</div>
	);
};

export default HomePage;
