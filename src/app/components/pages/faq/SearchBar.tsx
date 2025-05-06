import React from "react";
import CustomImage from "../../common/CustomImage";

interface SearchBarProps {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onSearch: (
    event:
      | React.MouseEvent<HTMLButtonElement>
      | React.KeyboardEvent<HTMLInputElement>
  ) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ value, onChange, onSearch }) => {
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>): void => {
    if (e.key === "Enter") {
      onSearch(e);
    }
  };

  return (
    <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-0 bg-white rounded-2xl sm:rounded-full shadow-md p-2 w-full relative z-10">
      <div className="flex items-center flex-grow w-full pl-2 sm:pl-4">
        <CustomImage
          alt="search icon"
          src={"./search.svg"}
          className="text-gray-400 w-4 h-4 sm:w-5 sm:h-5 mr-2 sm:mr-3"
        />
        <input
          type="text"
          placeholder="Search Questions"
          className="flex-1 text-black border-none outline-none text-sm sm:text-base bg-transparent placeholder-slate-600 w-full"
          value={value}
          onChange={onChange}
          onKeyDown={handleKeyDown}
          aria-label="Search questions"
          role="searchbox"
        />
      </div>
      <button
        className="bg-primary-900 text-white rounded-xl sm:rounded-full px-4 sm:px-5 py-2 text-sm sm:text-base font-medium hover:bg-primary-800 transition-colors whitespace-nowrap w-full sm:w-auto"
        onClick={onSearch}
        aria-label="Search"
        type="button"
      >
        Search
      </button>
    </div>
  );
};

export default SearchBar;
