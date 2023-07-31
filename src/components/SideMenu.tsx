import styles from '@/styles/SideMenu.module.css';
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
    }

    return (
        <div className={`${styles.sideMenu}`}>
            <div 
                tabIndex={0}
                onKeyDown={handleKeyDown}
                className={`${styles.menuIcon} topRight`}
                onClick={() => toggleMenu()}
                >{!open ? <span>&#9776;</span> : <span>&#10005;</span>}</div>

            {/* gracefull slide-in */}
            <nav className={open ? `${styles.open}` : `${styles.close}`} aria-live="polite">
                <ul>
                    <li><a href="/About" tabIndex={open ? 0 : -1} target="_">About</a></li>
                    <li><a href="/Blog" tabIndex={open ? 0 : -1} target="_">Blog</a></li>
                    <li><a href="https://github.com/CurtisGrayeBabin" tabIndex={open ? 0 : -1} target="_">GitHub</a></li>
                    <li><a href="https://linkedin.com/in/curtisbabin/" tabIndex={open ? 0 : -1} target="_">LinkedIn</a></li>
                    <li><a href="/Music" tabIndex={open ? 0 : -1} target="_">Music</a></li>
                    <li><a href="/Works" tabIndex={open ? 0 : -1} target="_">Works</a></li>
                </ul> 
            </nav>
        </div>
    );
}

export default SideMenu;