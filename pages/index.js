import { useContext } from "react";
import Layout from "../components/layout/layout";

export default function Home() {

  return (
    <Layout title="Google | Home">
      <div className="bg-gray-100 dark:bg-gray-900 dark:text-gray-200 min-h-screen">
        Google Search App
      </div>

    </Layout>
  )
}
