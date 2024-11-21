

const SortByPrice = () => {
    return (
        <select className="p-[11px] max-w-md border border-black w-40 rounded-md">
            <option value='asc'>Low To High</option>
            <option value='desc'>High To Low</option>
        </select>
    );
};

export default SortByPrice;