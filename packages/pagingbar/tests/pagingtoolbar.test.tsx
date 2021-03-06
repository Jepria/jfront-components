import React from "react"
import { fireEvent, render, screen } from "@testing-library/react"
import { PagingToolBar } from "../src"

test("Checking for the existence of an element PagingToolBar", () => {
  render(
    <PagingToolBar
      currentPage={1}
      pageCount={2}
      onChange={() => {}}
      onRefresh={() => {}}
    />,
  )
})

test.skip("Matches snapshot ", () => {
  const { asFragment } = render(
    <PagingToolBar
      currentPage={1}
      pageCount={2}
      onChange={() => {}}
      onRefresh={() => {}}
    />,
  )
  expect(asFragment()).toMatchSnapshot()
})

test("Enter values ​​in a string field", () => {
  let itemSelection
  render(
    <PagingToolBar
      onChange={(currentPageNumber) => {
        itemSelection = currentPageNumber
      }}
      pageCount={6}
      currentPage={1}
      onRefresh={() => {}}
    />,
  )
  fireEvent.click(screen.getAllByRole("button")[2])
  expect(itemSelection).toEqual(2)
})
