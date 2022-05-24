import { usePosts } from "../context/postContext";
import { VscEmptyWindow } from 'react-icons/vsc';
import { Link } from 'react-router-dom';
import { PostCard } from "../components/PostCard";

export const HomePage = () => {
	const { posts } = usePosts();

	if (posts.length === 0) return (
		<div className="flex flex-col justify-center items-center text-3xl text-white">
			<VscEmptyWindow className="w-40 h-40 "/>
			<h1>No hay publicaciones aun</h1>
		</div>
	)

	return (
		<div className="text-white">
			<header className="flex justify-between py-4">
				<h1 className="text-2xl text-gray-300 font-bold">Posts ({posts.length})</h1>
				<Link to='/new' className="px-3 py-2 bg-indigo-500 hover:bg-indigo-600 text-white">
					Create New Post
				</Link>
			</header>
			<div className="grid grid-cols-3 gap-4">
				{posts.map(post => <PostCard post={post} key={post._id}/>)}
			</div>
		</div>
  	)
}
