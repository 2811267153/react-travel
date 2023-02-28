import React, {useEffect} from "react";
import {useParams} from "react-router-dom";
import {Header, ProductIntro, ProductComments} from "../../components";
import {Col, DatePicker, Row, Spin, Space, Divider, Typography, Anchor, Button, message} from "antd";
import {commentMockData} from "../../components/ProductComments/mockup";
import {getProductDetail} from "../../store/productDetail/slice";
import {useAppDispatch, useSelector,} from "../../store/hooks";
import {LoadingOutlined} from '@ant-design/icons';
import {MainLayout} from "../../layout";
import './index.css'
import {addShoppingCartItem} from "../../store/productShoppingCart/slice";

type MatchParams = {
    touristRouteId: string;
};
const antIcon = <LoadingOutlined style={{fontSize: 24}} spin/>
export const DetailPage: React.FC = () => {
    const {touristRouteId} = useParams<MatchParams>()
    // const [loading, setLoading] = useState<boolean>(true)
    // const [product, setProducr] = useState<any>(null)
    // const [error, setError] = useState<string | null>(null)
    const loading = useSelector(state => state.productDetail.loading)
    const error = useSelector(state => state.productDetail.error)
    const product = useSelector(state => state.productDetail.data)
    const jwt = useSelector(state => state.user.token)
    const [messageApi, contextHolder] = message.useMessage();

    const dispatch = useAppDispatch()

    const {RangePicker} = DatePicker;
    useEffect(() => {
        if ({touristRouteId}) {
            // 因为这里的dispatch 类型和我们传入的类型不一致 所以 我们需要手动在store添加一个类型
            dispatch(getProductDetail(touristRouteId!))
        }
    }, [])
    if (loading) {
        return (
            <Spin
                indicator={antIcon}
                size="large"
                style={{
                    marginTop: 400,
                    marginBottom: 400,
                    marginLeft: "auto",
                    marginRight: "auto",
                    width: "100%",
                }}
            />
        );
    }
    if (error) {
        return <>网站出错: {error}</>
    }

    const addShoppingCartBtn = (product) => {
        return () => {
            if(jwt) {
                const newPriduct = {jwt,...product}
                dispatch(addShoppingCartItem(newPriduct))
                messageApi.success('添加购物车完成');
            }
        }
    }
    return (
        <MainLayout>
            <>
                {contextHolder}
                <Row>
                    <Col span={13}>
                        <ProductIntro coupons={product.coupons} discount={product.discount}
                                      touristRoutePictures={product.touristRoutePictures} price={product.price}
                                      rating={product.rating}
                                      shortDescription={product.shortDescription}
                                      title={product.title}></ProductIntro>
                    </Col>
                    <Col span={11}>
                        <div className="to_pay">
                            <div>
                                <Space direction="vertical" size={12}>
                                    <RangePicker autoFocus/>
                                </Space>
                            </div>
                            <div>
                                <Button type="primary" danger className="pay-btn" onClick={addShoppingCartBtn(product)}>添加购物车</Button>
                            </div>
                        </div>
                    </Col>
                </Row>
            </>
            <Anchor className="Anchor" direction="horizontal"
                    items={[
                        {
                            key: '1',
                            href: '#feature',
                            title: 'Part 1',
                        }, {
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
        </MainLayout>
    )
}