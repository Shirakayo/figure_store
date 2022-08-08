import React from 'react';

type newsProps = {
	id: number;
	title: string;
	important: boolean;
}

interface newsItemProps {
	newsList: newsProps[]
}

const NewsItem:React.FC<newsItemProps> = ({newsList}) => {
	return (
		<div>
			{newsList.map((item) =>
				<div key={item.id} className='text-gray-400 font-bold bg-gray-400 bg-opacity-10 mb-2 p-1 px-2'>{item.important ? <span className='text-red-600 font-bold'>[Important]</span> : ''}{item.title}</div>
			)}
		</div>
	);
};

export default NewsItem
