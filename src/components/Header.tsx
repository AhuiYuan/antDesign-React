import React, {useState} from 'react';
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
const { useToken } = theme;
const items2: MenuProps['items'] = [
    {
        label: 'Home',
        key: 'mail',
    },
    {
        label: 'Product',
        key: 'app',
    },
    {
        label: 'News',
        key: 'alipay',
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
    const [current, setCurrent] = useState('mail');

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
                <Col className="gutter-row logoBox" span={3} >
                    <img className="logo" src="/img/band.png" alt="band"/>
                </Col>
                <Col className="gutter-row" span={5}>
                    <div>
                        <Search size="large" placeholder="input search text" onSearch={onSearch} enterButton />
                    </div>
                </Col>
                <Col  className="gutter-row" span={12} style={{display:'flex',justifyContent:'flex-end'}}>
                    <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items2} style={{borderBottom:'none'}}/>
                </Col>
                <Divider type="vertical" />
                <Col className="gutter-row" span={2} >
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

