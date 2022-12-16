import React from 'react';
import styled from 'styled-components';
import '../../styles/variables.scss';

interface PaginationProps {
  searchParams: URLSearchParams;
  setSearchParams: any;
}

function Pagination({ searchParams, setSearchParams }: PaginationProps) {
  const movePage = (pageNum: number) => {
    searchParams.set('offset', String((pageNum - 1) * 5));
    setSearchParams(searchParams);
  };

  return (
    <PaginationContainer>
      <button type="button" onClick={() => movePage(1)}>
        1
      </button>
      <button type="button" onClick={() => movePage(2)}>
        2
      </button>
      <button type="button" onClick={() => movePage(3)}>
        3
      </button>
      <button type="button" onClick={() => movePage(4)}>
        4
      </button>
    </PaginationContainer>
  );
}

export default Pagination;

const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 180px;

  button {
    margin-inline: 10px;
    cursor: pointer;
    border: 1px solid white;
    background-color: white;
    color: #4444;

    &:hover {
      color: #000;
    }
  }
`;
