import {
  Dispatch,
  SetStateAction,
  createContext,
  useEffect,
  useState,
} from "react";

interface AppSessionContextType {
  onActionSmc: boolean;
  setonActionSmc: Dispatch<SetStateAction<boolean>>;
}

const AppSessionContext = createContext<AppSessionContextType>(
  {} as AppSessionContextType
);

const useStateActionSmc = () => {
  const [onActionSmc, setonActionSmc] = useState(true);

  useEffect(() => {
    const onActionSmc = localStorage.getItem("onActionSmc");
    console.log(onActionSmc);
    if (onActionSmc) {
      setonActionSmc(JSON.parse(onActionSmc));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("onActionSmc", JSON.stringify(onActionSmc));
  }, [onActionSmc]);

  return [onActionSmc, setonActionSmc];
};

export default AppSessionContext;

export type { AppSessionContextType };

export { useStateActionSmc };
