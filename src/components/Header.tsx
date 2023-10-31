import React, {useEffect, useState} from 'react';
import type {MenuProps} from 'antd';
import '../css/App.css'
import '../css/header.scss'
import {
    Col,
    Row,
    Menu,
    Input,
    Dropdown,
    theme,
    Divider, Affix
} from 'antd';

import { UserOutlined,TranslationOutlined } from '@ant-design/icons';
import {useLocation, Link} from 'react-router-dom';
import apiClient from "../serve/request";


const { useToken } = theme;

/*菜单*/
interface headNavList {
    headColumn:[];
    title: string;
    url: string;
}

const NavBar=()=>{
    const [headNav, setHeadNav] = useState<headNavList[]>([]); // 用于保存请求的用户数据
    useEffect(() => {
        // 发起 GET 请求
        apiClient.get<headNavList>('/config')
            .then(response => {
                setHeadNav(response.headColumn)
            })
            .catch(error => {
                console.error(error);
            });
    }, []);
    const NavStyle: React.CSSProperties = {
        background: 'none',
        borderBottom:'none',
    };
    const location = useLocation();

    return (
        <Menu selectedKeys={[location.pathname]} mode="horizontal"  style={NavStyle}>
            {headNav.map((ele,idx)=>(
                <Menu.Item key={ele.url}>
                    <Link to={ele.url} key={idx}>{ele.title}</Link>
                </Menu.Item>
            ))}
        </Menu>
    )
}

/*语言*/
const items: MenuProps['items'] = [
    {
        label: (
            // eslint-disable-next-line jsx-a11y/anchor-is-valid
            <a href="#" rel="noopener noreferrer" style={{color:'#fff'}}>
                English / 中文
            </a>
        ),
        key: 'ok',
    },
];

/*搜索*/
const { Search } = Input;
const onSearch = (value: string) => console.log(value);



const App: React.FC = () => {
    const { token } = useToken();
    const contentStyle: React.CSSProperties = {
        backgroundColor: token.colorBgElevated,
        borderRadius: token.borderRadiusLG,
        boxShadow: token.boxShadowSecondary,

    };
    const menuStyle: React.CSSProperties = {
        boxShadow: 'none',
        background:'black',
        color:'white',
    };
    return <Affix offsetTop={0} onChange={(affixed) => console.log(affixed)}>
        <div className="header" style={{
            position: 'static',
            top: 0,
            zIndex: 1,
            width: '100%',
        }}>
            <div className="headerBar">
                <Row align="middle">
                    <Col className="gutter-row logoBox"  xs={8} sm={6} md={6} lg={6} xl={4} xxl={3}>
                        <img className="logo" src="/img/band.png" alt="band"/>
                    </Col>
                    <Col className="gutter-row" xs={8} sm={6} md={5} lg={5} xl={5} xxl={5}>
                        <Search size="large" placeholder="input search text" onSearch={onSearch} enterButton />
                    </Col>
                    <Col  className="gutter-row"  xs={8} sm={6} md={5} lg={8} xl={10} xxl={11} style={{display:'flex',justifyContent:'flex-end'}}>
                        <NavBar/>
                    </Col>
                    <Divider type="vertical" />
                    <Col className="gutter-row" >
                        <div style={{padding:'0 20px'}}>
                            <UserOutlined/> login & register
                        </div>
                    </Col>
                    <Divider type="vertical" />
                    <Col span={1} >
                        <Dropdown
                            menu={{ items }}
                            arrow
                            placement="bottom"
                            dropdownRender={(menu) => (
                                <div style={contentStyle}>
                                    {React.cloneElement(menu as React.ReactElement, { style: menuStyle })}
                                </div>
                            )}
                        >
                            <TranslationOutlined style={{color:'#4096ff',fontSize:'20px',verticalAlign:'middle',marginLeft:'20px'}}/>
                        </Dropdown>
                    </Col>
                </Row>
            </div>
        </div>
    </Affix>

};

export default App;

