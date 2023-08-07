import { IconContext } from "react-icons";
import iconStyles from '@/styles/IconWrapper.module.css';

interface IconWrapperProps {
    icon: React.ReactNode;
}

const IconWrapper: React.FC<IconWrapperProps> = ({ icon }) => {
    return (
        <IconContext.Provider value={{ className: iconStyles.icon }}>
            { icon }
        </IconContext.Provider>
    );
}

export default IconWrapper;