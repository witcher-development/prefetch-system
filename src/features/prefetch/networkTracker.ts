import axios, { AxiosRequestConfig } from 'axios';


const getMockError = (config: AxiosRequestConfig) => {
	const mockError = new Error(config.data);

	return Promise.reject(mockError);
};

const getMockResponse = (mockError: Error) => {
	const { message } = mockError;
	return Promise.resolve({
		data: message,
		status: 200,
		statusText: 'OK',
		headers: {},
		isMock: true
	});
};

axios.interceptors.request.use((config) => getMockError(config), (error) => Promise.reject(error));

axios.interceptors.response.use((response) => response, (error) => getMockResponse(error));


class NetworkActivity {
	public pendingRequests = 0;

	public isNetworkFree = () => this.pendingRequests === 0;
}

export const networkActivity = new NetworkActivity();

axios.interceptors.request.use(() => {
	networkActivity.pendingRequests++;
	console.log('added pending request: ', networkActivity.pendingRequests);
});

axios.interceptors.response.use(() => {
	networkActivity.pendingRequests--;
	console.log('deleted pending request: ', networkActivity.pendingRequests);
},);

