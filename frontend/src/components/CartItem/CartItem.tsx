import React from 'react';
import { useAppDispatch } from '../../redux/store';
import {deleteCartItems} from "../../redux/slice/CartSlice";

type CartItemProps = {
	imageUrl: string;
	name: string;
	release_date: string;
	price: number;
	count: number;
}

interface CartProps {
	item: CartItemProps
}


const CartItem: React.FC<CartProps> = ({item}) => {
	
	const deleteItem = () => {
		// @ts-ignore
		dispatch(deleteCartItems(item))
	}
	
	const dispatch = useAppDispatch()
	return (
		<div style={{borderBottom: '1px solid #e5e5e5', padding: '15px 0'}}>
			<div style={{display: 'flex', marginBottom: '5px'}}>
				<div className='flex gap-5'>
					<img className='w-20' src={item.imageUrl} alt="figure"/>
					<p className='text-xl text-gray-500 mr-10'>{item.name}</p>
				</div>
				<div className='flex gap-10'>
					<div>
						<p className='text-sm text-gray-500'>Release Date</p>
						<span className='text-lg'>{item.release_date}</span>
					</div>
					<div>
						<p className='text-gray-500 text-sm'>Unit Price</p>
						<div className='text-xl text-orange-400 font-bold'>{item.price} <span className='text-xs'>JPY</span></div>
					</div>
				</div>
			</div>
			<div className='flex justify-center'>
				<button onClick={() => deleteItem()} className='border border-gray-300 rounded-md px-3 text-black hover:text-gray-500'>Delete</button>
			</div>
		</div>
	);
};

export default CartItem;
