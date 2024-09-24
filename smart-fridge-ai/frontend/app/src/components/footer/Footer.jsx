import React from 'react';

import styles from "./Footer.module.css";
import ExternalLink from './ExternalLink/ExternalLink';
import Link from './Link/Link';


const Footer = () => {

    const pageLinks = [
        { href: "http://localhost/3000/home", text: "🏚️Home" },
        { href : "http://localhost/3000/item", text: "📃Add item" },
        { href: "http://localhost/3000/inventory", text: "🍇🍓🍌Inventory" },
        { href: "http://localhost/3000/shopping", text: "🛒Shopping" },
        
    ];

}


return (
    <footer className={styles.footer}>

        
        <ul>
            {pageLinks.map((link, index) => (
                <Link key={index} href={link.href} text={link.text}>

                </Link>
            ))}
        </ul>

    </footer>
        
)
