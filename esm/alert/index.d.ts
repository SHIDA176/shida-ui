import React from 'react';
export interface AlertProps {
    /**
     * @description     Alert类型
     * @default
     */
    children: any;
    kind?: 'info' | 'positive' | 'negative' | 'warning';
}
export type kindMap = Record<Required<AlertProps>['kind'], string>;
declare const Alert: React.FC<AlertProps>;
export default Alert;
