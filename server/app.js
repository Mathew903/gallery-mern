import express from 'express';
import cors from 'cors';
import router from './routes/posts.routes.js';
import fileUpload from 'express-fileupload';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';
const app = express();
const __dirname = dirname(fileURLToPath(import.meta.url));
//middlewares
app.use(cors());
app.use(express.json());
app.use(
	fileUpload({
		useTempFiles: true,
		tempFileDir: './upload',
	})
);

//routes
app.use(router);

app.use(express.static(join(__dirname, '../client/dist')));

export default app;
