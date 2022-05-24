import axios from 'axios';

export const getPostsRequests = async () =>
	await axios.get('http://localhost:4000/posts');

export const createPostRequests = async (post) => {
	const form = new FormData();

	for (let key in post) form.append(key, post[key]);

	return await axios.post('http://localhost:4000/posts', form, {
		headers: { 'Content-type': 'multipart/form-data' },
	});
};

export const deletePostRequests = async (id) =>
	await axios.delete(`http://localhost:4000/posts/${id}`);

export const updatePostRequests = async (id, newFields) =>
	await axios.put(`http://localhost:4000/posts/${id}`, newFields);

export const getPostRequests = async (id) =>
	await axios.get(`http://localhost:4000/posts/${id}`);
