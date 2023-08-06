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

    const handleKeyDown = (event: React.MouseEvent<HTMLDivElement> | React.KeyboardEvent<HTMLDivElement>) => {
        if ((event as React.KeyboardEvent<HTMLDivElement>).key === 'Enter') {
            // Toggle the checkbox when Enter key is pressed
            toggleComponent();
        }
    }

    return (
        <>
            <div className={`${styles.toggle} bottomRight`}>
                <input 
                    type="checkbox" 
                    id="toggle" 
                    name="toggle" 
                    checked={showComponent}
                    onChange={() => toggleComponent()} 
                    onKeyDown={handleKeyDown}
                />
                <label htmlFor="toggle"> {text}</label>
            </div>
            { showComponent ? component : '' }
        </>
    );
}

export default Toggle;