import { PureComponent } from 'react';
import { Layout, Row } from 'antd';
import ContentCommon from '@/components/Content/content-common';
import React from 'react';
import SiderSmc from '@/components/Sider/sider-smc';
import HeaderSmc from '@/components/Header/header-smc';

const LayoutSmc = (Comps: any) => {
    return class extends PureComponent {
        public static displayName = `LayoutSmc(${
            Comps.displayName || Comps.name || 'Component'
        })`;

        public render() {
            return (
                <Layout style={{ minHeight: '100vh' }}>
                    <HeaderSmc />
                    <Layout>
                        <SiderSmc />
                        <ContentCommon>
                            <Row style={{ minHeight: '18vh' }} wrap>
                                <Comps />
                            </Row>
                        </ContentCommon>
                    </Layout>
                </Layout>
            );
        }
    };
};

export default LayoutSmc;
