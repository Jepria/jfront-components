import React from "react"
import Slider, { Handle, SliderTooltip } from "rc-slider"
import { SliderProps } from "rc-slider/lib/Slider"
import "./styles/index.css"

interface SliderInterface extends SliderProps {}

export const handle = (props: any) => {
  const { value, dragging, index, ...restProps } = props
  return (
    <SliderTooltip
      prefixCls="rc-slider-tooltip"
      overlay={`${value}`}
      visible={dragging}
      placement="top"
      key={index}
    >
      <Handle value={value} {...restProps} />
    </SliderTooltip>
  )
}
export const SliderWrap = React.forwardRef<
  React.ComponentClass,
  SliderInterface
>(({ ...props }, ref) => {
  return (
    <>
      <Slider {...props} />
    </>
  )
})
