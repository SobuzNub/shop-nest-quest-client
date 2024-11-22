

const SortByPrice = ({setSort}) => {
    return (
        <select className="p-[11px] max-w-md border border-black w-40 rounded-md" onChange={(e)=>setSort(e.target.value)}>
            <option value='asc'>Low To High</option>
            <option value='desc'>High To Low</option>
        </select>
    );
};

export default SortByPrice;