import React from 'react';
import { Button, Result } from 'antd';
import LayoutJustify from '@/components/Layout/layout-justify';

const Component: React.FC = () => (
    <Result
        status="500"
        title="500"
        subTitle="Sorry, something went wrong."
        extra={<Button type="primary">Back Home</Button>}
    />
);

export default LayoutJustify(Component);
