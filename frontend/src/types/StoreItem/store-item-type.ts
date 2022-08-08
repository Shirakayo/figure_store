type TPrice = {
	jp_price: string;
}

type TSpec = {
	scale?: string;
	size?: string;
}

type TDetails = {
	sculptor?: string;
}

type TStoreProps = {
	id: string;
	imageUrl: string
	name: string;
	status: string;
	price: TPrice;
}

export interface IItemsProps {
	item: TStoreProps;
}

export interface IItemInfo {
	id: string;
	name: string;
	fullName: string;
	jp_name: string;
	imageUrl: string;
	company: string;
	status: string;
	release_date: string;
	price: TPrice;
	spec?: TSpec;
	details?: TDetails;
	copyright?: string;
	category: string;
}

export interface ICategoryProps {
	category: number;
}