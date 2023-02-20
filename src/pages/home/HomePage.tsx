import {CarouselS, Header, ProductCollection, SideMenu} from "../../components";
import {Col, Row, Typography} from "antd";
import sideImage1 from "../../assets/image/sider_2019_12-09.png";
import React from "react";
import {withTranslation, WithTranslation} from "react-i18next";
import axios from "axios";
import {productList1, productList2} from "../../components/common/mockup";
import {Spin} from "antd/lib";

//
interface State {
    productList: any[],
    loading: boolean,
    error: string | null
}

class HomePageComponent extends React.Component<WithTranslation, State> {

    //初始化函数 把产品列表初始化为空数组
    constructor(props: any) {
        super(props);
        this.state = {
            productList: [],
            loading: true,
            error: null,
        }
    }

    async componentDidMount() {
        try {
            const {data} = await axios.get("http://123.56.149.216:8080/api/productCollections")
            this.setState({
                productList: data,
                loading: false,
                error: null
            })
        }catch (e) {
            if (e instanceof Error) {
                this.setState({
                    loading: false,
                    error: e.message
                })
            }
        }
    }

    render() {
        const {t} = this.props
        const {productList, loading, error} = this.state
        if(loading) {
            return <Spin size="large"></Spin>
        }

        if(error) {
            return  <>网站出错: {error}</>
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
                                       products={productList[0].touristRoutes} sideImage={sideImage1}></ProductCollection>
                    <ProductCollection title={<Typography.Title level={3}
                                                                type="danger"> {t("home_page.new_arrival")} </Typography.Title>}
                                       products={productList[1].touristRoutes} sideImage={sideImage1}></ProductCollection>
                    <ProductCollection
                        title={<Typography.Title level={3}
                                                 type="success"> {t("home_page.domestic_travel")} </Typography.Title>}
                        products={productList[2].touristRoutes} sideImage={sideImage1}></ProductCollection>
                </div>
            </div>
        )
    }
}

export const HomePage = withTranslation()(HomePageComponent)