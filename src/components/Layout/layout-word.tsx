import { PureComponent } from 'react';
import { Layout } from 'antd';
import React from 'react';
import SiderWord from '@/components/Sider/sider-word';
import ContentBrandcrumb from '@/components/Content/content-brandcrumb';
import Footer from '@/components/Footer/footer';
import HeaderGym from '@/components/Header/header-common';

const LayoutWord = (Comps: any) => {
    return class extends PureComponent {
        public static displayName = `LayoutWord(${
            Comps.displayName || Comps.name || 'Component'
        })`;

        public render() {
            return (
                <Layout>
                    <SiderWord />
                    <Layout>
                        <HeaderGym />
                        <ContentBrandcrumb Brandcrumb>
                            <Comps />
                        </ContentBrandcrumb>
                        <Footer />
                    </Layout>
                </Layout>
            );
        }
    };
};

export default LayoutWord;
