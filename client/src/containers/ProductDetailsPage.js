import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';

import { Button, Image } from '../common';

import {
  ProductDetailsContainerStyled,
  ProductDetailsStyled,
  ProductDetailsHeaderStyled,
  ProductDetailsHeaderTitleStyled,
  ProductDetailsHeaderDataStyled,
  ProductDetailsBottomContainerStyled,
  ProductDetailsInfoStyled,
  ProductDetailsInfoImageStyled,
  ProductDetailsPriceShippingCartStyled,
  ProductDetailsPriceShippingCartRowStyled,
  ProductDetailsPriceStyled,
  ProductDetailsShippingBuyStyled,
  ProductDetailsShippingOptionStyled,
  ProductDetailsDescriptionStyled,
  ProductDetailsDescriptionHeaderStyled,
  ProductDetailsDescriptionBodyStyled,
  ProductDetailsReviewsStyled,
  ProductDetailsReviewsHeaderStyled,
  ProductDetailsReviewsBodyStyled,
  ProductDetailsReviewsAddStyled,
  ProductDetailsReviewContentStyled,
} from '../common/Pages';

import {
  HeadingQuaternary,
  HeadingSecondary,
  Paragraph,
  Small,
} from '../common/Typography';

import { CategorySidebar, Modal } from '../Components';

import { useCartContext } from '../context/CartContext';
import { useProductContext } from '../context/ProductContext';

import { daysFromNow, dateTimeFormat } from '../utils';

const reviewFormFields = [
  {
    type: 'text',
    name: 'firstname',
    id: 'firstname',
    placeholder: 'First Name',
    message: "Let's go!",
    addlstyle: {
      width: '50%',
      flex: '1 22rem',
      float: 'left',
      padding: '0 0.75rem',
    },
  },
  {
    type: 'text',
    name: 'lastname',
    id: 'lastname',
    placeholder: 'Last Name',
    message: "Let's go!",
    addlstyle: {
      width: '50%',
      flex: '1 22rem',
      float: 'left',
      padding: '0 0.75rem',
    },
  },
  {
    type: 'textarea',
    name: 'review',
    id: 'review',
    placeholder: 'Make A Review',
    minlength: '20',
    maxlength: '280',
    message: "Let's go!",
    addlstyle: {
      width: '100%',
      float: 'left',
      margin: '0 0 1rem',
      padding: '0 0.75rem',
    },
  },
];

const ProductDetailsPage = ({ FormContainerComponent }) => {
  const [reviewModalToggle, setReviewModalToggle] = useState(false);
  const { id } = useParams();
  const { addProduct } = useCartContext();
  const {
    getProduct,
    product,
    reviews,
    getReviews,
    postReview,
  } = useProductContext();

  useEffect(() => {
    if (id) {
      getProduct(id);
      getReviews(id);
    }
  }, [id]);

  const onFormModal = (setToggle) => (e) => {
    e.preventDefault();
    setToggle((bool) => !bool);
  };

  const onSubmissionModal = (getFunction, setToggle) => (newValues) => {
    getFunction(newValues);
    setToggle(false);
  };

  return (
    <ProductDetailsContainerStyled>
      <ProductDetailsStyled>
        {!product ? (
          <HeadingQuaternary>Loading...</HeadingQuaternary>
        ) : (
          <>
            <ProductDetailsHeaderStyled>
              <ProductDetailsHeaderTitleStyled>
                <HeadingQuaternary>{product.title}</HeadingQuaternary>
              </ProductDetailsHeaderTitleStyled>

              <ProductDetailsHeaderDataStyled>
                <Small tagType="strong">Type:</Small>
                &nbsp;
                <Small>{product.category}</Small>
              </ProductDetailsHeaderDataStyled>
            </ProductDetailsHeaderStyled>

            <ProductDetailsBottomContainerStyled>
              <ProductDetailsInfoStyled>
                <ProductDetailsInfoImageStyled>
                  <Image rest={{ src: product.image, alt: product.title }} />
                </ProductDetailsInfoImageStyled>
              </ProductDetailsInfoStyled>

              <ProductDetailsPriceShippingCartStyled>
                <ProductDetailsPriceStyled>
                  <HeadingSecondary>{`$${product.price}`}</HeadingSecondary>
                </ProductDetailsPriceStyled>

                <ProductDetailsPriceShippingCartRowStyled>
                  <ProductDetailsShippingBuyStyled>
                    <Small tagType="strong" colorType="lime_green">
                      Get it in 3 days
                    </Small>
                  </ProductDetailsShippingBuyStyled>

                  <ProductDetailsShippingOptionStyled>
                    <Small tagType="strong">
                      {product.price >= 50
                        ? 'FREE Shipping:'
                        : '3-DAY Shipping:'}
                    </Small>
                    &nbsp;
                    <Small>
                      Get it by&nbsp;
                      {dateTimeFormat(
                        'en-US',
                        { weekday: 'short' },
                        daysFromNow(3)
                      )}
                    </Small>
                  </ProductDetailsShippingOptionStyled>
                </ProductDetailsPriceShippingCartRowStyled>

                <ProductDetailsPriceShippingCartRowStyled>
                  <div className="product-details__cart-add">
                    <Button
                      rest={{
                        type: 'button',
                        onClick: () => addProduct(product),
                      }}
                    >
                      Add to Cart
                    </Button>
                  </div>
                </ProductDetailsPriceShippingCartRowStyled>
              </ProductDetailsPriceShippingCartStyled>
            </ProductDetailsBottomContainerStyled>

            <ProductDetailsDescriptionStyled>
              <ProductDetailsDescriptionHeaderStyled>
                <HeadingQuaternary>Overview</HeadingQuaternary>
              </ProductDetailsDescriptionHeaderStyled>

              <ProductDetailsDescriptionBodyStyled>
                <Paragraph>{product.description}</Paragraph>
              </ProductDetailsDescriptionBodyStyled>
            </ProductDetailsDescriptionStyled>

            <ProductDetailsReviewsStyled>
              <ProductDetailsReviewsHeaderStyled>
                <HeadingQuaternary>Reviews</HeadingQuaternary>
              </ProductDetailsReviewsHeaderStyled>

              <ProductDetailsReviewsBodyStyled>
                <ProductDetailsReviewsAddStyled>
                  <Button
                    rest={{
                      type: 'button',
                      onClick: (e) => onFormModal(setReviewModalToggle)(e),
                      colortype: 'transparent',
                      hovercolortype: 'moderate_blue_dark',
                      nonbtn: true,
                    }}
                  >
                    Add a review
                  </Button>
                </ProductDetailsReviewsAddStyled>

                <ProductDetailsReviewContentStyled>
                  {!reviews ? (
                    <Paragraph>No reviews</Paragraph>
                  ) : !reviews.length ? (
                    <Paragraph>No reviews</Paragraph>
                  ) : (
                    reviews.map((review) => (
                      <div key={review._id}>
                        <Paragraph>{review.userfullname}</Paragraph>
                        <Paragraph>{review.review}</Paragraph>
                        <Paragraph>{review.rating}</Paragraph>
                      </div>
                    ))
                  )}
                </ProductDetailsReviewContentStyled>
              </ProductDetailsReviewsBodyStyled>
            </ProductDetailsReviewsStyled>

            <Modal
              header="Enter Review"
              modalToggle={reviewModalToggle}
              handleModal={onFormModal(setReviewModalToggle)}
            >
              <FormContainerComponent
                onSubmit={onSubmissionModal(postReview, setReviewModalToggle)}
                formFields={reviewFormFields}
                hasReviewRating
              />
            </Modal>
          </>
        )}
      </ProductDetailsStyled>

      <CategorySidebar />
    </ProductDetailsContainerStyled>
  );
};

ProductDetailsPage.propTypes = {
  FormContainerComponent: PropTypes.elementType.isRequired,
};

export default ProductDetailsPage;
