import React from 'react';
import { Waveform } from './components';
import { TrackData } from '../../mockedTracks';

import styles from './Track.module.scss';

interface TrackProps {
    trackData: TrackData
}

export const Track: React.FC<TrackProps> = ({ trackData }) => {
    const { number } = trackData;
    return (
        <div className={styles.trackContainer}>
            <p>{`Track ${number}`}</p>
            <Waveform />
        </div>
    )
}
