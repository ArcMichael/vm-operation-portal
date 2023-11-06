import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { Breadcrumb } from 'antd';

type BreadcrumbProps = {
    title: string;
    href: string;
};

const MolecularBreadcrumb: React.FC = () => {
    const router = useRouter();
    const [breadcrumbs, setBreadcrumbs] = useState<BreadcrumbProps[] | null>(
        null
    );

    useEffect(() => {
        if (router) {
            const linkPath = router.asPath.split('/');
            linkPath.shift();

            const pathArray = linkPath.map((path, i) => ({
                title: path,
                href: '/' + linkPath.slice(0, i + 1).join('/'),
            }));
            setBreadcrumbs(pathArray);
        }
    }, [router]);

    if (!breadcrumbs) return null;

    return (
        <div style={{ marginBottom: '24px' }}>
            <Breadcrumb
                items={breadcrumbs.map((breadcrumb) => ({
                    title: (
                        <Link href={breadcrumb.href.split('?')[0]}>
                            {breadcrumb.title.split('?')[0].toUpperCase()}
                        </Link>
                    ),
                }))}
            />
        </div>
    );
};

export default MolecularBreadcrumb;
