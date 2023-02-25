import React from "react";
import {Header} from "../../components";

interface PropsType {
    children: React.ReactNode
}

export const MainLayout: React.FC<PropsType> = ({children}) => {
    return (
        <div className="page-content w">
            <Header/>
            {children}
        </div>
    )
}