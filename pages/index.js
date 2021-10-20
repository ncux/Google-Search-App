import { useContext } from "react";
import Layout from "../components/layout/layout";
import { ThemeContext } from "../context/theme";

export default function Home() {

  const { isDark } = useContext(ThemeContext);

  return (
    <Layout title="Google | Home">
      <div className="bg-gray-100 dark:bg-gray-900 dark:text-gray-200 min-h-screen">
        Google Search App
      </div>

    </Layout>
  )
}
