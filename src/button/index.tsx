import t from 'prop-types'
import React from 'react'

export interface ButtonProps {
  /**
   * @description     Alert类型
   * @default
   */
  children: any,
  type?: 'primary' | 'text' | 'waring';
}

export type kindMap = Record<Required<ButtonProps>['type'], string>

const prefixCls = 'xianzao-alert';

const kinds: kindMap = {
  primary: '#5352ED',
  text: '#2ED573',
  waring: '#FF4757',
}

const Button: React.FC<ButtonProps> = ({ children, type = 'primary', ...rest }) => {
  return <button
    className={prefixCls}
    style={{
      backgroundColor: kinds[type]
    }}
    {...rest}
  >
    {children}
  </button>
}

Button.propTypes = {
  type: t.oneOf(['primary', 'text', 'waring'])
}

export default Button