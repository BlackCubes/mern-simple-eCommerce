import styled from 'styled-components';

export const RatingsStyled = styled.div`
  display: flex;
  justify-content: space-evenly;

  &.ratings-static {
    justify-content: left;
  }
`;

export const RatingIconStyled = styled.div`
  cursor: ${({ cursortype }) => cursortype || 'default'};
`;
