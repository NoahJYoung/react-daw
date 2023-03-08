import React, { useState } from 'react';
import { Button } from 'antd';
import { AudioEngine } from '../../AudioEngine';

interface TransportProps {
    audioEngine: AudioEngine
}

export const Transport: React.FC<TransportProps> = ({ audioEngine }) => {
    const [recording, setRecording] = useState(false);

    const handleRecord = () => {
        //audioEngine.record();
        //setRecording(true);
    };

    const handleStopRecording = () => {
        //audioEngine.stop();
        //setRecording(false);
    }

    const handlePlayRecording = () => {
        //if (audioEngine.player) {
        //    audioEngine.player.start()
        //}
    }
    return (
        <div style={{
            display: 'flex',
        }}>
            <Button style={recording ? {background: 'red' } : {}} onClick={handleRecord}>Record</Button>
            <Button onClick={handleStopRecording}>Stop</Button>
            <Button onClick={handlePlayRecording}>play</Button>
        </div>
    )
}
