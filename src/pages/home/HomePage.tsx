import {CarouselS, Header, ProductCollection, SideMenu} from "../../components";
import {Col, Row, Typography} from "antd";
import sideImage1 from "../../assets/image/sider_2019_12-09.png";
import React from "react";
import {withTranslation, WithTranslation} from "react-i18next";
import axios from "axios";
import {Spin} from "antd/lib";
import {connect} from "react-redux";
import {RootState} from "../../store/store";
import {
    recommendProductActionCreator,
    recommendProductSuccesActionCreator,
    recommendProductFallActionCreator, giveMeDataActionCreateor
} from "../../store/recommendProduct/recommmendProducrAction"

//创建connect映射数据
const mapStateToProps = (state: RootState) => {
    return {
        loading: state.recommendProduct.loading,
        error: state.recommendProduct.errpr,
        productList: state.recommendProduct.productList
    }
}
const mapDispachToProps = (dispach: any) => {
    return {
        giveMeData: () => {
            dispach(giveMeDataActionCreateor())
        },
    }
}
//讲类型混合在一起
type PropsType = WithTranslation & ReturnType<typeof mapStateToProps> & ReturnType<typeof mapDispachToProps>

class HomePageComponent extends React.Component<PropsType> {
    componentDidMount() {
        this.props.giveMeData()
    }

    render() {
        const {t, productList, loading, error} = this.props
        if (loading) {
            return <Spin size="large"></Spin>
        }

        if (error) {
            return <>网站出错: {error}</>
        }
        return (
            <div className="page-content w">
                <Header/>
                <div>
                    <Row>
                        <Col span={6}>
                            <SideMenu></SideMenu>
                        </Col>
                        <Col span={18}>
                            <CarouselS></CarouselS>
                        </Col>
                    </Row>
                    <ProductCollection title={<Typography.Title level={3}
                                                                type="warning">{t("home_page.hot_recommended")} </Typography.Title>}
                                       products={productList[0].touristRoutes}
                                       sideImage={sideImage1}></ProductCollection>
                    <ProductCollection title={<Typography.Title level={3}
                                                                type="danger"> {t("home_page.new_arrival")} </Typography.Title>}
                                       products={productList[1].touristRoutes}
                                       sideImage={sideImage1}></ProductCollection>
                    <ProductCollection
                        title={<Typography.Title level={3}
                                                 type="success"> {t("home_page.domestic_travel")} </Typography.Title>}
                        products={productList[2].touristRoutes} sideImage={sideImage1}></ProductCollection>
                </div>
            </div>
        )
    }
}

export const HomePage = connect(mapStateToProps, mapDispachToProps)(withTranslation()(HomePageComponent))