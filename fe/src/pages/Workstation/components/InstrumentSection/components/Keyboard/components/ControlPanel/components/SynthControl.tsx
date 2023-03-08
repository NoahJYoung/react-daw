import React, { useState } from 'react';
import { Typography } from 'antd';
import { Knob, KnobChangeEvent } from 'primereact/knob';
import { SynthControlData } from '../../../../../../../AudioEngine/Synthesizer/Synthesizer';
import styles from './SynthControl.module.scss';

const { Text } = Typography

interface SynthControlProps {
    control: SynthControlData
}

export const SynthControl: React.FC<SynthControlProps> = ({
control
}) => {
        const [knobValue, setKnobValue] = useState<number>(control.value);
        const [knobColor, setKnobColor] = useState("#58ace8")

        const handleSliderChange = (value: number) => {
            const parsedValue = Number(value.toFixed(2))
            value < 0 ? setKnobColor("#db4646") : setKnobColor("#58ace8")
            setKnobValue(parsedValue);
            control.set(value);
        }
        return (
            <div className={styles.controlContainer}>
                <Text className={styles.knobLabel}>{ control.label }</Text>
                <Knob
                    valueColor={knobColor}
                    value={knobValue}
                    onChange={(e: KnobChangeEvent) => handleSliderChange(e.value)}
                    size={50}
                    step={control.step}
                    min={control.min}
                    max={control.max}
                />
            </div>
        );
    }
