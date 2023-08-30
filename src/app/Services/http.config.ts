import axios, { AxiosInstance } from 'axios';

const httpReq: AxiosInstance = axios.create({
	baseURL: 'https://server-jade-pi.vercel.app',
	withCredentials: true,
	headers: {
		'Content-type': 'application/json',
	},
});

export default httpReq;
