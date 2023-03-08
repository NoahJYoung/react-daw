import React, { useState } from 'react';
import { Layout, Space, Radio, RadioChangeEvent } from 'antd';
import { FooterDisplay } from './types';
import { InstrumentSection, MasterFader, Mixer, TrackSection, Transport } from './components';
import { AudioEngine } from './AudioEngine';

import styles from './Workstation.module.scss';

const { Content, Footer } = Layout;
const { Group, Button } = Radio

const audioEngine = new AudioEngine();

export const Workstation = () => {
    const [footerDisplay, setFooterDisplay] = useState<FooterDisplay>(FooterDisplay.INSTRUMENTS);

    const handleChangeFooterDisplay = (e: RadioChangeEvent) => {
        setFooterDisplay(e.target.value);
    }

    return (
        <Space direction="vertical" className={styles.workstation} size="large">
            <Layout className={styles.layout}>
                <Content className={styles.content}>
                    <TrackSection />
                </Content>

                <Content className={styles.transport}>
                    <Transport audioEngine={audioEngine} />
                </Content>

                <Footer className={styles.footer}>
                    <MasterFader />
                    <div className={styles.footerViewWrapper}>
                        <Group value={footerDisplay} onChange={handleChangeFooterDisplay}>
                            <Button value={FooterDisplay.INSTRUMENTS}>Instruments</Button>
                            <Button value={FooterDisplay.MIXER}>Mixer</Button>
                        </Group>
                        { footerDisplay === FooterDisplay.INSTRUMENTS ?
                            <InstrumentSection audioEngine={audioEngine} /> :
                            <Mixer audioEngine={audioEngine} /> }
                    </div>
                </Footer>
            </Layout>
        </Space>
    )
}
