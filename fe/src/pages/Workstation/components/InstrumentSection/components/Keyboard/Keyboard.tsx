import React from 'react';
import { Key } from './components';
import { keys } from './utils';

import styles from './Keyboard.module.scss';

export const Keyboard = () => (
    <div className={styles.keyboard}>
        <div className={styles.keys}>
            {keys.map((key, i) => <Key key={i} keyData={key} />)}
        </div>
    </div>
)
