import React from 'react';
import { Button, Result } from 'antd';
import LayoutJustify from '@/components/Layout/layout-justify';

const Component: React.FC = () => (
    <Result
        status="404"
        title="404"
        subTitle="Sorry, the page you visited does not exist."
        extra={<Button type="primary">Back Home</Button>}
    />
);

export default LayoutJustify(Component);
