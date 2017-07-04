import React from 'react';
import { connect } from 'react-redux';
import Comment from './Comment.jsx';

class CommentWrapper extends React.Component {
	state = {
		name: this.props.name,
		image: this.props.image,
		time: this.props.time,
		text: this.props.text,
		score: this.props.score,
		hasReply: Boolean(this.props.reply),
		reply: this.props.reply
	}

	static defaultProps = {
		time: "just now",
		score: "0",
		image: "http://i.playground.ru/i/00/00/00/00/user/default/icon.50x50.png",
		hasReply: false
	}

	render = () => {
		if (this.state.hasReply) {
			return (
				<div className="comment-wrapper comment-wrapper-has-reply">
					<Comment 
						key={this.props.id}
						id={this.props.id}
						time={this.props.time}
						score={this.props.score}
						name={this.props.name}
						image={this.props.image}
						text={this.props.text}
					/>
					<div className="comment-reply">
						{
							this.state.reply.map(comment => {
								return (
									<Comment 
										key={comment.id}
										id={comment.id}
										time={comment.time}
										score={comment.score}
										name={comment.user.name}
										image={comment.user.image}
										text={comment.text}
										reply={true}
									/>
								);
							})
						}
					</div>
				</div>
			);
		} else {
			return (
				<Comment 
					key={this.props.id}
					id={this.props.id}
					time={this.props.time}
					score={this.props.score}
					name={this.props.name}
					image={this.props.image}
					text={this.props.text}
				/>
			);
		}
	}
};

export default connect(
	state => ({
		reducer: state
	})
)(CommentWrapper);