import React from "react";
import {RegisterForm} from "../../components";
import {UserLayout} from "../../layout";

export const RegisterPage: React.FC = () => {
    return (
        <UserLayout>
            <RegisterForm></RegisterForm>
        </UserLayout>
    )
}