import React, { useContext, useEffect } from 'react';
import { useRouter } from 'next/router';
import { SessionContextService } from '@/store/SessionContext';
import LayoutCommon from '@/components/Layout/layout-gym';

const Component: React.FC = () => {
    const { onActionService, setonActionService } = useContext(
        SessionContextService
    );

    const router = useRouter();

    useEffect(() => {
        setonActionService({
            ...onActionService,
            onDefaultOpenKeys: ['1'],
            onDefaultSelectedKeys: ['1'],
        });
        router.replace('/gym/book');
    }, []);

    return <></>;
};

export default LayoutCommon(Component);
