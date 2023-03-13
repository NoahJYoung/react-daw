import React from "react";
import Icon from '@ant-design/icons';
import { ReactComponent as PlaySvg } from './play-icon.svg';



export const PlayIcon = () => (
    <Icon component={PlaySvg} style={{fontSize: '36px', display: 'flex', alignItems: 'center'}} />
)