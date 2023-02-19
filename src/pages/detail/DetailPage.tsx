import React from "react";
import {useParams} from "react-router-dom";


export const DetailPage: React.FC = () => {
    const props = useParams<"touristRouteId">()
    return (
        <div>
            路由路线详情页面, 路由ID: {props.touristRouteId}
        </div>
    )
}