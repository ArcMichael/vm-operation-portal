import { RouteConfig } from '@/configs/menus/types';
import { SessionContextService } from '@/store/SessionContext';
import { Card } from 'antd';
import Link from 'next/link';
import React, { useContext } from 'react';

const cardStyle: React.CSSProperties = {
    width: 240,
    margin: 20,
};

interface CardProps {
    title: string;
    href: string;
    description: string;
    pages: RouteConfig[];
}

const MolecularCardSmc: React.FC<CardProps> = ({
    title,
    href,
    description,
    pages,
}) => {
    return (
        <Card bordered hoverable style={cardStyle}>
            <Link href={href}>
                <Card.Meta
                    title={title}
                    description={description}
                    style={{ marginBottom: 20 }}
                />
            </Link>
            <CardLinkList pages={pages} />
        </Card>
    );
};

interface CardLinkListProps {
    pages: RouteConfig[];
}

const CardLinkList: React.FC<CardLinkListProps> = ({ pages }) => {
    const { onActionService, setonActionService } = useContext(
        SessionContextService
    );

    return (
        <>
            {pages.map((item, index) => (
                <Link
                    onClick={() => {
                        item.defaultOpenKeys || item.defaultSelectedKeys
                            ? setonActionService({
                                  ...onActionService,
                                  onDefaultOpenKeys: item.defaultOpenKeys || [],
                                  onDefaultSelectedKeys:
                                      item.defaultSelectedKeys || [],
                              })
                            : null;
                    }}
                    href={item.path || ''}
                    key={index}
                >
                    <p>{item.context}</p>
                </Link>
            ))}
        </>
    );
};

export default MolecularCardSmc;
