import { useLocation } from "react-router-dom";
import { getNameByPath } from "../../../shared/layout-utils";

function Banner({}) {
  // get current path
  const { pathname } = useLocation();
  return (
    <div className="flex w-full relative">
      <div className="img-container flex justify-center items-end">
        {pathname !== "/error" ? (
          <div className="bg-white flex items-center md:rounded-md shadow-md mb-3 border border-gray-100 h-20  w-1320 mx-auto">
            <div className="px-5">
              <h1 className="text-2xl font-bold leading-tight text-blue-500 ">
                {getNameByPath(pathname)}
              </h1>
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
}

export default Banner;
