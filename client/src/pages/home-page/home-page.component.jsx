import React from "react";
import CommentsFeed from "../../components/comments-feed/comments-feed.component";
import NewComment from "../../components/new-comment/new-comment.component";

import "./home-page.components.scss";

const HomePage = () => {
	return (
		<div className='home-page'>
			<CommentsFeed />
			<NewComment />
		</div>
	);
};

export default HomePage;
