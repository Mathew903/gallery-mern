import { useEffect } from 'react';
import { useState, createContext, useContext } from 'react';
import { getPostsRequests, createPostRequests, deletePostRequests, getPostRequests, updatePostRequests } from '../api/posts';

const context = createContext();
export const usePosts = () => useContext(context);

export const PostProvider = ({children}) => {
    const [posts, setPosts] = useState([]);
    
    const getPosts = async () => {
        const res = await getPostsRequests();
        setPosts(res.data);
    }

    const createPost = async (post) => {
        const res = await createPostRequests(post);
        setPosts([...posts, res.data]);
    }

    const deletePost = async (id) => {
        const res = await deletePostRequests(id);
        if (res.status === 204) setPosts(posts.filter(post => post._id !== id));
    }

    const updatePost = async (id, post) => {
        const res = await updatePostRequests(id, post);
        setPosts(posts.map(post => post._id === id ? res.data : post));
    }

    const getPost = async id => {
        const res = await getPostRequests(id);
        return res.data;
    }

    useEffect(() => {
		getPosts();
	}, [])

    return <context.Provider value={{posts, setPosts, createPost, deletePost, getPost, updatePost}}>{children}</context.Provider>
};
