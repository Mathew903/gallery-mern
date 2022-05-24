import { v2 as cloudinary } from 'cloudinary';

cloudinary.config({
	cloud_name: 'dsdk8xf42',
	api_key: '813859768866743',
	api_secret: 'J5NML0SnK70IupuV7sJLPvg0_3Q',
});

export const uploadImage = async (filePath) => {
	return await cloudinary.uploader.upload(filePath, {
		folder: 'posts',
	});
};

export const deleteImage = async (id) => {
	return await cloudinary.uploader.destroy(id);
};
