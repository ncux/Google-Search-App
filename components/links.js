import Link from "next/link";
import { useRouter } from "next/router";

export const Links = () => {

    const { pathname } = useRouter();

    const links = [
        { url: `/search`, text: `All` },
        { url: `/news`, text: `News` },
        { url: `/images`, text: `Images` },
        { url: `/videos`, text: `Videos` }
    ];

    return (
        <div className="flex sm:justify-around justify-between items-center mt-4">
            {
                links.map(({ text, url }, i) => (
                        <Link href={url}>
                            <a href="#" className={pathname === url ? 'text-blue-700 border-b-2 dark:text-blue-300 border-blue-700 mx-5 pb-2' : 'mx-5'}>{ text }</a>
                        </Link>
                ))
            }
        </div>
    );

};