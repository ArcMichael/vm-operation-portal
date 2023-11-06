import React from 'react';
import { Layout, theme } from 'antd';
import MolecularBreadcrumb from '@/components/Molecular/Breadcrumb/molecular-breadcrumb';

interface ContentBrandcrumbProps
    extends React.PropsWithChildren<{
        Brandcrumb?: boolean;
    }> {
    // add any other props here if needed
}

const ContentBrandcrumb: React.FC<ContentBrandcrumbProps> = ({
    children,
    Brandcrumb,
}) => {
    const {
        token: { colorBgContainer },
    } = theme.useToken();

    return (
        <Layout.Content
            style={{
                margin: '24px 16px',
                padding: 24,
                minHeight: 280,
                background: colorBgContainer,
            }}
        >
            {Brandcrumb ? <MolecularBreadcrumb /> : <></>}

            {/* {pathSnippets} */}
            {children || 'Default Text'}
        </Layout.Content>
    );
};

export default ContentBrandcrumb;
