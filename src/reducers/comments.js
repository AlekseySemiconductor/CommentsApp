import Comments from '../comments.json';

let state = Comments;

export default function comments (data = state, action) {
	if (action.type === 'ADD_COMMENT') {
		console.log([action.newComment, ...data]);
		return state = data = [action.newComment, ...data];
	} else if (action.type === 'SORT_COMMENTS') {
		console.log(action.newComments);
		return state = data = action.newComments;
	} else if (action.type === 'CHANGE_SCORE') {
		data.forEach(comment => {
			if (comment.id === action.id) {
				comment.score = action.newScore+"";
			}
		});
		return state = data;
	}
	return data;
};