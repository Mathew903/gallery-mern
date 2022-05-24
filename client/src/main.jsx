import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { PostProvider } from './context/postContext';
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
	<BrowserRouter>
		<PostProvider>
    		<App />
		</PostProvider>
  	</BrowserRouter>
)
