import { faSearchMinus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const NoJobFound = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full min-h-56">
      <FontAwesomeIcon
        icon={faSearchMinus}
        // make icon animtaed from top to bottom

        className="text-8xl text-blue-500 mx-auto animate-bounce"
      />
      <div className="text-center text-blue-500  text-xl font-bold mt-6">
        Henüz ilan paylaşılmamış.
      </div>
    </div>
  );
};
