import React, { useState } from 'react';
import { Typography } from 'antd';
import { Knob } from 'primereact/knob';
import styles from './SynthControl.module.scss';

const { Text } = Typography

interface SynthControlProps {
    label: string
    value: number
    step: number
    min: number
    max: number
    set: (value: number) => void
}

export const SynthControl: React.FC<SynthControlProps> = ({
    label,
    value,
    step,
    min,
    max,
    set,
}) => {
        const [knobValue, setKnobValue] = useState<number>(value);
        const [knobColor, setKnobColor] = useState("#58ace8")

        const handleSliderChange = (value: number) => {
            const parsedValue = Number(value.toFixed(2))
            value < 0 ? setKnobColor("#db4646") : setKnobColor("#58ace8")
            setKnobValue(parsedValue);
        }
        return (
            <div className={styles.controlContainer}>
                <Text className={styles.knobLabel}>{ label }</Text>
                <Knob
                    valueColor={knobColor}
                    value={knobValue}
                    onChange={(e) => handleSliderChange(e.value)}
                    size={60}
                    step={step}
                    min={min}
                    max={max}
                />
            </div>
        );
    }
