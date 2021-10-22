import Link from "next/link";
import { useRouter } from "next/router";
import { useContext, useEffect } from "react";
import ReactPlayer from "react-player";
import { ResultsContext } from "../../context/results";
import Loading from "../loading/loading";

export default function Results() {

    const { loading, results, query, setQuery, getSearchResults } = useContext(ResultsContext);

    const { pathname } = useRouter();

    useEffect(() => getSearchResults('search/q=elon+musk&num=100'), []);

    if(loading) return <Loading />

    // console.log(pathname); // "/search"  for example

    switch (pathname) {

        case '/search':
            return (
                <div className="flex flex-wrap justify-between space-y-6 sm:px-56">
                    {
                        results?.length > 0 && results.map(({ link, title }, i) => (
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
            return 'NEWS';

        case '/videos':
            return 'VIDEOS';

        case '/images':
            return 'IMAGES';

        default:
            return 'ERROR';

    }
}
