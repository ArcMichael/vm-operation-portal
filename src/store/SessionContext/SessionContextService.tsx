import {
  Dispatch,
  SetStateAction,
  createContext,
  useEffect,
  useState,
} from "react";

interface OnActionServiceType<T> {
  onCollapse: boolean;
  onDefaultSelectedKeys: T;
  onDefaultOpenKeys: T;
}

interface SessionContextServiceType<T> {
  onActionService: T;
  setonActionService: Dispatch<SetStateAction<T>>;
}

const SessionContextService = createContext<
  SessionContextServiceType<OnActionServiceType<string[]>>
>({} as SessionContextServiceType<OnActionServiceType<string[]>>);

const initialOnActionService: OnActionServiceType<string[]> = {
  onCollapse: false,
  onDefaultSelectedKeys: ["1"],
  onDefaultOpenKeys: ["1"],
};

const useStateActionService = () => {
  const [onActionService, setonActionService] = useState(
    initialOnActionService
  );

  useEffect(() => {
    const onActionService = sessionStorage.getItem("onActionService");
    if (onActionService) {
      setonActionService(JSON.parse(onActionService));
    }
  }, []);

  useEffect(() => {
    console.log("onActionService", onActionService);
    sessionStorage.setItem("onActionService", JSON.stringify(onActionService));
  }, [onActionService]);

  return [onActionService, setonActionService];
};

export default SessionContextService;

export type { SessionContextServiceType, OnActionServiceType };

export { useStateActionService };
