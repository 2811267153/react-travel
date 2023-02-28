import React from "react";
import {MainLayout} from "../../layout";
import {Col, Row} from "antd";
import {PaymentCard, ProductList } from "../../components";
import {Affix} from "antd/lib";
import {useAppDispatch, useSelector} from "../../store/hooks";
import {useNavigate} from "react-router-dom";
import {
    clearShoppingCartItem,
    checkout,
} from "../../store/productShoppingCart/slice";

export const ShoppingCart: React.FC = () => {
    const loading = useSelector(state => state.shoppingCard.loading)
    const shoppingCartItems = useSelector(state => state.shoppingCard.items)
    const jwt = useSelector((s) => s.user.token) as string;
    const navigate = useNavigate()
    const dispatch = useAppDispatch()
    return (
        <MainLayout>
            <Row>
                <Col span={16}>
                    <div>
                        <ProductList data={shoppingCartItems.map(s => s.touristRoute)}></ProductList>
                    </div>
                </Col>
                <Col span={8}>
                    <Affix>
                        <div>
                            <PaymentCard originalPrice={shoppingCartItems
                                .map((s) => s.originalPrice)
                                .reduce((a, b) => a + b, 0)}
                                         price={shoppingCartItems
                                             .map(
                                                 (s) =>
                                                     s.originalPrice *
                                                     (s.discountPresent ? s.discountPresent : 1)
                                             )
                                             .reduce((a, b) => a + b, 0)} loading={loading}
                                         onCheckout={() => {
                                             if (shoppingCartItems.length <= 0) {
                                                 return;
                                             }
                                             dispatch(checkout(jwt));
                                             navigate("/placeOrder");
                                         }}
                                         onShoppingCartClear={() => {
                                             dispatch(
                                                 clearShoppingCartItem({
                                                     jwt,
                                                     itemIds: shoppingCartItems.map((s) => s.id),
                                                 })
                                             );
                                         }}
                             ></PaymentCard>
                        </div>
                    </Affix>
                </Col>
            </Row>
        </MainLayout>
    )
}