import React from "react";
import Icon from '@ant-design/icons';
import { ReactComponent as RecordSvg } from './record-icon.svg';

interface RecordIconProps {
    size?: number 
}

export const RecordIcon: React.FC<RecordIconProps> = ({ size }) => (
    <Icon component={RecordSvg} style={{fontSize: `${size || 36}px`, display: 'flex', alignItems: 'center', height: '100%'}} />
)