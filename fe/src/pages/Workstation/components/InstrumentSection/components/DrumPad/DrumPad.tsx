import React from 'react';
import { pads } from './utils';
import { Pad } from './components';

import styles from './DrumPad.module.scss';

export const DrumPad = () => {
    return (
        <div className={styles.drumPad}>
            { pads.map((pad, i) => <Pad key={i} padKey={pad.padKey} />) }
        </div>
    )
}
