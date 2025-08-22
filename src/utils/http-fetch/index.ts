import { AxiosRequestConfig, AxiosResponse } from 'axios';
import { HttpClient } from './httpClient';
import { BASE_URL } from '@env';

export class HttpApi extends HttpClient {
	private static classInstance?: HttpApi;
	private static baseUrl: string = BASE_URL;

	private constructor() {
		super(HttpApi.baseUrl);
	}

	public static getInstance = () => {
		if (!this.classInstance) {
			this.classInstance = new HttpApi();
		}
		return this.classInstance;
	};

	// ** POST **
	public post = async <T, R>(data: T, uri: string): Promise<R> => {
		return this.instance.post<T, AxiosResponse<R>>(uri, data);
	};

	// ** GET **
	public get = async <R>(uri: string): Promise<R> => {
		return await this.instance.get<R>(uri);
	};

	// ** GET with body **
	public getWithBody = async <R, D>(uri: string, data: D): Promise<R> => {
		const config: AxiosRequestConfig = {
			data: data,
		};
		return this.instance.get<R>(uri, config);
	};

	// ** PATCH **
	public update = async <T, R>(data: T, uri: string): Promise<R> => {
		return this.instance.patch<T, AxiosResponse<R>>(uri, data);
	};

	// ** DELETE **
	public delete = async <T, R>(uri: string): Promise<R> => {
		return this.instance.delete<T, AxiosResponse<R>>(uri);
	};

	// ** fetch api `GET` Call for third party api calls **
	public makeGet = async <T>(url: string, headers: Record<string, string> = {}): Promise<T> => {
		const response = await fetch(url, {
			headers: {
				'Content-Type': 'application/json',
				...headers,
			},
		});
		if (!response.ok) {
			return Promise.reject(response.statusText);
		}
		const result = (await response.json()) as T;
		return Promise.resolve(result);
		// return (await response.json()) as T;
	};

	// ** fetch api `POST` Call for third party api calls **
	public makePost = async <D, R>(url: string, data: D): Promise<R> => {
		const response = await fetch(url, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(data),
		});
		if (!response.ok) {
			return Promise.reject(response.statusText);
		}
		const result = (await response.json()) as R;
		return Promise.resolve(result);
		// return (await response.json()) as T;
	};
}
