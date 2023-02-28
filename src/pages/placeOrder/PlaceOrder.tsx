import React from "react";
import { PaymentForm, CheckOutCard } from "../../components";
import { Row, Col } from "antd";
import {MainLayout} from "../../layout";

export const PlaceOrderPage: React.FC = (props) => {
    return (
        <MainLayout>
            <Row>
                <Col span={12}>
                    <PaymentForm />
                    placerOrder
                </Col>
                <Col span={12}>
                     <CheckOutCard  loading={true} onCheckout={() => {}} order={}/>
                </Col>
            </Row>
        </MainLayout>
    );
};