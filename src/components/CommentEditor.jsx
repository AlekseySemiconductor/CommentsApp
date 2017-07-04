import React from 'react';
import { connect } from 'react-redux';

class CommentEditor extends React.Component {
	state = {
		id: "1234567890",
		text: "",
		score: "0"
	}

	handleTextChange = event => {
		this.setState({text: event.target.value});
	}

	handleAddComment = event => {
		if (this.state.text == '') return;

		this.props.onAddComment({
			"id": this.state.id*1 + Date.now(),
			"time": Date.now(),
			"score": "0",
			"user": {
				"name": "MyNick"
			},
			"text": this.state.text
		});

		this.setState({
			text: ""
		});

		event.preventDefault();
	}

	render = () => {
		return (
			<form>
				<div className="comment-entry">
					<div className="comment-entry-header">
						<img
							alt="MyNick"
							src="http://i.playground.ru/i/00/00/00/00/user/default/icon.50x50.png"
							className="avatar-image size32"
						/>
						MyNick
					</div>
					<div className="form-group">
						<textarea
							className="form-control"
							name="text"
							placeholder="Put your shit here..."
							value={this.state.text}
							onChange={this.handleTextChange}
						></textarea>
					</div>
					<div className="comment-entry-footer">
						<div
							className="btn btn-default btn-sm btn-block"
							onClick={this.handleAddComment}
						>Submit</div>
					</div>
				</div>
			</form>
		);
	}
};

export default connect(
	state => ({
		reducer: state
	}),
	dispatch => ({
		onAddComment: newComment => {
			dispatch({
				type: 'ADD_COMMENT',
				newComment
			})
		}
	})
)(CommentEditor);