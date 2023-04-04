import useIcon from "../hooks"

const SearchBar = ({ name, searchPharmacies, inputRef, searchMedicine, medicineRef }) => {
    const SearchIcon = useIcon("Search")

    return (
        <div className="mx-5">
            <div className="bg-[#eff6f6] h-36 w-full rounded-lg flex justify-center items-center">
                <div className="bg-white p-1 rounded w-[90%] sm:w-[70%] flex">
                    <SearchIcon className="text-gray-400 my-auto ml-1 sm:ml-4"/>
                    <input type="text" ref={name === "Pharmacies" ? inputRef : medicineRef} placeholder={`Search ${name}`} className="py-3 sm:py-4 px-2 rounded flex-[4] focus:outline-none text-xs sm:text-base"/>
                    <button onClick={() => name === "Pharmacies" ? searchPharmacies(inputRef.current.value) : searchMedicine(medicineRef.current.value)} className="text-xs sm:text-base py-3 sm:py-4 px-2 bg-[#139c95] text-white rounded flex-1 hover:bg-[#00a59f]">Search</button>
                </div>
            </div>
        </div>
    )
}

export default SearchBar