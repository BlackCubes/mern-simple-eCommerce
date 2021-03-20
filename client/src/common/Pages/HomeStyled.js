import styled from 'styled-components';

export const HomePageSectionsContainerStyled = styled.div`
  position: relative;
  width: 100%;
  margin-top: -6rem;

  &::after {
    content: '';
    position: absolute;
    width: 100%;
    height: 1rem;
    top: -1rem;
    left: 0;
    background-color: ${(props) => props.theme.colors.black_gray};
    z-index: 1;
  }
`;

export const HomeSectionStyled = styled.section`
  width: 100%;
  min-height: calc(100vh - 11rem);
  background-color: ${(props) => props.theme.colors.black_gray};
  text-align: center;
`;

export const HomeImageStyled = styled.div`
  width: 70rem;
  margin-left: auto;
  margin-right: auto;
  padding-top: 3rem;
`;

export const HomeContentStyled = styled.div`
  width: 100rem;
  margin-top: 10rem;
  margin-left: auto;
  margin-right: auto;

  & h1 {
    letter-spacing: 0.3rem;
  }
`;

export const FakeStoreSectionStyled = styled.section`
  position: relative;
  width: 100%;
  min-height: calc(100vh - 11rem);
  background-color: ${(props) => props.theme.colors.vivid_pink};
`;

export const FakeStoreContainerStyled = styled.div`
  width: 117rem;
  margin-left: auto;
  margin-right: auto;
  padding: 10.5rem 0;
`;

export const FakeStoreSplitHolderStyled = styled.div`
  float: none;
`;

export const FakeStoreSplitColorStyled = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: ${(props) => props.theme.colors.white};
  top: 0;
  left: 40.5rem;
  transform: translateX(-104%);
`;

export const FakeStoreImageStyled = styled.div`
  position: relative;
  float: left;
  width: 55rem;
`;

export const FakeStoreContent = styled.div`
  float: right;
  width: 60rem;
  margin-top: 2rem;
  padding-left: 10rem;
  padding-right: 10rem;
  text-align: center;

  & h2 {
    font-weight: 300;
    letter-spacing: 0.3rem;
    line-height: 2;
  }
`;

export const CategorySectionStyled = styled.section`
  width: 100%;
  min-height: calc(100vh - 11rem);
  background-color: ${(props) => props.theme.colors.white};
`;

export const CategoryCardContainerStyled = styled.div`
  display: flex;
  justify-content: space-around;
  width: 117rem;
  margin-left: auto;
  margin-right: auto;
  padding: 10.5rem 0;
`;

export const CategoryCardStyled = styled.div`
  width: 30rem;
  text-align: center;
`;
