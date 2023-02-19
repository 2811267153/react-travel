/** @format */

import { Divider, Row, Col, Image } from 'antd';
import React from 'react';
import { PronductImage } from './ProductImage';
interface PropsTypes {
	title: JSX.Element;
	sideImage: string;
	products: any;
}
export const ProductCollection: React.FC<PropsTypes> = ({
	title,
	sideImage,
	products,
}) => {
	return (
		<div>
			<Divider orientation="left">{title}</Divider>
			<Row>
				<Col span={4}>
					<Image src={sideImage}></Image>
				</Col>
				<Col span={20}>
					<Row>
						<Col span={12}>
							<PronductImage
								size={'large'}
								title={products[0].title}
								image={products[0].touristRoutePictures[0].url}
								price={products[0].price}
								id={products[0].id}></PronductImage>
						</Col>
						<Col span={12}>
							<Row>
								<Col span={12}>
									<PronductImage
										size={'small'}
										title={products[1].title}
										image={products[1].touristRoutePictures[0].url}
										price={products[1].price}
										id={products[1].id}></PronductImage>
								</Col>
								<Col span={12}>
									<PronductImage
										size={'small'}
										title={products[2].title}
										image={products[2].touristRoutePictures[0].url}
										price={products[2].price}
										id={products[2].id}></PronductImage>
								</Col>
							</Row>
							<Row>
								<Col span={12}>
									<PronductImage
										size={'small'}
										title={products[1].title}
										image={products[1].touristRoutePictures[0].url}
										price={products[1].price}
										id={products[1].id}></PronductImage>
								</Col>
								<Col span={12}>
									<PronductImage
										size={'small'}
										title={products[2].title}
										image={products[2].touristRoutePictures[0].url}
										price={products[2].price}
										id={products[2].id}></PronductImage>
								</Col>
							</Row>
						</Col>
					</Row>
					<Row>
						<Col span={6}>
							<PronductImage
								size={'small'}
								title={products[3].title}
								image={products[3].touristRoutePictures[0].url}
								price={products[3].price}
								id={products[3].id}></PronductImage>
						</Col>
						<Col span={6}>
							<PronductImage
								size={'small'}
								title={products[4].title}
								image={products[4].touristRoutePictures[0].url}
								price={products[4].price}
								id={products[4].id}></PronductImage>
						</Col>
						<Col span={6}>
							<PronductImage
								size={'small'}
								title={products[7].title}
								image={products[7].touristRoutePictures[0].url}
								price={products[7].price}
								id={products[7].id}></PronductImage>
						</Col>
						<Col span={6}>
							<PronductImage
								size={'small'}
								title={products[8].title}
								image={products[8].touristRoutePictures[0].url}
								price={products[8].price}
								id={products[8].id}></PronductImage>
						</Col>
					</Row>
				</Col>
			</Row>
		</div>
	);
};
