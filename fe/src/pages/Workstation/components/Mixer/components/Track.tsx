import React, { useCallback, useState } from 'react';
import { Button, Slider, Typography } from 'antd';
import { Track as TrackData } from '../../../AudioEngine/Mixer/Track';

import styles from './Track.module.scss';

const { Text } = Typography;

interface TrackProps {
    track: TrackData
}

export const Track: React.FC<TrackProps> = ({ track }) => {
    const [volume, setVolume] = useState<number>(track.volume);
    const [active, setActive] = useState<boolean>(track.active);

    const handleChangeVolume = useCallback((value: number) => {
        setVolume(value);
        track.setVolume(volume);
    }, [track, volume]);

    const handleToggleActive = useCallback(() => {
        setActive(!active);
        track.toggleActive();
    }, [active, track])

    return (
        <div key={track.number} className={styles.faderWrapper}>
            <Button
                onClick={handleToggleActive}
                style={{ background: active ? 'red' : 'grey' }}
                className={styles.activeButton}
                type="primary"
            />
            <Slider
                min={-50}
                max={0}
                className={styles.fader}
                value={volume}
                onChange={handleChangeVolume}
                vertical
            />
            <Text>{track.name || track.number}</Text>
        </div>
    )
} 

