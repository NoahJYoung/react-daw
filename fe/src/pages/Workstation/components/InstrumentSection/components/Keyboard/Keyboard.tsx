import React from 'react';
import { Key, ControlPanel } from './components';
import { Synthesizer } from '../../../../AudioEngine';

import styles from './Keyboard.module.scss';

interface KeyboardProps {
    synthesizer: Synthesizer
}

export const Keyboard: React.FC<KeyboardProps> = ({ synthesizer }) => {
    const { triggerAttack, triggerRelease, keys } = synthesizer;
    return (
        <div className={styles.keyboard}>
            <ControlPanel synth={synthesizer} />
            <div className={styles.keys}>
                {keys.map((key, i) => (
                    <Key
                        key={i}
                        keyData={key}
                        triggerAttack={triggerAttack}
                        triggerRelease={triggerRelease}
                    />
                ))}
            </div>
        </div>
    );
}
