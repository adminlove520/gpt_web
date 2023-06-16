import HistorySession from '@/components/HistorySession/HistorySession';
import type { MenuProps } from 'antd';
import { Layout, Menu, Typography, theme } from 'antd';
import React, { useState } from 'react';
import Chat from './Chat';
import CreateScene from './CreateScence';
import LeftNav from '@/layouts/left';
import SceneList from './SceneList';
import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons';
import { ProCard } from '@ant-design/pro-components';

const { Header, Content, Sider } = Layout;

const { Title } = Typography;


const SmartChatPage: React.FC = () => {

  

  const [cardData, setCardData] = useState([]);
  const [viewContent, setViewContent] = useState('scene_list');


  const items: MenuProps['items'] = [
    { key: 'scence-list', icon: <UserOutlined />, label: '场景广场' },
    { key: 'scence-create', icon: <LaptopOutlined />, label: '创建场景' },
  ];


  return (
    <Layout style={{ display: 'flex' }}>
      <Layout style={{ padding: 0 }}>
        <LeftNav 
        items={items} 
        centerContent={<HistorySession></HistorySession>}
        defaultSelectedKeys={'scence-list'}
        defaultOpenKeys={'scence-list'}
        setViewContent={setViewContent}
        ></LeftNav>

        <Content>
          {viewContent === 'scence-list' && (
            <SceneList setViewContent={setViewContent}></SceneList>
          )}
          {viewContent === 'scence-create' && (
            <CreateScene setViewContent={setViewContent}></CreateScene>
          )}
          {viewContent === 'chat' && <Chat></Chat>}
        </Content>
      </Layout>

    </Layout>


  );
};

export default SmartChatPage;
