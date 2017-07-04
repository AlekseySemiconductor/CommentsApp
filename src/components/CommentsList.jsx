import React from 'react';
import { connect } from 'react-redux';
import CommentsHeader from './CommentsHeader.jsx';
import CommentWrapper from './CommentWrapper.jsx';


class CommentsList extends React.Component {
	state = {
		comments: this.props.reducer.comments
	}

	componentWillReceiveProps = nextProps => {
		this.setState({
			comments: nextProps.reducer.comments
		});
	}

	render = () => {
		return (
			<div className="comments-flow">
				<CommentsHeader />
				{
					this.state.comments.map(comment => {
						return (
							<CommentWrapper 
								key={comment.id}
								id={comment.id}
								time={comment.time}
								score={comment.score}
								name={comment.user.name}
								image={comment.user.image}
								text={comment.text}
								reply={comment.reply}
							/>
						);
					})
				}
			</div>
		);
	}
};

export default connect(
	state => ({
		reducer: state
	})
)(CommentsList);