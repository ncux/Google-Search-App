import Link from "next/link";
import { useContext } from "react";
import classes from "./navbar.module.css";
import { ThemeContext } from "../../context/theme";

export default function Navbar() {

    const { isDark, switchTheme } = useContext(ThemeContext);

    return (
        <nav className="p-5 pb-0 flex flex-wrap sm:justify-between justify-center items-center border-b border-gray-200 dark:border-gray-700">
            <div className="flex justify-between items-center space-x-5 w-screen">
                <Link href="/">
                    <a href="#" className="text-2xl bg-blue-500 font-bold text-white cursor-pointer rounded dark:bg-gray-500 dark:text-gray-900 py-1 px-2">Google Search App</a>
                </Link>
                <button type="button" onClick={ switchTheme } className="text-xl dark_bg-gray-50 dark:text-gray-900 bg-white border rounded-full hover:shadow-lg mb-2 px-2 py-1">
                    { isDark ? 'Light' : 'Dark' }
                </button>
            </div>

        </nav>
    );
}
