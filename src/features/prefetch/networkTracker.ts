import axios from 'axios';


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

axios.interceptors.request.use((request) => {
	throw Error(request.data);
}, (error) => Promise.reject(error));

axios.interceptors.response.use((response) => response, (error) => getMockResponse(error));


class NetworkActivity {
	public pendingRequests = 0;

	public isNetworkFree = () => this.pendingRequests === 0;
}

export const networkActivity = new NetworkActivity();

axios.interceptors.request.use((request) => {
	networkActivity.pendingRequests++;
	console.log('added pending request: ', networkActivity.pendingRequests);
	return request;
});

axios.interceptors.response.use((response) => {
	networkActivity.pendingRequests--;
	console.log('deleted pending request: ', networkActivity.pendingRequests);
	return response;
});

