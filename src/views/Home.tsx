import React, {useEffect, useState} from "react";
import apiClient from "../serve/request";
import {Carousel} from "antd";
interface headNavList {
    headNav:[];
    image: string;
    id: number;
}
const App: React.FC = () => {
    const [headNav, setHeadNav] = useState<headNavList[]>([]); // 用于保存请求的用户数据
    useEffect(() => {
        // 发起 GET 请求
        apiClient.get<headNavList>('')
            .then(response => {
                setHeadNav(response.headNav)
            })
            .catch(error => {
                console.error(error);
            });
    }, []);

    return <div className="wrap-content">
        <Carousel autoplay >
            {headNav.map(nav=>(
                <div key={nav.id}>
                    <img src={nav.image} alt="" />
                </div>
            ))}
        </Carousel>
    </div>
}
export default App;