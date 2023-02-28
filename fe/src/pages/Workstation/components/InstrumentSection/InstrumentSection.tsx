import React from 'react';
import { Keyboard, DrumPad } from './components';

import styles from './InstrumentSection.module.scss';

export const InstrumentSection = () => (
    <div className={styles.instrumentsContainer}>
        <Keyboard />
        <DrumPad />
    </div>
);
