import React, { useCallback, useEffect, useState } from 'react';

import styles from './Pad.module.scss';

interface PadProps {
    padKey: string
}

export const Pad: React.FC<PadProps> = ({padKey}) => {
    const [isActive, setIsActive] = useState<boolean>(false);

    const className = `${styles.pad} ${isActive ? styles.active : ''}`;

    const handleKeyDown = useCallback((event: KeyboardEvent) => {
        event.preventDefault();
        if (!event.repeat && !isActive) {
            if (event.key === padKey) {
                setIsActive(true);
                console.log(padKey, 'down')
            }
        } 
    }, [isActive, padKey]);

    const handleKeyUp = useCallback((event: KeyboardEvent) => {
            event.preventDefault();
            if (!event.repeat && isActive) {
                if (event.key === padKey) {
                    setIsActive(false);
                }
            } 
        }, [isActive, padKey]);

        useEffect(() => {
            window.addEventListener('keydown', handleKeyDown);
            window.addEventListener('keyup', handleKeyUp);

            return () => {
                window.removeEventListener('keydown', handleKeyDown)
                window.removeEventListener('keyup', handleKeyUp)
            }
        }, [handleKeyDown, handleKeyUp])

    return (
        <div className={className}>
            <p>{padKey}</p>
        </div>
    )
}
