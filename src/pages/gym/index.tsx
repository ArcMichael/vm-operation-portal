import React, { useContext, useEffect } from "react";
import { LayoutCommonComponent } from "@/components/Layout";
import { useRouter } from "next/router";
import { SessionContextService } from "@/store/SessionContext";

const Component: React.FC = () => {
  const { onActionService, setonActionService } = useContext(
    SessionContextService
  );

  const router = useRouter();

  useEffect(() => {
    setonActionService({
      ...onActionService,
      onDefaultOpenKeys: ["1"],
      onDefaultSelectedKeys: ["1"],
    });
    router.replace("/gym/book");
  }, []);

  return <></>;
};

export default LayoutCommonComponent(Component);
