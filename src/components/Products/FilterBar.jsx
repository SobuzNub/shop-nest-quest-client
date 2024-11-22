import { LuFilter } from "react-icons/lu";
import { GrPowerReset } from "react-icons/gr";

const FilterBar = ({setBrand, setCategory, handleReset}) => {
    return (
        <div className="bg-gray-200 h-full min-h-screen p-4 rounded-t-md">
            <div className="flex items-center gap-1">
                <LuFilter size={24} />
                <h2 className="text-xl font-semibold">Filters</h2>
            </div>
            <div className="mt-8 flex flex-col gap-2 items-center">
                <div className="w-full">
                    <select className="p-[11px] border border-black w-full rounded-md" onChange={(e)=> setBrand(e.target.value)}>
                        <option disabled selected>
                            Brand
                        </option>
                        <option>Homer</option>
                        <option>Marge</option>
                        <option>Bart</option>
                        <option>Lisa</option>
                        <option>Maggie</option>
                    </select>
                </div>

                <div className="w-full">
                    <select className="p-[11px] border w-full border-black rounded-md" onChange={(e)=> setCategory(e.target.value)}>
                        <option disabled selected>
                            category
                        </option>
                        <option>Homer</option>
                        <option>Marge</option>
                        <option>Bart</option>
                        <option>Lisa</option>
                        <option>Maggie</option>
                    </select>
                </div>

            </div>
            <button onClick={handleReset} className="btn w-full mt-4 bg-green-500 text-white flex items-center"><p>Reset</p> <GrPowerReset /></button>
        </div>
    );
};

export default FilterBar;