import { useLayoutEffect } from "react";
import { useLocation } from "react-router-dom";
import { getNameByPath } from "../../shared/layout-utils";

const useTitle = () => {
  const pathName = useLocation().pathname;

  useLayoutEffect(() => {
    document.title = "CET - " + getNameByPath(pathName);
  }, [pathName]);
};

export default useTitle;
