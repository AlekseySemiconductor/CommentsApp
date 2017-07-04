import React from 'react';
import { connect } from 'react-redux';

class CommentsHeader extends React.Component {
	sort = (e) => {
		e.target.parentNode.querySelectorAll('a').forEach(tag => {
			if (tag.classList.contains('active')) {
				tag.classList.remove('active');
				tag.classList.add('text-muted');
			}
		});

		e.target.classList.add('active');
		e.target.classList.remove('text-muted');

		let comments = [...this.props.reducer.comments];

		const newComments = comments.sort((a, b) => {
			return a.score*1 < b.score*1;
		});

		this.props.onSortComments(newComments);

		e.preventDefault();
	}

	render = () => {
		return (
			<div className="comments-header">
				<div className="pull-right">
					<a
						href="#" 
						className="text-muted"
						onClick={this.sort}
					>Best</a> |
					<a href="#" className="active">Newest</a> |
					<a href="#" className="text-muted">Oldest</a>
				</div>
				<b>6 Comments</b>
			</div>
		);
	}
};

export default connect(
	state => ({
		reducer: state
	}),
	dispatch => ({
		onSortComments: newComments => {
			dispatch({
				type: 'SORT_COMMENTS',
				newComments
			})
		}
	})
)(CommentsHeader);