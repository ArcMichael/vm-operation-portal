import {
  Dispatch,
  SetStateAction,
  createContext,
  useEffect,
  useState,
} from "react";

interface AppSessionContextType {
  onCollapse: boolean;
  setOnCollapse: Dispatch<SetStateAction<boolean>>;
}

const AppSessionContext = createContext<AppSessionContextType>(
  {} as AppSessionContextType
);

const useOnCollapse = () => {
  const [onCollapse, setOnCollapse] = useState(true);

  useEffect(() => {
    const onCollapse = localStorage.getItem("onCollapse");
    console.log(onCollapse);
    if (onCollapse) {
      setOnCollapse(JSON.parse(onCollapse));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("onCollapse", JSON.stringify(onCollapse));
  }, [onCollapse]);

  return [onCollapse, setOnCollapse];
};

export default AppSessionContext;

export type { AppSessionContextType };

export { useOnCollapse };
