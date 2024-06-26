import { Moon, Sun } from "lucide-react"
import { useEffect, useState } from "react"


const DarkMode = () => {

    const [theme, setTheme] = useState("light")

    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
    };

    useEffect(() => {
        document.documentElement.classList.remove("light", "dark");
        document.documentElement.classList.add(theme);
    }, [theme]);

    return (
        <div>
            <button onClick={toggleTheme} className="size-5 text-zinc-600 px-2 dark:text-zinc-400 transition-all hover:scale-105 duration-300">
                {theme === "light" ? <Moon /> : <Sun />}
            </button>
        </div>
    )
}

export default DarkMode
