import {useState} from 'react';
import {NavBar, TabBar} from 'antd-mobile';
import {AppOutline, MessageOutline, UnorderedListOutline, UserOutline} from 'antd-mobile-icons';
import './layout.css';
import TodoPage from "../pages/todo";
import MessagePage from "../pages/message";
import MyPage from "../pages/my";
import HomePage from "../pages/home";


const tabs = [
    {
        key: 'home',
        title: '首页',
        icon: <AppOutline/>,
        component: <HomePage/>
    },
    {
        key: 'todo',
        title: '待办',
        icon: <UnorderedListOutline/>,
        component: <TodoPage/>
    },
    {
        key: 'message',
        title: '消息',
        icon: <MessageOutline/>,
        component: <MessagePage/>
    },
    {
        key: 'personalCenter',
        title: '我的',
        icon: <UserOutline/>,
        component: <MyPage/>
    },
];

const Layout = () => {
    const [activeKey, setActiveKey] = useState('home');
    // Find the active tab's component
    const activeComponent = tabs.find(item => item.key === activeKey)?.component;
    const activeTitle = tabs.find(item => item.key === activeKey)?.title;
    return (
        <div className="layout">
            <div className="header">
                <NavBar>{activeTitle}</NavBar>
            </div>
            <div className="content">
                {activeComponent}
            </div>
            <TabBar className="tabbar" activeKey={activeKey} onChange={setActiveKey}>
                {tabs.map(item => (
                    <TabBar.Item
                        key={item.key}
                        icon={item.icon}
                        title={item.title}
                    />
                ))}
            </TabBar>
        </div>
    );
};

export default Layout;
