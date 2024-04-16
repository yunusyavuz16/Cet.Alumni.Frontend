function SubmitButton({
  isLoading,
  label,
}: {
  isLoading?: boolean;
  label: string;
}) {
  return (
    <div>
      <button
        type="submit"
        disabled={isLoading}
        className={
          "group relative w-full flex py-2 px-4 border border-transparent h-12 items-center text-center justify-center " +
          "  rounded-md text-white bg-blue-500 hover:bg-blue-700" +
          " focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 " +
          (isLoading ? "disabled bg-indigo-300 hover:bg-indigo-300" : "")
        }
      >
        <span className="text-md font-bold text-white">
          {isLoading ? "Yükleniyor..." : label}
        </span>
      </button>
    </div>
  );
}

export default SubmitButton;
