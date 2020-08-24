import * as React from "react"
import { CheckBoxListField, ComboBoxField } from "../src"

export default {
  title: "ComboBoxField",
  decorators: [(StoryFn: Function) => <StoryFn />],
}

export const BasicUsage = () => {
  return (
    <>
      <ComboBoxField
        name="testfield"
        onChangeValue={(field, value) => {
          window.alert(value)
        }}
        options={[
          { name: "option1", value: 1 },
          { name: "option2", value: 2 },
          { name: "option3", value: 3 },
          { name: "option4", value: 4 },
        ]}
      />
    </>
  )
}