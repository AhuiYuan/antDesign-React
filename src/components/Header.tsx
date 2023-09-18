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
    Divider
} from 'antd';

import { UserOutlined,TranslationOutlined } from '@ant-design/icons';
import {NavLink, useNavigate} from 'react-router-dom';

const { useToken } = theme;
const navList: MenuProps['items'] = [
    {
        label:'Home',
        key: 'Home',
    },
    {
        label: 'About',
        key: 'About',
    },
    {
        label: 'Contact',
        key: 'Contact',
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
    const [current, setCurrent] = useState('Home');
    const navigate = useNavigate()
    const onClick: MenuProps['onClick'] = (e) => {
        console.log('click ', e);
        setCurrent(e.key);
    };

    return <div className="header" style={{
        position: 'sticky',
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
                    <div>
                        <Search size="large" placeholder="input search text" onSearch={onSearch} enterButton />
                    </div>
                </Col>
                <Col  className="gutter-row"  xs={8} sm={6} md={5} lg={8} xl={10} xxl={11} style={{display:'flex',justifyContent:'flex-end'}}>
                   <Menu onClick={onClick}  selectedKeys={[current]} mode="horizontal" items={navList} style={{borderBottom:'none'}}/>
                </Col>
                <Divider type="vertical" />
                <Col className="gutter-row" >
                    <div style={{paddingLeft:'20px'}}>
                        <UserOutlined /> login & register
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
    </div>;
};

export default App;

