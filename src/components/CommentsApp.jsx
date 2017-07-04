import React from 'react';
import CommentEditor from './CommentEditor.jsx';
import CommentsList from './CommentsList.jsx';
import './Main.less';

export default class CommentsApp extends React.Component {
	render = () => {
		return (
			<div className="comments-container">
				<div id="comments">
					<CommentEditor />
					<CommentsList />
					<button className="btn btn-block">More...</button>
				</div>
			</div>
		);
	}
};