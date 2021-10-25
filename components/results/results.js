import { useRouter } from "next/router";
import { useContext, useEffect } from "react";
import ReactPlayer from "react-player";
import { ResultsContext } from "../../context/results";
import Loading from "../loading/loading";

export default function Results() {

    const { loading, results: { results, image_results, entries: news }, query, setQuery, getSearchResults } = useContext(ResultsContext);

    const { pathname } = useRouter();

    useEffect(() => {
        if(query) {
            if(pathname === '/videos') {
                getSearchResults(`search/q=${query} videos`);
            } else {
                const path = pathname.substring(1);
                getSearchResults(`${path}/q=${query}&num=50`);
            }
        }
    }, [pathname, query]);

    if(loading) return <Loading />

    // console.log(pathname); // "/search"  for example

    switch (pathname) {

        case '/search':
            return (
                <div className="flex flex-wrap justify-between space-y-6 sm:px-56">
                    {
                        results?.length > 0 && results?.map(({ link, title }, i) => (
                            <div key={i} className="md:w-2/5 w-full">
                                <a href={link} target="_blank" rel="noreferrer">
                                    <p className="text-sm">{ link.length > 30 ? link.substring(0, 30) : link }</p>
                                    <p className="text-lg hover:underline dark:text-blue-300 text-blue-700">{ title }</p>
                                </a>
                            </div>
                        )

                        )
                    }
                </div>
            );

        case '/news':
            return (
                <div className="flex flex-wrap justify-between space-y-6 sm:px-56 items-center">
                    {
                        news?.map(({ links, id, source, title }) => (
                                <div key={id} className="md:w-2/5 w-full">
                                    <a href={links?.[0].href} target="_blank" rel="noreferrer" className="hover:underline">
                                        <p className="text-lg dark:text-blue-300 text-blue-700">{ title }</p>
                                        <div className="flex gap-4">
                                            <a href={source.href} target="_blank" rel="noreferrer">
                                                { source?.href }
                                            </a>
                                        </div>
                                    </a>
                                </div>
                            )
                        )
                    }
                </div>
            );

        case '/videos':
            return (
                <div className="flex flex-wrap">
                    {
                        results?.map((video, i) => (
                            <div key={i} className="p-2">
                                <ReactPlayer url={ video?.additional_links?.[0].href } controls width="355px" height="200px" />
                            </div>
                        ))
                    }
                </div>
            );

        case '/images':
            return (
                <div className="flex flex-wrap justify-between items-center">
                    {
                        image_results?.length > 0 && image_results?.map(({ link: { href, title }, image }, i) => (      // destructured "link"
                            <a key={i} href={href} target="_blank" rel="noreferrer" className="sm:p-3 p-5">
                                <img src={image?.src} alt={title} loading="lazy" />
                                <p className="w-36 break-words text-sm mt-2">{ title }</p>
                            </a>
                            )
                        )
                    }
                </div>
            );

        default:
            return 'ERROR';

    }
}
