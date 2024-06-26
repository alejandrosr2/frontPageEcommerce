import { Search } from "lucide-react"

const onSearch = "w-0 group-hover:w-[300px] transition-all duration-300 rounded-full group-hover:border group-hover:border-zinc-500 px-3 py-1 focus:outline-none dark:border-zinc-800 dark:bg-zinc-900 group-hover:dark:bg-gray-800"

const SearchBar = () => {
    return (
        <div className="relative group hidden sm:block">   
            <input type="text" placeholder="Buscar" className={onSearch} />
            <Search className="size-5 text-zinc-600 group-hover:text-blue-500  absolute top-1/2 -translate-y-1/2 right-3 duration-200"/>
        </div>
    )
}

export default SearchBar
