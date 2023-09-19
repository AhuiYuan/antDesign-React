import React, {useEffect, useState} from "react";
import apiClient from "../serve/request";
import {Carousel} from "antd";
import '../css/home.scss'
interface headNavList {
    headNav:[];
    image: string;
    id: number;
}

const Swipper=()=>{
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
    return (
        <div className="wrap-content">
            <Carousel autoplay >
                {headNav.map(nav=>(
                    <div className="swipperBox" key={nav.id}>
                        <img src={nav.image} alt="" />
                    </div>
                ))}
            </Carousel>
        </div>

    )
}
const App: React.FC = () => {
    return <div>
            <Swipper/>
    </div>
}
export default App;