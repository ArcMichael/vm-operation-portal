import React from 'react';
import { Layout } from 'antd';

interface IProps {
    children?: React.ReactNode;
}

const Footer: React.FC<IProps> = ({ children }) => (
    <Layout.Footer style={{ textAlign: 'center' }}>
        {children || 'Ant Design ©2018 Created by Ant UED'}
    </Layout.Footer>
);

export default Footer;
