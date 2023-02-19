import {CarouselS, Header, ProductCollection, SideMenu} from "../../components";
import { Col, Row, Typography} from "antd";
import {productList1, productList2, productList3} from "../../components/common/mockup";
import sideImage1 from "../../assets/image/sider_2019_12-09.png";
import React from "react";
import {withRouter} from "../../helper/withRouter";
import {withTranslation, WithTranslation} from "react-i18next";

class HomePageComponent extends React.Component<WithTranslation> {
    render() {
        const {t} = this.props
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
                    <ProductCollection title={<Typography.Title level={3} type="warning">{t("home_page.hot_recommended")} </Typography.Title>}
                                       products={productList1} sideImage={sideImage1}></ProductCollection>
                    <ProductCollection title={<Typography.Title level={3} type="danger"> {t("home_page.new_arrival")} </Typography.Title>}
                                       products={productList2} sideImage={sideImage1}></ProductCollection>
                    <ProductCollection
                        title={<Typography.Title level={3} type="success"> {t("home_page.domestic_travel")} </Typography.Title>}
                        products={productList3} sideImage={sideImage1}></ProductCollection>
                </div>
            </div>
        )
    }
}

export const HomePage = withTranslation()(HomePageComponent)