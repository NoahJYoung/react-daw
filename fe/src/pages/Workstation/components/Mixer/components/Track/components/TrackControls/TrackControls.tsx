import { Button } from "antd";
import { Knob, KnobChangeEvent } from "primereact/knob";
import React, { useState } from "react";
import { RecordIcon } from "../../../../../../icons";

import styles from './TrackControls.module.scss';

interface TrackControlsProps {
    active: boolean
    handleToggleActive: () => void
    pan: number
    handleChangePan: (e: KnobChangeEvent) => void
    muted: boolean
    handleToggleMuted: () => void
}

export const TrackControls: React.FC<TrackControlsProps> = ({
    active,
    handleToggleActive,
    pan,
    handleChangePan,
    muted,
    handleToggleMuted
}) => {
    return (
        <div className={styles.trackControls}>
            <Knob
                valueColor="grey"
                value={pan}
                onChange={handleChangePan}
                className={styles.panKnob}
                size={40}
                min={-100}
                max={100}
            />
            <div className={styles.verticalSection}>
                <Button
                    onClick={handleToggleActive}
                    style={{ opacity: active ? '1' : '0.5' }}
                    className={styles.activeButton}
                    type="primary"
                    icon={<RecordIcon size={24} />}
                />
                <Button
                    className={styles.muteButton}
                    onClick={handleToggleMuted}
                    style={{ background: muted ? 'red' : 'grey' }}
                >
                    M
                </Button>
            </div>
        </div>
    )
}