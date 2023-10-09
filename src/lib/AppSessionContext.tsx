import {
  Dispatch,
  SetStateAction,
  createContext,
  useEffect,
  useState,
} from "react";

// defaultSelectedKeys={["1"]}
//         defaultOpenKeys={["1"]}

interface OnActionSmcType<T> {
  onCollapse: boolean;
  onDefaultSelectedKeys: T;
  onDefaultOpenKeys: T;
}

interface AppSessionContextType<T> {
  onActionSmc: T;
  setonActionSmc: Dispatch<SetStateAction<T>>;
}

const AppSessionContext = createContext<
  AppSessionContextType<OnActionSmcType<string[]>>
>({} as AppSessionContextType<OnActionSmcType<string[]>>);

const initialOnActionSmc: OnActionSmcType<string[]> = {
  onCollapse: false,
  onDefaultSelectedKeys: ["1"],
  onDefaultOpenKeys: ["1"],
};

const useStateActionSmc = () => {
  const [onActionSmc, setonActionSmc] = useState(initialOnActionSmc);

  useEffect(() => {
    const onActionSmc = localStorage.getItem("onActionSmc");
    console.log(onActionSmc);
    if (onActionSmc) {
      setonActionSmc(JSON.parse(onActionSmc));
    }
  }, []);

  useEffect(() => {
    console.log(onActionSmc);
    localStorage.setItem("onActionSmc", JSON.stringify(onActionSmc));
  }, [onActionSmc]);

  return [onActionSmc, setonActionSmc];
};

export default AppSessionContext;

export type { AppSessionContextType, OnActionSmcType };

export { useStateActionSmc };
