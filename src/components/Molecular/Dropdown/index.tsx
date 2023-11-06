import { DownOutlined } from '@ant-design/icons';
import { Button, Dropdown, MenuProps, Space } from 'antd';
import React from 'react';

const MolecularDropdown: React.FC = () => {
    const items: MenuProps['items'] = [
        {
            label: <a href="https://www.antgroup.com">1st menu item</a>,
            key: '0',
        },
        {
            label: <a href="https://www.aliyun.com">2nd menu item</a>,
            key: '1',
        },
        {
            type: 'divider',
        },
        {
            label: '3rd menu item',
            key: '3',
        },
    ];

    return (
        <Dropdown menu={{ items }} trigger={['click']} arrow>
            <Button size="middle" style={{ marginRight: '2vh' }}>
                <Space>
                    Click me
                    <DownOutlined {...({} as any)} />
                </Space>
            </Button>
        </Dropdown>
    );
};

export default MolecularDropdown;
