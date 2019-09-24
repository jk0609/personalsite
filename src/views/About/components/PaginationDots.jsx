import React from 'react';
import StyledPaginationDotsWrapper from './styledComponents/StyledPaginationDotsWrapper';

export const PaginationDots = props => {
  let pageDots = [];
  for (let i = 0; i < props.length; i++) {
    pageDots.push(
      <svg
        height="10"
        width="10"
        key={i}
        className={props.active === i ? 'active' : ''}
      >
        <circle cx="3" cy="3" r="3" fill="#fff" />
      </svg>
    );
  }

  return (
    <StyledPaginationDotsWrapper>
      {/* <svg height="10" width="10">
        <circle cx="5" cy="5" r="4" stroke="black" stroke-width=".5" fill="red" />
      </svg> */}
      {pageDots}
    </StyledPaginationDotsWrapper>
  );
};

export default PaginationDots;
