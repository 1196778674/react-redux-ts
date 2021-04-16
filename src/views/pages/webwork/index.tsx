import React, { FC } from 'react';
import { Typography, Divider } from 'antd';
import styled from 'styled-components';

const { Title, Paragraph, Text } = Typography;

export const TextLink = styled(Text)`
  cursor: pointer;
  color: #1890ff;
`;



const WebWork: FC = () => {
    const goDeital = () => {
        window.open('https://www.jianshu.com/p/6c2ffbfe6003', '_blank')
    }
    return (
        <>
            <Title level={3}>web Worker子线程解析Blob数据</Title>
            <Paragraph>
                <Paragraph>
                    <Text strong>首先我们要了解什么是Blob数据</Text>
                </Paragraph>
                <Text>Blob(Binary long Object)是二进制长对象的意思，Blob通常用于存储大文件，典型的Blob内容是一张图片或者一个声音文件，由于他们的特殊性，必须使用特殊的方式来存储。使用Blob列可以把照片声音等文件的二进制数据保存在数据库里，并可以从数据库里恢复指定文件。</Text>
            </Paragraph>
            <Divider/>
            <Paragraph>
                具体处理方法: <TextLink onClick={goDeital}>web Worker子线程解析Blob数据</TextLink>
            </Paragraph>
            
        </>
    )
}

export default WebWork;