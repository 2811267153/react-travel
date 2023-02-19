/** @format */

import React from 'react';
import { Image } from 'antd';
import { Typography } from 'antd';
import {Link} from 'react-router-dom';

interface PropsTypes  {
	id: string | number;
	size: 'large' | 'small';
	image: string;
	price: number | string;
	title: string;
}

export const PronductImage: React.FC<PropsTypes> = ({
	id,
	size,
	image,
	price,
	title
}) => {
	 return (
		<Link to={`detail/${id}`}>
			{size === 'large' ? (
				<Image src={image} height={285} width={490}></Image>
			) : (
				<Image src={image} height={120} width={240}></Image>
			)}
			<div>
				<Typography.Text type="secondary">{title.slice(0, 25)}</Typography.Text>
				<Typography.Text type="danger" strong>${price}</Typography.Text>
			</div>
		</Link>
	);
};
// export const PronductImage = withRouter(ProductImgeComponent)
