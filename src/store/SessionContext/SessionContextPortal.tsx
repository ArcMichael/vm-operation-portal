import {
  Dispatch,
  SetStateAction,
  createContext,
  useEffect,
  useState,
} from "react";

interface OnActionPortalType<T> {
  onCollapse: boolean;
  onDefaultSelectedKeys: T;
  onDefaultOpenKeys: T;
}

interface SessionContextPortalType<T> {
  onActionPortal: T;
  setonActionPortal: Dispatch<SetStateAction<T>>;
}

const SessionContext = createContext<
  SessionContextPortalType<OnActionPortalType<string[]>>
>({} as SessionContextPortalType<OnActionPortalType<string[]>>);

const initialOnActionPortal: OnActionPortalType<string[]> = {
  onCollapse: false,
  onDefaultSelectedKeys: ["1"],
  onDefaultOpenKeys: ["1"],
};

const useStateActionPortal = () => {
  const [onActionPortal, setonActionPortal] = useState(initialOnActionPortal);

  useEffect(() => {
    const onActionPortal = localStorage.getItem("onActionPortal");
    console.log(onActionPortal);
    if (onActionPortal) {
      setonActionPortal(JSON.parse(onActionPortal));
    }
  }, []);

  useEffect(() => {
    console.log(onActionPortal);
    localStorage.setItem("onActionPortal", JSON.stringify(onActionPortal));
  }, [onActionPortal]);

  return [onActionPortal, setonActionPortal];
};

export default SessionContext;

export type { SessionContextPortalType, OnActionPortalType };

export { useStateActionPortal };
