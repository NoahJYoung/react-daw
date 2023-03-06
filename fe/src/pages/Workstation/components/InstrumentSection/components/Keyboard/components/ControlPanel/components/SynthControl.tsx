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
        const [sliderValue, setSliderValue] = useState<number>(value);
        const [knobColor, setKnobColor] = useState("#58ace8")

        const handleSliderChange = (value: number) => {
            const parsedValue = Number(value.toFixed(2))
            if (value < 0) setKnobColor("#db4646")
            else setKnobColor("#58ace8")
            setSliderValue(parsedValue);
        }
        return (
            <div className={styles.controlContainer}>
                <Text className={styles.knobLabel}>{ label }</Text>
                <Knob
                    valueColor={knobColor}
                    value={sliderValue}
                    onChange={(e) => handleSliderChange(e.value)}
                    size={60}
                    step={step}
                    min={min}
                    max={max}
                />
            </div>
        );
    }
