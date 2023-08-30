import { AxiosInstance, AxiosResponse } from 'axios';
import { IServiceType } from '../model/ServiceTypes.model';
import http from './http.config';

class ServiceTypesApi {
	constructor(private httpReq: AxiosInstance) {}

	/**
	 * Get service types
	 * @returns
	 */
	getServiceTypes(): Promise<AxiosResponse<IServiceType[]>> {
		return this.httpReq.get('/service-types');
	}
}

const serviceTypesApi = new ServiceTypesApi(http);
export default serviceTypesApi;
