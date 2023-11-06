import { generateHeaderConfig } from '@/configs/menus/smc';
import { SessionContextPortal } from '@/store/SessionContext';
import { DownOutlined } from '@ant-design/icons';
import { Button, Dropdown, Space } from 'antd';
import { useSession } from 'next-auth/react';
import React, { useContext } from 'react';

const MolecularDropdownHeader: React.FC = () => {
    const { data: session, status } = useSession();
    const { onActionPortal, setonActionPortal } =
        useContext(SessionContextPortal);

    const headerConfig = generateHeaderConfig(
        onActionPortal,
        setonActionPortal
    );

    return (
        <Dropdown menu={{ items: headerConfig }} trigger={['click']} arrow>
            <Button size="middle" style={{ marginRight: '2vh' }}>
                <Space>
                    {status === 'authenticated' ? session.user?.name : ''}
                    <DownOutlined {...({} as any)} />
                </Space>
            </Button>
        </Dropdown>
    );
};

export default MolecularDropdownHeader;
