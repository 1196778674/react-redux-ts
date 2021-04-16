import React, {FC} from 'react';
import { Layout, Menu, Typography } from 'antd'
import styled from 'styled-components';
// import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons';
import Logo from "../assets/images/logo.jpeg";
import { Link } from 'react-router-dom'

const { Header, Content, Sider } = Layout;
// const { SubMenu } = Menu;
const { Title } = Typography

export const ContentStyle = styled(Content)`
    padding: 0 50px;
    height: 100%;
`;
const LayoutStyle = styled(Layout)`
    background: #fafafa;
    height: 100%;
`;
const SiderStyle = styled(Sider)`
    background: #fafafa;
`;
const ContentBody = styled(Content)`
    padding: 20px;
    min-height: calc(100% - 200px);
`;
const HeaderStyle = styled(Header)`
    border-bottom: 1px solid #fafafa;
    vertical-align: inherit;
`;
const LogoStyle = styled.img`
    width: 45px;
    height: 45px;
`;
const TitleStyle = styled(Title)`
    display: initial;
    margin-left: 20px;
`;



const Index: FC  = ({children}) => {
    return (
        <Layout id="layout">
            {/* 头部导航 */}
            <HeaderStyle>
                <LogoStyle src={Logo} alt={'logo'}/>
                <TitleStyle level={3}>欢迎来到小灰灰的博客！</TitleStyle>
            </HeaderStyle>
            {/* 主体 */}
            <ContentStyle>
                <LayoutStyle>
                    <SiderStyle width={200}>
                    <Menu
                        mode="inline"
                        // defaultSelectedKeys={[]}
                        defaultOpenKeys={['sub1']}
                        style={{ height: '100%' }}
                    >
                        {/* <SubMenu key="sub1" icon={<UserOutlined />} title="subnav 1">
                        <Menu.Item key="1">option1</Menu.Item>
                        <Menu.Item key="2">option2</Menu.Item>
                        <Menu.Item key="3">option3</Menu.Item>
                        <Menu.Item key="4">option4</Menu.Item>
                        </SubMenu>
                        <SubMenu key="sub2" icon={<LaptopOutlined />} title="subnav 2">
                        <Menu.Item key="5">option5</Menu.Item>
                        <Menu.Item key="6">option6</Menu.Item>
                        <Menu.Item key="7">option7</Menu.Item>
                        <Menu.Item key="8">option8</Menu.Item>
                        </SubMenu>
                        <SubMenu key="sub3" icon={<NotificationOutlined />} title="subnav 3">
                        <Menu.Item key="9">option9</Menu.Item>
                        <Menu.Item key="10">option10</Menu.Item>
                        <Menu.Item key="11">option11</Menu.Item>
                        <Menu.Item key="12">option12</Menu.Item>
                        </SubMenu> */}
                        <Menu.Item key="1">
                            <Link to='/redux'>react配置redux</Link>
                        </Menu.Item>
                    </Menu>   
                    </SiderStyle>
                    <ContentBody>{children}</ContentBody>
                </LayoutStyle>
            </ContentStyle>
        </Layout>
    )
}

export default Index