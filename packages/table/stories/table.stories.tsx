import React from "react"
import { Table } from "../src"

export default {
  title: "Table",
  decorators: [(StoryFn: Function) => <StoryFn />],
}

export const BasicUsage = () => {
  return (
    <Table>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell>header1</Table.HeaderCell>
          <Table.HeaderCell>header2</Table.HeaderCell>
          <Table.HeaderCell>header3</Table.HeaderCell>
          <Table.HeaderCell>header4</Table.HeaderCell>
        </Table.Row>
      </Table.Header>
      <Table.Body>
        <Table.Row>
          <Table.Cell>Row1</Table.Cell>
          <Table.Cell>Row1</Table.Cell>
          <Table.Cell>Row1</Table.Cell>
          <Table.Cell>Row1</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>Row2</Table.Cell>
          <Table.Cell>Row2</Table.Cell>
          <Table.Cell>Row2</Table.Cell>
          <Table.Cell>Row2</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>Row3</Table.Cell>
          <Table.Cell>Row3</Table.Cell>
          <Table.Cell>Row3</Table.Cell>
          <Table.Cell>Row3</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>Row4</Table.Cell>
          <Table.Cell>Row4</Table.Cell>
          <Table.Cell>Row4</Table.Cell>
          <Table.Cell>Row4</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>Row5</Table.Cell>
          <Table.Cell>Row5</Table.Cell>
          <Table.Cell>Row5</Table.Cell>
          <Table.Cell>Row5</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>Row6</Table.Cell>
          <Table.Cell>Row6</Table.Cell>
          <Table.Cell>Row6</Table.Cell>
          <Table.Cell>Row6</Table.Cell>
        </Table.Row>
      </Table.Body>
    </Table>
  )
}
