import React, { useCallback, useState } from 'react';
import { KnobChangeEvent } from 'primereact/knob';
import { Slider, Typography } from 'antd';
import { TrackControls } from './components';
import { Track as TrackData } from '../../../../AudioEngine/Mixer/Track';

import styles from './Track.module.scss';

const { Text } = Typography;

interface TrackProps {
    track: TrackData
}

const trackStyle = {
    boxShadow: '1px 1px 2px #A6A6A6',
    backgroundColor: '#111',
    borderRadius: '4px',
};

const handleStyle = {
    width: '1rem',
    height: '2rem',
    background: 'radial-gradient(#eee, #888)',
    outline: 'none',
    borderRadius: '0.25rem',
    boxShadow: '2px 1px 2px 2px #222',
    left: '-15%',
}

export const Track: React.FC<TrackProps> = ({ track }) => {
    const [volume, setVolume] = useState<number>(track.volume);
    const [active, setActive] = useState<boolean>(track.active);
    const [pan, setPan] = useState<number>(track.pan * 100);
    const [muted, setMuted] = useState<boolean>(track.muted);

    const handleChangeVolume = useCallback((value: number) => {
        track.setVolume(volume);
        setVolume(value);
    }, [volume, track]);

    const handleToggleActive = useCallback(() => {
        setActive(!active);
        track.toggleActive();
    }, [active, track])

    const handleChangePan = useCallback((e: KnobChangeEvent) => {
        track.setPan(e.value);
        setPan(e.value);
    }, [pan, track])

    const handleToggleMuted = useCallback(() => {
        setMuted(!muted);
        track.toggleMuted()
    }, [muted, track])

    return (
        <div key={track.number} className={styles.faderWrapper}>
            <TrackControls
                active= {active}
                pan={pan}
                muted={muted}
                handleToggleMuted={handleToggleMuted}
                handleToggleActive={handleToggleActive}
                handleChangePan={handleChangePan}
            />
            <Slider
                min={-50}
                max={0}
                className={styles.fader}
                value={volume}
                onChange={handleChangeVolume}
                trackStyle={trackStyle}
                railStyle={trackStyle}
                handleStyle={handleStyle}
                vertical
            />
            <Text className={styles.trackName}>{track.name || track.number}</Text>
        </div>
    )
} 

