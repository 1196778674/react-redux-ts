import React from 'react';
import styled from 'styled-components';
import { Typography, Divider } from 'antd';

const { Title, Paragraph, Text } = Typography;

export const Container = styled.div`
  width: 100%;
  margin: 20px 0px;
`;


const File: React.FC = () => {
    return (
        <Container>
            <Title level={3}>react-redux原理及使用</Title>
            <Paragraph>
                <Paragraph>
                    <Text strong>为什么要使用Redux?</Text>
                </Paragraph>
                <Text>当我们使用react或者vue等一些前端框架时候，随着我们项目的不断增大，导致我们对state的管理也会慢慢增多，可能会对我们造成<Text strong mark> state 在什么时候，由于什么原因，如何变化已然不受控制</Text>， 当系统变得错综复杂的时候，想重现问题或者添加新功能就会变得举步维艰。这时候就需要一个状态管理器来帮我们解决这个问题。</Text>
            </Paragraph>
            <Divider/>
            <Paragraph>
                <Paragraph>
                    <Text strong>使用Redux要遵循三大原则</Text>
                </Paragraph>
                <Paragraph>
                    <Text strong>单一数据源：</Text>
                    <Text>整个应用的 state 被储存在一棵 object tree 中，并且这个 object tree <Text mark>只存在于唯一一个 store 中</Text>。</Text>
                </Paragraph>
                <Paragraph>
                    <Text strong>State 是只读的：</Text>
                    <Text><Text mark>唯一改变 state 的方法就是触发 action</Text>，action 是一个用于描述已发生事件的普通对象。</Text>
                </Paragraph>
                <Paragraph>
                    <Text strong>使用纯函数(Reducer)来执行修改：</Text>
                    <Text>为了描述 action 如何改变 state tree ，你需要<Text mark>编写reducers</Text>。</Text>
                </Paragraph>
            </Paragraph>
            <Divider/>
        </Container>
    )
}

export default File