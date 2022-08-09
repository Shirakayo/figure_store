import React from 'react';

const subAsideContent = [
	{
		image_url: 'https://img.amiami.com/images/b/zendesk_1106.jpg',
		link: 'https://support.amiami.com?page=1620'
	},
	{
		image_url: 'https://img.amiami.com/images/b/sp-price.jpg',
		link: 'https://support.amiami.com?page=1620'
	},
	{
		image_url: 'https://img.amiami.com/images/b/hanbai_english.jpg',
		link: 'https://support.amiami.com?page=1620'
	},
	{
		image_url: 'https://img.amiami.com/images/b/amiami_gentei_e.jpg',
		link: 'https://support.amiami.com?page=1620'
	},
	{
		image_url: 'https://img.amiami.com/images/b/amiamicomtopejas200100.jpg',
		link: 'https://support.amiami.com?page=1620'
	},
	{
		image_url: 'https://img.amiami.com/images/b/symphonymikucom200100.jpg',
		link: 'https://support.amiami.com?page=1620'
	},
	{
		image_url: 'https://img.amiami.com/images/b/zendesk_1106.jpg',
		link: 'https://support.amiami.com?page=1620'
	},
	{
		image_url: 'https://img.amiami.com/images/b/comasahi200100.jpg',
		link: 'https://support.amiami.com?page=1620'
	},
	{
		image_url: 'https://img.amiami.com/images/b/com_kinako_200100.jpg',
		link: 'https://support.amiami.com?page=1620'
	},
	{
		image_url: 'https://img.amiami.com/images/b/com_ruka_200×100.jpg',
		link: 'https://support.amiami.com?page=1620'
	},
	{
		image_url: 'https://img.amiami.com/images/b/comjavelin200100.jpg',
		link: 'https://support.amiami.com?page=1620'
	},
	{
		image_url: 'https://img.amiami.com/images/b/com_ryza_200×100.jpg',
		link: 'https://support.amiami.com?page=1620'
	},
	{
		image_url: 'https://img.amiami.com/images/b/com_shahana_naana_200×100.jpg',
		link: 'https://support.amiami.com?page=1620'
	},
	{
		image_url: 'https://img.amiami.com/images/b/comminki200100.jpg',
		link: 'https://support.amiami.com?page=1620'
	},
]

const SubAside: React.FC = () => {
	return (
		<aside>
			<ul className='flex flex-col gap-3'>
				{subAsideContent.map(item =>
					<li>
						<a href={item.link}>
							<img src={item.image_url} alt="post"/>
						</a>
					</li>
				)}
			</ul>
		</aside>
	);
};

export default SubAside;
