import styles from '@/styles/Toggle.module.css';
import { useState } from 'react';

interface ToggleProps {
    text: string;
    component: React.ReactNode;
}

const Toggle: React.FC<ToggleProps> = ({ text, component }) => {

    const [showComponent, updateShowComponent] = useState(true);

    const toggleComponent = () => {
        updateShowComponent(showComponent => !showComponent);
    }

    return (
        <>
            <div className={`${styles.toggle}`}>
                <input 
                    type="checkbox" 
                    id="toggle" 
                    name="toggle" 
                    checked={showComponent}
                    onChange={() => toggleComponent()} 
                />
                <label htmlFor="toggle"> {text}</label>
            </div>
            { showComponent ? component : ''}
        </>
    );
}

export default Toggle;