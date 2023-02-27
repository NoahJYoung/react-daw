import React from 'react';
import { Slider, Typography } from 'antd';
import { mockedTracks } from './mockedTracks';
import styles from './Mixer.module.scss';

const { Text } = Typography;


export const Mixer = () => {
    return (
        <div className={styles.mixerContainer}>
            {mockedTracks.map(track => (
                <div className={styles.faderWrapper}>
                    <Slider
                        className={styles.fader}
                        value={track.value}
                        vertical
                    />
                    <Text>{track.name || track.number}</Text>
                </div>
            ))}
        </div>
    )
}
