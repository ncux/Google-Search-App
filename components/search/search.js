import { useContext, useEffect, useState } from "react";
import { useDebounce } from "use-debounce";
import { ResultsContext } from "../../context/results";

export default function Search() {

    const { setQuery } = useContext(ResultsContext);

    const [text, setText] = useState('');

    const [debouncedValue] = useDebounce(text, 300)  // 300 ms

    useEffect(() => {
        if(debouncedValue) {
            setQuery(debouncedValue);
        }
    }, [debouncedValue]);

    return (
        <div className="dark:bg-gray-900 dark:text-gray-200 relative sm:ml-48 md:ml-72 sm:mt-10 mt-3">
            <input type="text" value={ text } onChange={ event => setText(event.target.value) } placeholder={ `Search` }
                   className="sm:w-96 w-80 h-10 dark:bg-gray-200 border rounded-full shadow-sm outline-none p-6 text-black hover:shadow-lg"
            />
            <button onClick={ () => setText('') }> X</button>
        </div>
    );
}
