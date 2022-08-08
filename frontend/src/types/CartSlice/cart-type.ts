export interface ICartItem {
    name: string;
    release_date: string;
    price: number;
    count: number
}

export interface TCartSlice {
    items: ICartItem[],
    totalPrice: number
}