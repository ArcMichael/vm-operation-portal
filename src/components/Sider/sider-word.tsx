import React, { useContext } from 'react';
import { Layout, Menu } from 'antd';
import { SessionContextService } from '@/store/SessionContext';
import { wordConvertRouteToMenu } from '@/configs/menus/word';
import { wordRouteConfigs } from '@/configs/menus/word';

const SiderGym: React.FC = () => {
    const { onActionService, setonActionService } = useContext(
        SessionContextService
    );

    const menuItems = wordRouteConfigs.map((route, index) =>
        wordConvertRouteToMenu(
            route,
            `${index + 1}`,
            onActionService,
            setonActionService
        )
    );

    return (
        <Layout.Sider
            collapsed={onActionService?.onCollapse || false}
            onCollapse={(value) =>
                setonActionService({ ...onActionService, onCollapse: value })
            }
        >
            <div className="logo" />
            <Menu
                theme="dark"
                mode="inline"
                selectedKeys={onActionService?.onDefaultOpenKeys || ['1']}
                openKeys={onActionService?.onDefaultOpenKeys || ['1']}
                onOpenChange={(openKeys: React.Key[]) =>
                    setonActionService({
                        ...onActionService,
                        onDefaultOpenKeys: openKeys as string[],
                    })
                }
                onClick={(info) =>
                    setonActionService({
                        ...onActionService,
                        onDefaultOpenKeys: info.keyPath as string[],
                    })
                }
                items={menuItems}
            ></Menu>
        </Layout.Sider>
    );
};

export default SiderGym;
