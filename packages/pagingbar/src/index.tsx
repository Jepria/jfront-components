import React, { useState, useEffect } from "react"
import styled from "styled-components"
import {
  FirstImage,
  PrevImage,
  NextImage,
  LastImage,
  RefreshImage,
} from "@jfront/ui-icons"

const Wrapper = styled.div`
  white-space: nowrap;
`

const Item = styled.button`
  font: 11px arial, tahoma, verdana, helvetica;
  height: 100%;
  padding: 1px 1px;
  margin: 0 1px;
  background-color: transparent;
  background-image: none;
  border: solid 1px transparent;
  &:hover {
    border: solid 1px #99bbe8;
    background: #ddefff;
  }
`

const Label = styled.label`
  display: inline-block;
  height: 22px;
  vertical-align: top;
`

const NumberInput = styled.input.attrs({ type: "number" })`
  width: 60px;
  margin: 0 5px;
`

interface PagingToolBarProps {
  startPageNumber?: number
  pageCount: number
  onChange?: (currentPageNumber: number) => void
}

export const PagingToolBar: React.FC<PagingToolBarProps> = ({
  startPageNumber = 1,
  pageCount,
  onChange,
}) => {
  const [_pageCount, setPageCount] = useState<number>(pageCount)
  const [currentPage, setCurrentPage] = useState<number | undefined>(
    startPageNumber,
  )

  useEffect(() => {
    setPageCount(pageCount)
  }, [pageCount])

  const changeValue = (page?: number) => {
    if (page && page >= 1 && page <= _pageCount && onChange) {
      setCurrentPage(page)
      onChange(page)
    }
  }

  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value)
    setCurrentPage(value ? value : undefined)
  }

  const onKeyPressed = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      if (
        currentPage &&
        currentPage >= 1 &&
        currentPage <= _pageCount &&
        onChange
      ) {
        onChange(currentPage)
      }
    }
  }

  return (
    <Wrapper>
      <Item
        onClick={() => {
          if (currentPage !== 1) changeValue(1)
        }}
      >
        <FirstImage title="Первая" />
      </Item>
      <Item onClick={() => currentPage && changeValue(currentPage - 1)}>
        <PrevImage title="Предыдушая" />
      </Item>
      <Label>
        Стр.{" "}
        <NumberInput
          value={currentPage}
          onChange={onInputChange}
          onKeyUp={onKeyPressed}
          max={_pageCount}
          min={1}
        />{" "}
        из {_pageCount}
      </Label>
      <Item onClick={() => currentPage && changeValue(currentPage + 1)}>
        <NextImage title="Следующая" />
      </Item>
      <Item
        onClick={() => {
          if (currentPage !== _pageCount) changeValue(_pageCount)
        }}
      >
        <LastImage title="Последняя" />
      </Item>
      <Item onClick={() => currentPage && onChange && onChange(currentPage)}>
        <RefreshImage title="Обновить" />
      </Item>
    </Wrapper>
  )
}
