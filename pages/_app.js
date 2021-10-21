import 'tailwindcss/tailwind.css'
import { ThemeState } from "../context/theme";
import { ResultsState } from "../context/results";

function MyApp({ Component, pageProps }) {
  return (
      <ThemeState>
        <ResultsState>
            <Component {...pageProps} />
        </ResultsState>
      </ThemeState>
  );
}

export default MyApp
