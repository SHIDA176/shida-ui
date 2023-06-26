import React from 'react';
export interface ButtonProps {
    /**
     * @description     Alert类型
     * @default
     */
    children: any;
    type?: 'primary' | 'text' | 'waring';
}
export type kindMap = Record<Required<ButtonProps>['type'], string>;
declare const Button: React.FC<ButtonProps>;
export default Button;
