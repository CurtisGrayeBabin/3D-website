import styles from '@/styles/Footer.module.css';

const Footer = () => {
    return (
        <div className={`${styles.footer} bottomLeft`}>
            <a href="https://www.termsfeed.com/live/3fbd4032-b635-4816-a90d-ed310ec9d468" target="_" rel="noopener noreferrer" aria-label="Website privacy policy page - link opens in a new tab">Privacy Policy</a>
        </div>
    );
}

export default Footer;