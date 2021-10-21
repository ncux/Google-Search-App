import { createContext, useEffect, useState } from "react";
import { RAPID_API_HEADERS, BASE_URL } from "../config";

export const ResultsContext = createContext();

export const ResultsState = ({ children }) => {

    const [loading, setLoading] = useState(false);
    const [query, setQuery] = useState('');
    const [results, setResults] = useState([]);

    const getSearchResults = async (type) => {  // type = search/images/videos/news
        try {
            setLoading(true);
            const options = {
                method: 'GET',
                headers: { ...RAPID_API_HEADERS },
            };
            const response = await fetch(`${BASE_URL}${type}`, options);
            const data = await response.json();
            if(response.ok) {
                setResults(data.results);
                setLoading(false);
            }

        } catch (e) {
            console.log(e);
            setLoading(false);
        }
    };

    return (
        <ResultsContext.Provider value={{
            loading,
            results,
            getSearchResults
        }}>
            { children }
        </ResultsContext.Provider>
    );
};
