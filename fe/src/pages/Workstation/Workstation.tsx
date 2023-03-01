import React, {useState} from 'react';
import { Layout, Space, Radio, RadioChangeEvent } from 'antd';
import { FooterDisplay } from './types';
import { InstrumentSection, MasterFader, Mixer } from './components';
import { AudioEngine } from './AudioEngine';

import styles from './Workstation.module.scss';

const {Header, Content, Footer} = Layout;
const {Group, Button} = Radio

export const Workstation = () => {
    const [footerDisplay, setFooterDisplay] = useState<FooterDisplay>(FooterDisplay.INSTRUMENTS);
    const audioEngine = new AudioEngine();

    const handleChangeFooterDisplay = (e: RadioChangeEvent) => {
        setFooterDisplay(e.target.value);
    }

    return (
        <Space direction="vertical" className={styles.workstation} size="large">
            <Layout className={styles.layout}>
                <Header className={styles.transport}>
                    <div>TRANSPORT</div>
                </Header>
                <Content className={styles.tracks}>
                    <div style={{height: '45vh'}}>TRACKS</div>
                </Content>
                <Footer className={styles.footer}>
                    <MasterFader />
                    <div className={styles.footerViewWrapper}>
                        <Group value={footerDisplay} onChange={handleChangeFooterDisplay}>
                            <Button value={FooterDisplay.INSTRUMENTS}>Instruments</Button>
                            <Button value={FooterDisplay.MIXER}>Mixer</Button>
                        </Group>
                        { footerDisplay === FooterDisplay.INSTRUMENTS ? <InstrumentSection audioEngine={audioEngine} /> : <Mixer /> }
                    </div>
                </Footer>
            </Layout>
        </Space>
    )
}
