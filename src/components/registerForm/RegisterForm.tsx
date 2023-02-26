import React from 'react';
import {Button, Checkbox, Form, Input, message} from 'antd';
import "./index.css"
import axios from "axios";
import {useNavigate} from "react-router-dom";


export const RegisterForm: React.FC = () => {
    const [messageApi, contextHolder] = message.useMessage();
    const navigate = useNavigate()
    const onFinishFailed = (errorInfo: any) => {
        messageApi.info('提交失败, 请重试!');
    };
    const onFinish = async (values: any) => {

        try {
            await axios.post("http://123.56.149.216:8080/auth/register", {
                email: values.username, password: values.password, confirmPassword: values.confirmPassword
            })
            messageApi.info('提交成功, 正在为你打开登陆页面').then(() => {
                navigate('/singIn')
            });
        }catch (e) {
            messageApi.info('提交失败, 请重试!');
        }
    };

    return (
        <>
            {contextHolder}
            <Form
                name="basic"
                labelCol={{span: 0}}
                wrapperCol={{span: 24}}
                className="form-container"
                initialValues={{remember: true}}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
                labelAlign="left"
            >
                <Form.Item
                    label="姓名"
                    name="username"
                    rules={[{required: true, message: 'Please input your username!'}]}
                >
                    <Input/>
                </Form.Item>

                <Form.Item
                    label="密码"
                    name="password"
                    rules={[{required: true, message: 'Please input your password!'}]}
                >
                    <Input.Password/>
                </Form.Item>
                <Form.Item
                    label="密码"
                    hasFeedback
                    name="confirmPassword"
                    rules={[
                        {required: true, message: 'Please input your Confirm password!'},
                        ({getFieldValue}) => ({
                            validator(_, value) {
                                if (!value || getFieldValue("password") === value) {
                                    return Promise.resolve()
                                }
                                return Promise.reject("密码确认不一致")
                            }
                        })
                    ]}
                >
                    <Input.Password/>
                </Form.Item>

                <Form.Item name="remember" valuePropName="checked" wrapperCol={{offset: 0, span: 24}}>
                    <Checkbox>Remember me</Checkbox>
                </Form.Item>

                <Form.Item wrapperCol={{offset: 0, span: 24}}>
                    <Button type="primary" htmlType="submit">
                        Submit
                    </Button>
                </Form.Item>
            </Form>
        </>
    );

}