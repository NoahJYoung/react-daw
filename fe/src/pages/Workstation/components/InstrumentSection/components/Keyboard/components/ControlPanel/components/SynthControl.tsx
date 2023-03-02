import React, { useState } from 'react';
import { Slider, Typography } from 'antd';
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

        const handleSliderChange = (value: number) => {
            setSliderValue(value);
        }
        return (
            <div className={styles.controlContainer}>
                <Text>{ label }</Text>
                <Slider
                    onChange={handleSliderChange}
                    onAfterChange={set}
                    value={sliderValue}
                    step={step}
                    min={min}
                    max={max}
                />
            </div>
        );
    }
