import styled from 'styled-components';

export const ProductDetailsContainerStyled = styled.div`
  display: flex;
  justify-content: space-between;
  padding-left: 3rem;
  padding-right: 3rem;
`;

export const ProductDetailsStyled = styled.div`
  width: 75%;
`;

export const ProductDetailsHeaderStyled = styled.div`
  width: 100%;
  margin-bottom: 2rem;
`;

export const ProductDetailsHeaderTitleStyled = styled.div`
  margin-bottom: 1rem;
`;

export const ProductDetailsHeaderDataStyled = styled.div`
  padding-top: 1rem;

  & small:nth-child(2) {
    text-transform: capitalize;
  }
`;

export const ProductDetailsBottomContainerStyled = styled.div`
  display: flex;
  margin-bottom: 6.5rem;
`;

export const ProductDetailsInfoStyled = styled.div`
  width: 65%;
  padding-left: 2rem;
  padding-right: 2rem;
`;

export const ProductDetailsInfoImageStyled = styled.div`
  width: 40rem;
  margin-left: auto;
  margin-right: auto;
`;

export const ProductDetailsPriceShippingCartStyled = styled.div`
  width: 35%;
  padding-left: 2rem;
  padding-right: 2rem;
`;

export const ProductDetailsPriceShippingCartRowStyled = styled.div`
  margin-top: 2.4rem;
  padding-top: 2.4rem;
`;

export const ProductDetailsPriceStyled = styled.div`
  & h2 {
    font-weight: 600;
  }
`;

export const ProductDetailsShippingBuyStyled = styled.div`
  margin-bottom: 1rem;
`;

export const ProductDetailsShippingOptionStyled = styled.div`
  margin-top: 1rem;
`;

export const ProductDetailsDescriptionStyled = styled.div`
  padding-left: 2rem;
  padding-right: 2rem;
`;

export const ProductDetailsDescriptionHeaderStyled = styled.div`
  padding-top: 2.5rem;
  padding-bottom: 2.5rem;
  text-align: left;

  & h4 {
    font-weight: 400;
  }
`;

export const ProductDetailsDescriptionBodyStyled = styled.div`
  width: 75%;
  margin-left: auto;
  margin-right: auto;
`;

export const ProductDetailsReviewsStyled = styled.div`
  margin-top: 2rem;
  padding-left: 2rem;
  padding-right: 2rem;
`;

export const ProductDetailsReviewsHeaderStyled = styled.div`
  padding-top: 2.5rem;
  padding-bottom: 2.5rem;
  text-align: left;

  & h4 {
    font-weight: 400;
  }
`;

export const ProductDetailsReviewsBodyStyled = styled.div`
  width: 75%;
  margin-left: auto;
  margin-right: auto;
`;

export const ProductDetailsReviewsAddStyled = styled.div`
  margin-bottom: 2rem;
`;

export const ProductDetailsReviewContentStyled = styled.div`
  margin-top: 2rem;
  margin-bottom: 2rem;
`;
