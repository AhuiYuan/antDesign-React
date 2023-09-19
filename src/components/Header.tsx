import React, { useState} from 'react';
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
import {useNavigate,useLocation } from 'react-router-dom';


const { useToken } = theme;
const navList: MenuProps['items'] = [
    {
        label:'Home',
        key: 'home',
    },
    {
        label: 'About',
        key: 'about',
    },
    {
        label: 'Contact',
        key: 'contact',
    },
];
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
const NavBar=()=>{
    const NavStyle: React.CSSProperties = {
        background: 'none',

        borderBottom:'none',
    };
    const location = useLocation();
    const path = location.pathname.substring(1);
    const [current, setCurrent] = useState(path);

    const navigate = useNavigate()
    const onClick: MenuProps['onClick'] = (e) => {
        console.log('click ', e);
        setCurrent(e.key);
        navigate(`/${e.key.toLowerCase()}`); // 根据菜单项的 key 值进行路由跳转
    };
    return (
        <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal" items={navList} style={NavStyle}/>
    )
}



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

