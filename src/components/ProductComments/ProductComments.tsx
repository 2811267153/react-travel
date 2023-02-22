import React from "react";
import "./index.css"

interface PropsType {
    data: {
        author: string,
        avatar: string,
        content: string,
        createDate: string
    }[]
}

export const ProductComments: React.FC<PropsType> = ({data}) => {
    return (
        <>
            {data.map(item => {
                return (
                    <div className="comment-conents">
                        <div className="contents-l">
                            <div>{item.author}</div>
                            <div className="comments-contents-img"><img src={`${item.avatar}`} alt={`${item.author}`}/></div>
                        </div>
                        <div className="contents-r">
                            <div>{item.content}</div>
                            <div style={{textAlign: "right", marginTop: 20}}>{item.createDate}</div></div>
                    </div>
                );
            })}
        </>
    )
}