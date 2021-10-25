import Link from "next/link";

export default function Footer() {

    return (
        <footer className="text-center p-10 mt-10 border-t border-gray-200 dark:border-gray-700">
            <p>Copyright &copy; Google Search App 2021</p>
            <p>
                <Link href="/about">Google Search App</Link>
            </p>
        </footer>
    );
}
