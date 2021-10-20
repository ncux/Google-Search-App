import Link from "next/link";
import classes from "./footer.module.css";

export default function Footer() {

    return (
        <footer className={classes.footer}>
            <p>Copyright &copy; Google Search App 2021</p>
            <p>
                <Link href="/about">Google Search App</Link>
            </p>
        </footer>
    );
}
