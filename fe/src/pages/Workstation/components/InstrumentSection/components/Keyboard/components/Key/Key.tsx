import React, { useState, useEffect, useCallback } from 'react';
import { Key as KeyType } from '../../types';

import styles from './Key.module.scss';

interface KeyProps {
    keyData: KeyType
    triggerAttack: (note: string) => void
    triggerRelease: (note: string) => void
}

export const Key: React.FC<KeyProps> = ({
    keyData,
    triggerAttack,
    triggerRelease,
}) => {
    const [isActive, setIsActive] = useState<boolean>(false);

    const { noteName, key, type } = keyData;
    const className = `${styles.key} ${styles[type]} ${isActive ? styles.active : ''}`;

    const handleKeyDown = useCallback((event: KeyboardEvent) => {
        event.preventDefault();
        if (!event.repeat && !isActive) {
            if (event.key === key) {
                setIsActive(true);
                triggerAttack(noteName);
            }
        } 
    }, [isActive, key, noteName, triggerAttack]);

    const handleKeyUp = useCallback((event: KeyboardEvent) => {
            event.preventDefault();
            if (!event.repeat && isActive) {
                if (event.key === key) {
                    setIsActive(false);
                    triggerRelease(noteName);
                }
            } 
        }, [isActive, key, noteName, triggerRelease]);

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
            <p>{keyData.key}</p>
        </div>
    )
}
