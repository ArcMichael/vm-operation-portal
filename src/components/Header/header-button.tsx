import React, { useContext } from 'react';
import { Button, Layout, theme } from 'antd';
import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons';
import { SessionContextService } from '@/store/SessionContext';

const HeaderButton: React.FC = () => {
    // const [collapsed, setCollapsed] = useState(false);
    const { onActionService, setonActionService } = useContext(
        SessionContextService
    );
    const {
        token: { colorBgContainer },
    } = theme.useToken();
    return (
        <Layout.Header style={{ padding: 0, background: colorBgContainer }}>
            <Button
                type="text"
                icon={
                    onActionService.onCollapse ? (
                        <MenuUnfoldOutlined {...({} as any)} />
                    ) : (
                        <MenuFoldOutlined {...({} as any)} />
                    )
                }
                onClick={() =>
                    setonActionService({
                        ...onActionService,
                        onCollapse: !onActionService.onCollapse,
                    })
                }
                style={{
                    fontSize: '16px',
                    width: 64,
                    height: 64,
                }}
            />
        </Layout.Header>
    );
};

export default HeaderButton;
