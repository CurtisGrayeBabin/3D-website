import Link from 'next/link';
import styles from '@/styles/Page.module.css';

const ComingSoonContent = () => {
    return (
        <div className={`${styles.center}`}>
            <h1>Content Coming Soon</h1>
            <br />
            <Link href="/">Go Home</Link>
        </div>
    );
}

export default ComingSoonContent;