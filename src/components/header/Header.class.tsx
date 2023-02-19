/** @format */

import React from 'react';

import { Button, Layout, Input, Menu, Dropdown, Space } from 'antd';
import Typography from 'antd/es/typography';
import type { MenuProps } from 'antd';
import '../../App.css';
import { GlobalOutlined } from '@ant-design/icons';
import {withRouter, RouteComponentProps} from "../../helper/withRouter";
import store from "../../store/store";
import {LanguageState} from "../../store/language/languagRedux";
import { withTranslation, WithTranslation } from 'react-i18next';
// import { StarOutlined, StarFilled, StarTwoTone } from '@ant-design/icons';

const onSearch = (value: string) => console.log(value);


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

interface State extends LanguageState{};
class HeaderCompnent extends React.Component<RouteComponentProps & WithTranslation,State>{
	constructor(props: any) {

		super(props);
		const storeState = store.getState();

		this.state = {
			language: storeState.language,
			languageList: storeState.languageList
		}
	}
	menuClickHandler = (e: any) => {
		console.log(e.key)
		if (e.key === "new") {
			//处理新语言提那家
			const action = {
				type: "add_language",
				payload: {code: "new_lang", name: "新语言"}
			}
			store.dispatch(action)
		}else {
			const action = {
				type: "change_language",
				payload: e.key
			};
			store.dispatch(action)
			store.subscribe(() => {
				const storetate = store.getState()
				this.setState({
					language: storetate.language,
					languageList: storetate.languageList
				})
			})
		}
	}
	render() {
		const {navigate: history, t} = this.props
		return (
			<div>
				<div className="w">
					<Layout.Header className="app-header">
						<div className="app-header-slong">
							<div>
								<Dropdown.Button style={{marginTop: "27px", width: "100px"}} overlay={
									<Menu onClick={this.menuClickHandler}>
										{this.state.languageList.map(item => {
											return <Menu.Item key={item.code}>{item.name}</Menu.Item>
										})}
										<Menu.Item key={"new"}>{t("header.add_new_language")}</Menu.Item>
									</Menu>
								}>
									{this.state.language === "zh" ? "中文" : "English"}
								</Dropdown.Button>
								<Typography.Text
									style={{ marginLeft: '10px' }}
									className="btn-login">
									{t("header.slogan")}
								</Typography.Text>
							</div>
							<Button.Group>
								<Button type="link" className="btn-login" onClick={() => history("register")}>
									{t("header.register")}
								</Button>
								<Button type="link" className="btn-login" onClick={() => history("singIn")}>
									{t("header.signin")}
								</Button>
							</Button.Group>
						</div>

						<Typography.Title onClick={() => history('/')}
										  style={{ margin: 0, lineHeight: '100px', textAlign: 'center' }}
										  level={2}>
							{t("header.title")}
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
							mode={"horizontal"}
							items={[
								{ key: "1", label: t("header.home_page") },
								{ key: "2", label: t("header.weekend") },
								{ key: "3", label: t("header.group") },
								{ key: "4", label: t("header.backpack") },
								{ key: "5", label: t("header.private") },
								{ key: "6", label: t("header.cruise") },
								{ key: "7", label: t("header.hotel") },
								{ key: "8", label: t("header.local") },
								{ key: "9", label: t("header.theme") },
								{ key: "10", label: t("header.custom") },
								{ key: "11", label: t("header.study") },
								{ key: "12", label: t("header.visa") },
								{ key: "13", label: t("header.enterprise") },
								{ key: "14", label: t("header.high_end") },
								{ key: "15", label: t("header.outdoor") },
								{ key: "16", label: t("header.insurance") },
							]}
						/>
					</Layout.Header>
				</div>
			</div>
		);
	}
};
export const Header = withTranslation()(withRouter(HeaderCompnent))
