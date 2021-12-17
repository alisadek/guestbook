const comments = require("../../models/comments.model");

function getAllComments(req, res) {
	return res.status(200).json(comments);
}

module.exports = { getAllComments };
