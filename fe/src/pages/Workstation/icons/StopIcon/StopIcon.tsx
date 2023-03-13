import React from "react";
import Icon from '@ant-design/icons';
import { ReactComponent as StopSvg } from './stop-icon.svg';

export const StopIcon = () => (
    <Icon component={StopSvg} style={{fontSize: '36px', display: 'flex', alignItems: 'center', height: '100%'}} />
)