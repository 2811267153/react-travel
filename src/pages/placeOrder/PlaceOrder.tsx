import React from "react";
import { PaymentForm, CheckOutCard } from "../../components";
import { Row, Col } from "antd";
import {MainLayout} from "../../layout";
import {useAppDispatch, useSelector} from "../../store/hooks";
import {placeOrder} from "../../store/order/slice";

export const PlaceOrderPage: React.FC = (props) => {
    const jwt = useSelector(state => state.user.token) as string
    const loading = useSelector(state => state.order.loading)
    const order = useSelector(state => state.order.currentOrder)

    const disparch = useAppDispatch()

    return (
        <MainLayout>
            <Row>
                <Col span={12}>
                    <PaymentForm />
                </Col>
                <Col span={12}>
                     <CheckOutCard  loading={loading} onCheckout={() => {
                         disparch(placeOrder({jwt, orderId: order.id}))
                     }} order={order}/>
                </Col>
            </Row>
        </MainLayout>
    );
};