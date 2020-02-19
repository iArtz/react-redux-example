import React, { useState } from 'react';

// eslint-disable-next-line react/prop-types
const AddArticle = ({ saveArticle }) => {
	const [article, setArticle] = useState();

	const handleArticleData = e => {
		console.log(e.target.id);
		console.log(article);
		setArticle({
			...article,
			[e.target.id]: e.target.value,
		});
	};
    
	const addNewArticle = e => {
		e.preventDefault();
		saveArticle(article);
	};

	return (
		<form onSubmit={addNewArticle}>
			<input type="text" id="title" placeholder="Title" onChange={handleArticleData}/>
			<input type="text" id="body" placeholder="Body" onChange={handleArticleData}/>
			<button>Add Article</button>
		</form>
	);
};

export default AddArticle;