import { AxiosInstance, AxiosResponse } from 'axios';
import { IBusinessVendor } from '../model/BusinessVendor.model';
import http from './http.config';

class BusinessVendorApi {
	constructor(private httpReq: AxiosInstance) {}

	/**
	 * Get service types
	 * @returns
	 */
	async getBusinessVendorsListByServiceId(
		serviceId: string
	): Promise<AxiosResponse<IBusinessVendor[]>> {
		return this.httpReq.get(`/business-vendor/${serviceId}`);
	}
}

const businessVendorApi = new BusinessVendorApi(http);
export default businessVendorApi;
