import styled from "styled-components"

export interface StyledAreaProps {
  error?: boolean
  focused?: boolean
}

export interface StyledTextAreaProps {
  resize?: string
}

export const StyledDiv = styled.div<StyledAreaProps>`
  display: -webkit-inline-box;
  display: -ms-inline-flexbox;
  display: inline-flex;
  -webkit-box-flex: 1;
  -ms-flex-positive: 1;
  margin: 0;
  padding: 0;
  min-width: 150px;
  white-space: nowrap;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  text-align: left;
  ${(props) =>
    props.focused
      ? `box-shadow: 0 0 5px #99bbe8;
       border: 1px solid #99bbe8;`
      : "border: 1px solid #ccc; border-top: 1px solid #999;"};
  ${(props) =>
    props.error
      ? props.focused
        ? `box-shadow: 0 0 5px red;
      border: 1px solid red;`
        : "border: 1px solid red;"
      : ""};
`

export const StyledTextArea = styled.textarea<StyledTextAreaProps>`
  display: -webkit-inline-box;
  display: -ms-inline-flexbox;
  display: inline-flex;
  -webkit-box-flex: 1;
  -ms-flex-positive: 1;
  flex-grow: 1;
  min-width: 0px;
  margin: 0;
  padding: 0;
  padding-left: 3px;
  font-family: tahoma, arial, helvetica, sans-serif;
  font-size: 12px;
  border: 0;
  width: 250px;
  height: 100px;
  box-sizing: border-box;
  &:focus {
    outline: none;
  }
  ${(props) =>
    props.resize !== undefined
      ? `resize:` + props.resize + `;`
      : `resize: none`};
`
