export interface ICartItem {
    id: string;
    name: string;
    imageUrl: string;
    release_date: string;
    price: number;
    count: number
}

export interface TCartSlice {
    items: ICartItem[],
    totalPrice: number
}