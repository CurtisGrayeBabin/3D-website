import styles from '@/styles/SideMenu.module.css';
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

const SideMenu = () => {

    const [open, openOrClose] = useState(false);

    const toggleMenu = () => {
        openOrClose(open => !open);
    };


    const handleKeyDown = (event: React.MouseEvent<HTMLDivElement> | React.KeyboardEvent<HTMLDivElement>) => {
        if ((event as React.KeyboardEvent<HTMLDivElement>).key === 'Enter') {
            // Toggle the side menu when Enter key is pressed
            toggleMenu();
        }
        else if ((event as React.KeyboardEvent<HTMLDivElement>).key === 'Escape') {
            // Toggle the side menu when Enter key is pressed
            openOrClose(open => false);
        }
    }

    return (
        <nav 
            className={`${styles.sideMenu}`} 
            aria-live="polite" 
            aria-label="main navigation"
        >
            <div 
                aria-controls="menu"
                aria-label={open ? 'close menu' : 'open menu'}
                tabIndex={0}
                onKeyDown={handleKeyDown}
                className={`${styles.menuIcon} topRight`}
                onClick={() => toggleMenu()}
                >
                <Image 
                src={open ? "/closeMenu.svg" : "/hamburgerMenu.svg"}
                width={44} 
                height={44} 
                alt={open ? "close menu" : "open menu"} />
            </div>

            {/* gracefull slide-in */}
            <div 
                aria-hidden={open ? "false" : "true"}
                className={open ? `${styles.divLinks} ${styles.open}` : `${styles.divLinks} ${styles.close}`}
            >
                <ul 
                    id="menu" 
                    role="menu" 
                    className={`${styles.innerScroll}`}
                >
                    <li role="presentation"><Link role="menuitem" tabIndex={open ? 0 : -1} href="/about" aria-label="About page">About</Link></li>
                    <li role="presentation"><Link role="menuitem" tabIndex={open ? 0 : -1} href="/blog" aria-label="Blog page">Blog</Link></li>
                    <li role="presentation"><a role="menuitem" tabIndex={open ? 0 : -1} href="https://github.com/CurtisGrayeBabin" target="_" rel="noopener noreferrer" aria-label="GitHub profile page - link opens in a new tab">GitHub</a></li>
                    <li role="presentation"><Link role="menuitem" tabIndex={open ? 0 : -1} href="/" aria-label="Home">Home</Link></li>
                    <li role="presentation"><a role="menuitem" tabIndex={open ? 0 : -1} href="https://linkedin.com/in/curtisbabin/" target="_" rel="noopener noreferrer" aria-label="LinkedIn profile page - link opens in a new tab">LinkedIn</a></li>
                    <li role="presentation"><Link role="menuitem" tabIndex={open ? 0 : -1} href="/music" aria-label="Music page">Music</Link></li>
                    <li role="presentation"><Link role="menuitem" tabIndex={open ? 0 : -1} href="/works" aria-label="Works page">Works</Link></li>
                </ul> 
            </div>
        </nav>
    );
}

export default SideMenu;