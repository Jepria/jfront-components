import React from "react"
import { render } from "@testing-library/react"
import { Label } from "../src"

test("Checking for the existence of an element Label", () => {
  expect(render(<Label />))
})

test.skip("Matches snapshot ", () => {
  const { asFragment } = render(<Label />)
  expect(asFragment()).toMatchSnapshot()
})

test.skip("Label renders correctly", () => {
  const tools = render(<Label>Text</Label>)
  expect(tools.asFragment()).toMatchSnapshot()
})
