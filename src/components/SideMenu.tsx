import styles from '@/styles/SideMenu.module.css';
import IconWrapper from './IconWrapper';
import { useState } from 'react';
import { BsInfoSquare, BsPencilSquare } from 'react-icons/bs';
import { FaGithubSquare, FaLinkedin } from 'react-icons/fa';
import { IoIosHome } from 'react-icons/io'
import { SiApplemusic } from 'react-icons/si'
import { PiFileCodeFill } from 'react-icons/pi';

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
                >{open ? 
                    <span aria-hidden="true">&#10005;</span>
                    : 
                    <div aria-hidden="true" className={`${styles.svgContainer}`}>
                        <img src="/hamburgerMenu.svg" alt="open menu" />
                    </div>
                }
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
                    <li role="presentation"><a role="menuitem" tabIndex={open ? 0 : -1} href="/About" target="_" aria-label="About page - link opens in a new tab">About</a><IconWrapper icon=<BsInfoSquare /> /></li>
                    <li role="presentation"><a role="menuitem" tabIndex={open ? 0 : -1} href="/Blog" target="_" aria-label="Blog page - link opens in a new tab">Blog</a><IconWrapper icon=<BsPencilSquare /> /></li>
                    <li role="presentation"><a role="menuitem" tabIndex={open ? 0 : -1} href="https://github.com/CurtisGrayeBabin" target="_" rel="noopener noreferrer" aria-label="GitHub profile page - link opens in a new tab">GitHub</a><IconWrapper icon=<FaGithubSquare /> /></li>
                    <li role="presentation"><a role="menuitem" tabIndex={open ? 0 : -1} href="/" aria-label="Home">Home</a><IconWrapper icon=<IoIosHome /> /></li>
                    <li role="presentation"><a role="menuitem" tabIndex={open ? 0 : -1} href="https://linkedin.com/in/curtisbabin/" target="_" rel="noopener noreferrer" aria-label="LinkedIn profile page - link opens in a new tab">LinkedIn</a><IconWrapper icon=<FaLinkedin /> /></li>
                    <li role="presentation"><a role="menuitem" tabIndex={open ? 0 : -1} href="/Music" target="_" aria-label="Music page - link opens in a new tab">Music</a><IconWrapper icon=<SiApplemusic /> /></li>
                    <li role="presentation"><a role="menuitem" tabIndex={open ? 0 : -1} href="/Works" target="_" aria-label="Works page - link opens in a new tab">Works</a><IconWrapper icon=<PiFileCodeFill /> /></li>
                </ul> 
            </div>
        </nav>
    );
}

export default SideMenu;