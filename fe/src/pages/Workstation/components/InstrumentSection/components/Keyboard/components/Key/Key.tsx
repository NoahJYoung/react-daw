import React, { useState, useEffect, useCallback } from 'react';
import { Typography } from 'antd';
import { Key as KeyType } from '../../types';

import styles from './Key.module.scss';

const { Paragraph } = Typography;

interface KeyProps {
    keyData: KeyType
}

export const Key: React.FC<KeyProps> = ({keyData}) => {
    const [isActive, setIsActive] = useState<boolean>(false);

    const { noteName, key, type } = keyData;
    const className = `${styles.key} ${styles[type]} ${isActive ? styles.active : ''}`;

    const handleKeyDown = useCallback((event: KeyboardEvent) => {
        event.preventDefault();
        if (!event.repeat && !isActive) {
            if (event.key === key) {
                setIsActive(true);
            }
        } 
    }, [isActive, key]);

    const handleKeyUp = useCallback((event: KeyboardEvent) => {
            event.preventDefault();
            if (!event.repeat && isActive) {
                if (event.key === key) {
                    setIsActive(false);
                }
            } 
        }, [isActive, key]);

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
            <Paragraph>{keyData.key}</Paragraph>
        </div>
    )
}
