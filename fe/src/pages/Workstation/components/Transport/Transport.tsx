import React, { useState } from 'react';
import { Radio, RadioChangeEvent } from 'antd';
import { AudioEngine } from '../../AudioEngine';
import { ChromeFilled, PlayCircleFilled } from '@ant-design/icons';

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
        }}>
            <Group value={transportState} onChange={handleTransportStateChange}>
                <Button
                    style={ transportState === 'recording' ? { background: 'red' } : {} }
                    value="recording"
                >
                    Record
                </Button>
                <Button
                    style={ transportState === 'playing' ? { background: 'light-green' } : {} }
                    value="playing"
                >
                    Play
                </Button>
                <Button value="stopped">
                    Stop
                </Button>
            </Group>
        </div>
    )
}
