import { IoMdSearch } from "react-icons/io";

const SearchBar = () => {
    return (
        <form className="flex items-center gap-1">
            <input type="text" placeholder="Search Products" name="search" className="max-w-md p-[11px] border border-black rounded-l-md" />
            <button className="btn rounded-l-none rounded-r-md btn-outline">
                <IoMdSearch size={20}/>
            </button>
        </form>
    );
};

export default SearchBar;