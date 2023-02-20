/** @format */

import React, {Dispatch} from 'react';

import {Button, Layout, Input, Menu, Dropdown} from 'antd';
import Typography from 'antd/es/typography';
import '../../App.css';
import {withRouter, RouteComponentProps} from "../../helper/withRouter";
import  {RootState} from "../../store/store";
import {withTranslation, WithTranslation} from 'react-i18next';
import {addLanguageActionCreator, changeLanguageActionCreator} from "../../store/language/languageActions";
import {connect} from "react-redux";
// import { StarOutlined, StarFilled, StarTwoTone } from '@ant-design/icons';

const onSearch = (value: string) => console.log(value);

//定义mapStateToProps 函数

const mapStateToProps = (state: RootState) => {
    return {
        language: state.language.language,
        languageList: state.language.languageList,
    }
}
const mapDispatchToProps = (dispatch: Dispatch<any>) => {
    return {
        changeLanguage: (code: "zh" | "en") => {
            const action = changeLanguageActionCreator(code)
            dispatch(action)
        },
        addLanguageActionCreator: (name: string, code: string) => {
            const action = addLanguageActionCreator(name, code)
            dispatch(action)
        }
    }
}
//RouteComponentProps定义的是react-router的路由类型
//WithTranslation定义的是i18n的props类型
//ReturnType<typeof mapStateToProps>定义的是redux-store action映射类型
//ReturnType<typeof mapDispatchToProps>定义的是redux-store dispatch映射类型
type PropsType =
    RouteComponentProps
    & WithTranslation
    & ReturnType<typeof mapStateToProps>
    & ReturnType<typeof mapDispatchToProps>

class HeaderCompnent extends React.Component<PropsType> {

    menuClickHandler = (e: any) => {
        if (e.key === "new") {
            //处理新语言提那家
            this.props.addLanguageActionCreator("新语言", "new_lang")
        } else {
            this.props.changeLanguage(e.key)
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
                                        {this.props.languageList.map(item => {
                                            return <Menu.Item key={item.code}>{item.name}</Menu.Item>
                                        })}
                                        <Menu.Item key={"new"}>{t("header.add_new_language")}</Menu.Item>
                                    </Menu>
                                }>
                                    {this.props.language === "zh" ? "中文" : "English"}
                                </Dropdown.Button>
                                <Typography.Text
                                    style={{marginLeft: '10px'}}
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
                                          style={{margin: 0, lineHeight: '100px', textAlign: 'center'}}
                                          level={2}>
                            {t("header.title")}
                        </Typography.Title>
                        <div className="search-warp">
                            <Input.Search
                                placeholder="input search text"
                                allowClear
                                enterButton="Search"
                                size="large"
                                style={{width: '80%'}}
                                onSearch={onSearch}
                            />
                        </div>
                        <Menu
                            mode={"horizontal"}
                            items={[
                                {key: "1", label: t("header.home_page")},
                                {key: "2", label: t("header.weekend")},
                                {key: "3", label: t("header.group")},
                                {key: "4", label: t("header.backpack")},
                                {key: "5", label: t("header.private")},
                                {key: "6", label: t("header.cruise")},
                                {key: "7", label: t("header.hotel")},
                                {key: "8", label: t("header.local")},
                                {key: "9", label: t("header.theme")},
                                {key: "10", label: t("header.custom")},
                                {key: "11", label: t("header.study")},
                                {key: "12", label: t("header.visa")},
                                {key: "13", label: t("header.enterprise")},
                                {key: "14", label: t("header.high_end")},
                                {key: "15", label: t("header.outdoor")},
                                {key: "16", label: t("header.insurance")},
                            ]}
                        />
                    </Layout.Header>
                </div>
            </div>
        );
    }
};
export const Header = connect(mapStateToProps, mapDispatchToProps)(withTranslation()(withRouter(HeaderCompnent)))
