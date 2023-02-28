import React from 'react';
import { Slider, Typography } from 'antd';

import styles from './MasterFader.module.scss';

const { Text } = Typography;

export const MasterFader = () => {
    return (
        <div className={styles.faderWrapper}>
            <Slider className={styles.fader} vertical defaultValue={75} />
            <Text>MASTER</Text>
        </div>
    )
}
