import React from "react";
import {MainLayout} from "../../layout";
import {Col, Row} from "antd";
import {PaymentCard, ProductList } from "../../components";
import {Affix} from "antd/lib";

export const ShoppingCart: React.FC = () => {
    return (
        <MainLayout>
            <Row>
                <Col span={16}>
                    <div>
                        {/*<ProductList></ProductList>*/}
                    </div>
                </Col>
                <Col span={8}>
                    <Affix>
                        <div>
                            {/*<PaymentCard></PaymentCard>*/}
                        </div>
                    </Affix>
                </Col>
            </Row>
        </MainLayout>
    )
}