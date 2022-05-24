import { Routes, Route } from "react-router-dom";
import { HomePage, PostForm, NotFoundPage } from "./pages";
import { Toaster } from "react-hot-toast";

const App = () => {
	return (
		<div className="bg-neutral-900 min-h-screen flex items-center">
			<div className="px-10 m-auto container mt-10 mb-10">
				<Routes>
					<Route path='/' element={<HomePage />} />
					<Route path='/new' element={<PostForm />} />
					<Route path='/posts/:id' element={<PostForm />} />
					<Route path='*' element={<NotFoundPage />} />
				</Routes>
				<Toaster />
			</div>
		</div>
  	)
}

export default App;