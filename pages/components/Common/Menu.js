import styles from '../../../styles/Home.module.css'
import Link from "next/link";
export default function Menu() {
    return (
        <ul>
            <li>
                <Link href="/about">
                    <a>About Us</a>
                </Link>
            </li>
        </ul>
    )
}