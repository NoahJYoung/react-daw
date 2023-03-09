import React from 'react';
import { Track } from './components';
import { mockedTracks } from './mockedTracks';

import styles from './TrackSection.module.scss';

export const TrackSection = () => {
    return (
        <div className={styles.tracksContainer}>
            {mockedTracks.map(track => (
                <div key={track.number} className={styles.wrapper}>
                    <div className={styles.controls}>{`Track Control ${track.number}`}</div>
                    <Track key={track.number} trackData={track}/>
                </div>
                ))}
        </div>
    );
}

