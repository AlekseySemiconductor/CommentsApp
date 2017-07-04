import React from 'react';
import { connect } from 'react-redux';

class Comment extends React.Component {
	constructor(props) {
		super(props);

		let image;

		if (Boolean(props.reply)) {
			image = "http://i.playground.ru/i/00/00/00/00/user/default/icon.20x20.png";
		} else {
			image = "http://i.playground.ru/i/00/00/00/00/user/default/icon.50x50.png";
		}

		this.state = {
			name: props.name,
			image: image,
			time: props.time || "just now",
			text: props.text,
			score: props.score || "0",
			id: props.id
		}
	}

	handleLike = e => {
		let targetClassList = e.target.classList,
			refClassList = this.refs.down.classList;

		if (refClassList.contains('active')) {
			refClassList.remove('active');
			targetClassList.add('active');
			this.setState({
				score: this.state.score*1 + 2
			});
			this.props.onChangeScore(this.state.score*1 + 2, this.state.id);
			return;
		}

		if (targetClassList.contains('active')) {
			targetClassList.remove('active');
			this.setState({
				score: this.state.score*1 - 1
			});
			this.props.onChangeScore(this.state.score*1 - 1, this.state.id);
		} else {
			targetClassList.add('active');
			this.setState({
				score: this.state.score*1 + 1
			});
			this.props.onChangeScore(this.state.score*1 + 1, this.state.id);
		}
	}

	handleDislike = e => {
		let targetClassList = e.target.classList,
			refClassList = this.refs.up.classList;

		if (refClassList.contains('active')) {
			refClassList.remove('active');
			targetClassList.add('active');
			this.setState({
				score: this.state.score*1 - 2
			});
			this.props.onChangeScore(this.state.score*1 - 2, this.state.id);
			return;
		}

		if (targetClassList.contains('active')) {
			targetClassList.remove('active');
			this.setState({
				score: this.state.score*1 + 1
			});
			this.props.onChangeScore(this.state.score*1 + 1, this.state.id);
		} else {
			targetClassList.add('active');
			this.setState({
				score: this.state.score*1 - 1
			});
			this.props.onChangeScore(this.state.score*1 - 1, this.state.id);
		}
	}

	render = () => {
		return (
			<div className="comment-item">
				<div className="comment-header">
					<span className="comment-author">
						<a href="#">
							<img 
								alt={this.state.name}
								src={this.state.image} 
								className={`avatar-image${this.state.hasReply ? " size20" : " size32"}`}
							/>
							{this.state.name}
						</a>
					</span>
					<time className="comment-timestamp">{this.state.time}</time>
				</div>
				<div className="comment-body">{this.state.text}</div>
				<div className="comment-actions">
					<div className="comment-voting">
						<button 
							className="up"
							ref="up"
							onClick={this.handleLike}
						></button>
						<div className="score">{this.state.score}</div>
						<button
							className="down"
							ref="down"
							onClick={this.handleDislike}
						></button>
					</div>
					<button className="btn btn-xs btn-reply">reply</button>
				</div>
			</div>
		);
	}
};

export default connect(
	state => ({
		reducer: state
	}),
	dispatch => ({
		onChangeScore: (newScore, id) => {
			dispatch({
				type: 'CHANGE_SCORE',
				newScore,
				id
			})
		}
	})
)(Comment);