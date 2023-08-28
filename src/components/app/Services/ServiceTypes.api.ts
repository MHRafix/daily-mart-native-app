import { AxiosInstance } from 'axios';
import http from './http.config';

class ServiceTypesApi {
	constructor(private httpReq: AxiosInstance) {}

	/**
	 * Get service types
	 * @returns
	 */
	getServiceTypes(): Promise<any> {
		return this.httpReq.get('/service-types');
	}
}

const serviceTypesApi = new ServiceTypesApi(http);
export default serviceTypesApi;
