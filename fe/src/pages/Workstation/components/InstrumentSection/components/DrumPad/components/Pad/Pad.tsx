import React, { useCallback, useEffect, useState } from 'react';

import styles from './Pad.module.scss';

interface PadProps {
    padKey: string
    index: number
    triggerAttack: (index: number) => void
}

export const Pad: React.FC<PadProps> = ({ padKey, index, triggerAttack,  }) => {
    const [isActive, setIsActive] = useState<boolean>(false);

    const handleKeyDown = useCallback((event: KeyboardEvent) => {
        event.preventDefault();
        if (!event.repeat && !isActive) {
            if (event.key === padKey) {
                setIsActive(true);
                triggerAttack(index);
            }
        } 
    }, [index, isActive, padKey, triggerAttack]);

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

        const className = `${styles.pad} ${isActive ? styles.active : ''}`;


    return (
        <div className={className}>
            <p>{padKey}</p>
        </div>
    )
}
