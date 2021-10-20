import 'tailwindcss/tailwind.css'
import { ThemeState } from "../context/theme";

function MyApp({ Component, pageProps }) {
  return (
      <ThemeState>
        <Component {...pageProps} />
      </ThemeState>
  );
}

export default MyApp
