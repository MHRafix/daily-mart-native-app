export interface IBusinessVendor {
	_id: string;
	userId: string;
	serviceId: string;
	vendorName: string;
	description: string;
	location: Location;
	avatar: string;
	cover: string;
	createdAt: Date;
	updatedAt: Date;
	__v: number;
}

export interface Location {
	lat: number;
	lng: number;
	address: string;
}
