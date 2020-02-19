import * as actionTypes from './actionTypes';

const initialState = {
	articles: [
		{ id: 1, title: 'Title 1', body: 'Body' },
		{ id: 2, title: 'Title 2', body: 'Body' },
	],
};

const reducer = (state = initialState, action) => {
	switch (action.type) {
	case actionTypes.ADD_ARTICLE:
		// eslint-disable-next-line no-case-declarations
		const newArticle = {
			id: Math.random(),
			title: action.article.title,
			body: action.article.body
		};
		return {
			...state,
			articles: state.articles.concat(newArticle)
		};
	
	default:
		return state;
	}
};

export default reducer;
