import { useAuthStorage } from '@/store/mmkv/mmkv-auth';
import axios, { AxiosResponse, AxiosError, AxiosRequestConfig, AxiosInstance } from 'axios';

declare module 'axios' {
	interface AxiosResponse<T = any> extends Promise<T> {}
}

export abstract class HttpClient {
	protected readonly instance: AxiosInstance;

	public constructor(baseUrl: string) {
		this.instance = axios.create({ baseURL: baseUrl, timeout: 60000, withCredentials: false });
		this._initializeRequestInterceptor();
		this._initializeResponseInterceptor();
	}

	private _initializeResponseInterceptor = () => {
		this.instance.interceptors.response.use(this._handleResponse, this._handleError);
	};

	private _initializeRequestInterceptor = () => {
		//@ts-ignore
		this.instance.interceptors.request.use(this._handleRequest, this._handleError);
	};

	private _handleRequest = async (config: AxiosRequestConfig) => {
		const { token } = useAuthStorage();
		if (token) {
			//@ts-ignore
			config.headers.Authorization = `Bearer ${token}`;
		}

		if (config.data instanceof FormData) {
			//@ts-ignore
			config.headers['Content-Type'] = 'multipart/form-data';
		}
		return config;
	};

	private _handleResponse = ({ data }: AxiosResponse) => {
		return data;
	};

	private _handleError = ({ response }: AxiosError) => {
		return Promise.reject(response?.data);
	};
}
