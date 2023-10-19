import React, { useContext, useEffect } from "react";
import { useRouter } from "next/router";
import { SessionContextService } from "@/store/SessionContext";
import LayoutWord from "@/components/Layout/layout-word";

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
    router.replace("/word/report");
  }, []);

  return <></>;
};

export default LayoutWord(Component);
