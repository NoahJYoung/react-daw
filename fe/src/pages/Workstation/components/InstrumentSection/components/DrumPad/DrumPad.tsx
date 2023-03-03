import React from 'react';
import { Pad } from './components';
import { DrumSampler } from '../../../../AudioEngine/DrumSampler/DrumSampler';


import styles from './DrumPad.module.scss';

interface DrumPadProps {
    drumSampler: DrumSampler
}

export const DrumPad: React.FC<DrumPadProps> = ({ drumSampler }) => {
    const { pads, triggerAttack } = drumSampler;
    return (
        <div className={styles.drumPad}>
            { pads.map((pad, i) => (
                <Pad
                    key={i}
                    index={pad.index}
                    padKey={pad.padKey}
                    triggerAttack={triggerAttack}
                />
            )) }
        </div>
    )
}
