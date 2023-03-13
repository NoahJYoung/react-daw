import React, { useState } from 'react';
import { Radio, RadioChangeEvent } from 'antd';
import { AudioEngine } from '../../AudioEngine';
import { PlayIcon, RecordIcon, StopIcon } from '../../icons';
const { Group, Button } = Radio

interface TransportProps {
    audioEngine: AudioEngine
}

export const Transport: React.FC<TransportProps> = ({ audioEngine }) => {
    const [transportState, setTransportState] = useState<string>(audioEngine.mixer.state)

    const handleTransportStateChange = (event: RadioChangeEvent) => {
        switch (event.target.value) {
            case ('playing'):
                audioEngine.mixer.play()
                break;
            case ('recording'):
                audioEngine.mixer.record()
                break;
            default:
                audioEngine.mixer.stop()
                break;
        };
        setTransportState(event.target.value);
    }

    return (
        <div style={{
            display: 'flex',
            alignItems: 'center',
        }}>
            <Group style={{height: '100%', display: 'flex', alignItems: 'center', textAlign: 'center'}} value={transportState} onChange={handleTransportStateChange}>
                <Button
                    style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', height: '100%', justifyContent: 'center' }}
                    value="recording"
                >
                    <RecordIcon />
                </Button>
                <Button
                    style={{ display: 'flex', alignItems: 'center', height: '100%' }}
                    value="playing"
                >
                    <PlayIcon />
                </Button>
                <Button
                    style={{ display: 'flex', alignItems: 'center', height: '100%' }}
                    value="stopped"
                >
                    <StopIcon />
                </Button>
            </Group>
        </div>
    )
}
