import Link from "next/link";
import Results from "../components/results/results";
import Layout from "../components/layout/layout";

export default function NewsPage() {

    return (
        <Layout title="Google | News" >
            <div className="dark:bg-gray-900 dark:text-gray-200">
                <Results />
            </div>
        </Layout>
    );
}
