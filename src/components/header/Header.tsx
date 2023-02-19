/** @format */

import React from 'react';

import { Button, Layout, Input, Menu, Dropdown, Space } from 'antd';
import Typography from 'antd/es/typography';
import type { MenuProps } from 'antd';
import '../../App.css';
import { DownOutlined, GlobalOutlined } from '@ant-design/icons';
import { useLocation, useNavigate, useParams,} from "react-router-dom";
// import { StarOutlined, StarFilled, StarTwoTone } from '@ant-design/icons';

const onSearch = (value: string) => console.log(value);

const items: MenuProps['items'] = [
	{ key: 1, label: '汉语', icon: <GlobalOutlined /> },
	{ key: 2, label: 'English', icon: <GlobalOutlined /> },
];
const meunData = [
	//首页机票酒店火车票度假团购门票当地人汽车票行程设计攻略旅游快讯
	{ key: 1, lable: '首页' },
	{ key: 2, lable: '机票' },
	{ key: 3, lable: '酒店' },
	{ key: 4, lable: '火车' },
	{ key: 5, lable: '团购' },
	{ key: 6, lable: '度假' },
	{ key: 7, lable: '门票' },
	{ key: 8, lable: '当地人' },
	{ key: 9, lable: '汽车票' },
	{ key: 10, lable: '行程设计' },
	{ key: 11, lable: '攻略' },
	{ key: 12, lable: '旅游咨询' },
];
const menuProps = {
	items,
};
export const Header: React.FC = () => {
	const history = useNavigate()
	const location = useLocation()
	const params = useParams()
	return (
		<div>
			<div className="w">
				<Layout.Header className="app-header">
					<div className="app-header-slong">
						<div>
							<Dropdown menu={menuProps}>
								<a>
									<Space className="btn-login">
										语言
										<DownOutlined />
									</Space>
								</a>
							</Dropdown>
							<Typography.Text
								style={{ marginLeft: '10px' }}
								className="btn-login">
								让旅游更幸福
							</Typography.Text>
						</div>
						<Button.Group>
							<Button type="link" className="btn-login" onClick={() => history("register")}>
								注册
							</Button>
							<Button type="link" className="btn-login" onClick={() => history("singIn")}>
								登陆
							</Button>
						</Button.Group>
					</div>

					<Typography.Title onClick={() => history('/')}
						style={{ margin: 0, lineHeight: '100px', textAlign: 'center' }}
						level={2}>
						React旅游网
					</Typography.Title>
					<div className="search-warp">
						<Input.Search
							placeholder="input search text"
							allowClear
							enterButton="Search"
							size="large"
							style={{ width: '80%' }}
							onSearch={onSearch}
						/>
					</div>
					<Menu
						style={{ borderRadius: '5px' }}
						mode={'horizontal'}
						items={meunData.map((item) => {
							return {
								key: item.key,
								label: item.lable,
							};
						})}></Menu>
				</Layout.Header>
			</div>
		</div>
	);
};
