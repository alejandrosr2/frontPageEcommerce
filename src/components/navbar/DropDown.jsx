import { ChevronDown } from "lucide-react"


const dropDown = [
    {
        id: 1,
        name: "Tendencias",
        href: "/#",
    },
    {
        id: 2,
        name: "Mejores ventas",
        href: "/#",
    },
    {
        id: 3,
        name: "Mejor valorado",
        href: "/#",
    },
]

const DropDown = () => {
    return (
        <li className="relative cursor-pointer group">
            <a href="" className="flex items-center gap-[2px] font-semibold text-zinc-500 dark:hover:text-white py-2 hover:scale-105 duration-300">
                Interes
                <span>
                    <ChevronDown className="group-hover:rotate-180 duration-300"/>
                </span>
            </a>
            <div className="absolute z-[9999] hidden group-hover:block w-[200px] rounded-md bg-white shadow-md dark:bg-zinc-900 p-2 text-black dark:text-white">
                <ul className="space-y-2">
                    {
                        dropDown.map((menu) => (
                            <li key={menu.id} className="rounded-md text-zinc-500 hover:text-black dark:hover:text-white duration-200 inline-block p-2 hover:bg-primary/20 w-full">
                                <a href={menu.href}>
                                    {menu.name}
                                </a>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </li>
    )
}

export default DropDown
