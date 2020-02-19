/* eslint-disable react/prop-types */
import React from 'react';

const article = ({ article }) => (
	<div>
		<h1>{article.title}</h1>
		<p>{article.body}</p>
	</div>
);

export default article;