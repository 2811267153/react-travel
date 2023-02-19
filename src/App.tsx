/** @format */

import React from 'react';
import { Header } from './components';

import { Col, Row, Slider } from 'antd';
import { SideMenu } from './components/sideMenu/SideMenu';
import { CarouselS } from './components/carousel';
import { Typography } from 'antd';
import { ProductCollection } from './components/ProductCollection';

import sideImage1 from './assets/image/sider_2019_12-09.png';
import sideImage2 from './assets/image/sider_2019_02-04.png';
import sideImage3 from './assets/image/sider_2019_02-04-2.png';

import { productList1, productList2, productList3 } from "./components/common/mockup";

const App: React.FC = () => {
	return (
		<div className="app">
			<Header />

			<div className="page-content w">
				<Row>
					<Col span={6}>
						<SideMenu></SideMenu>
					</Col>
					<Col span={18}>
						<CarouselS></CarouselS>
					</Col>
				</Row>
        <ProductCollection title={<Typography.Title level={3} type="warning" />} products={productList1} sideImage={sideImage1}></ProductCollection>
        <ProductCollection title={<Typography.Title level={3} type="danger" />} products={productList1} sideImage={sideImage1}></ProductCollection>
			</div>
		</div>
	);
};

export default App;
