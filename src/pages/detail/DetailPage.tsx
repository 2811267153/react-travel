import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import axios from "axios";
import {Header, ProductIntro, ProductComments} from "../../components";
import {Col, DatePicker, Row, Spin, Space, Divider, Typography, Anchor, Menu} from "antd";
import {commentMockData} from "../../components/ProductComments/mockup";

export const DetailPage: React.FC = () => {
    const props = useParams<"touristRouteId">()
    const [loading, setLoading] = useState<boolean>(true)
    const [product, setProducr] = useState<any>(null)
    const [error, setError] = useState<string | null>(null)

    const {RangePicker} = DatePicker;
    useEffect(() => {
        const fetchData = async () => {
            setLoading(true)
            try {
                const {data} = await axios.get(`http://123.56.149.216:8080/api/touristRoutes/${props.touristRouteId}`)
                setProducr(data)
                console.log("data", data)
                setLoading(false)
                setError(null)
            } catch (e) {
                setError(e instanceof Error ? e.message : "error")
                setLoading(false)
            }
        }
        fetchData()
    }, [])
    if (loading) {
        return <Spin size="large"></Spin>
    }

    if (error) {
        return <>网站出错: {error}</>
    }
    return (

        <div>
            <Header/>
            <div className="page-content w">
                <>
                    <Row>
                        <Col span={13}>
                            <ProductIntro coupons={product.coupons} discount={product.discount}
                                          touristRoutePictures={product.touristRoutePictures} price={product.price}
                                          rating={product.rating}
                                          shortDescription={product.shortDescription}
                                          title={product.title}></ProductIntro>
                        </Col>
                        <Col span={11}>
                            <Space direction="vertical" size={12}>
                                <RangePicker style={{marginTop: "40px"}}/>
                            </Space>
                        </Col>
                    </Row>
                </>
                <Anchor className="Anchor" direction="horizontal"
                    items={[
                    {
                        key: '1',
                        href: '#feature',
                        title: 'Part 1',
                    },         {
                        key: '2',
                        href: '#fees',
                        title: 'Part 2',
                    }, {
                            key: '3',
                            href: '#notes',
                            title: 'Part 3',
                        },
                ]}>
                </Anchor>
                <div id="feature">
                    <Divider orientation={"center"}>
                        <Typography.Title level={3}>产品特色</Typography.Title>
                    </Divider>
                    <div dangerouslySetInnerHTML={{__html: product.features}} style={{marginTop: 50}}></div>
                </div>

                <div style={{marginTop: 40}} id="fees">
                    <Divider orientation={"center"}>
                        <Typography.Title level={3}>费用</Typography.Title>
                    </Divider>
                    <div dangerouslySetInnerHTML={{__html: product.fees}} style={{marginTop: 50}}></div>
                </div>
                <div style={{marginTop: 40}} id="notes">
                    <Divider orientation={"center"}>
                        <Typography.Title level={3}>费用</Typography.Title>
                    </Divider>
                    <div dangerouslySetInnerHTML={{__html: product.notes}} style={{marginTop: 50}}></div>
                </div>
                <Divider plain>
                    <Typography.Title level={3}>产品特色</Typography.Title>
                </Divider>
                <ProductComments data={commentMockData}></ProductComments>

            </div>
        </div>
    )
}