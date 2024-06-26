import { ShoppingCart } from "lucide-react";
import SearchBar from "./SearchBar";
import DarkMode from "./DarkMode";
import DropDown from "./DropDown";
import { useContext, useState } from "react";
import { CartContext } from "@/context/CartContext";

const menu = [
    { href: "/", label: "Home" },
    { href: "/shop", label: "Shop" },
    { href: "/about", label: "About" },
    { href: "/blog", label: "Blogs" },
];

const Navbar = () => {
    const { cartItems, clearCart } = useContext(CartContext);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const handleClearCart = () => {
        clearCart();
        setIsDropdownOpen(false);
    };

    return (
        <div className="bg-white dark:bg-zinc-900 dark:text-white duration-200 relative z-40">
            <div className="py-4">
                <div className="container flex justify-between">
                    <div className="flex gap-4 items-center">
                        <a href="#" className="text-blue-500 font-bold tracking-widest text-2xl uppercase sm:text-3xl hover:scale-105 duration-300">
                            randomshop
                        </a>
                        <div className="hidden lg:block">
                            <ul className="flex items-center gap-4">
                                {menu.map((menu) => (
                                    <li key={menu.href}>
                                        <a href={menu.href} className="inline-block px-4 font-semibold text-zinc-500 hover:text-black dark:hover:text-white hover:scale-105 duration-300">
                                            {menu.label}
                                        </a>
                                    </li>
                                ))}
                                <DropDown />
                            </ul>
                        </div>
                    </div>
                    <div className="flex justify-between items-center gap-4">
                        <SearchBar />
                        <div className="relative">
                            <button
                                className="relative px-3"
                                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                            >
                                <ShoppingCart className="size-5 text-zinc-600 dark:text-zinc-400 hover:scale-105 duration-300" />
                                <div className="w-4 h-4 bg-red-500 text-white rounded-full absolute -top-2 right-0 flex items-center justify-center text-xs">
                                    {cartItems.length}
                                </div>
                            </button>
                            {isDropdownOpen && (
                                <div className="absolute z-[9999] w-[200px] rounded-md bg-white shadow-md dark:bg-zinc-900 p-2 text-black dark:text-white">
                                    <ul>
                                        <li className="rounded-md text-zinc-500 hover:text-black dark:hover:text-white duration-200 inline-block p-2 hover:bg-primary/20 w-full">
                                            <a href="/#">
                                                Ver cesta
                                            </a>
                                        </li>
                                        <li className="rounded-md text-zinc-500 hover:text-black dark:hover:text-white duration-200 inline-block p-2 hover:bg-primary/20 w-full">
                                            <button
                                                onClick={handleClearCart}
                                                
                                            >
                                                Eliminar cesta
                                            </button>
                                        </li>
                                    </ul>
                                </div>
                            )}
                        </div>
                        <div>
                            <DarkMode />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
