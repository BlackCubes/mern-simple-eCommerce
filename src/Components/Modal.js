import React from 'react';
import PropTypes from 'prop-types';

import {
  Button,
  ModalStyled,
  ModalContainerStyled,
  ModalHeaderStyled,
  ModalBodyStyled,
  ModalButtonStyled,
} from '../common';

import { HeadingQuaternary } from '../common/Typography';

const Modal = ({ children, header, modalToggle, handleModal }) => (
  <ModalContainerStyled modaltoggle={modalToggle}>
    <ModalStyled>
      <ModalHeaderStyled>
        <HeadingQuaternary>{header}</HeadingQuaternary>
      </ModalHeaderStyled>

      <ModalBodyStyled>{children}</ModalBodyStyled>

      <ModalButtonStyled>
        <Button
          rest={{
            type: 'button',
            onClick: (e) => handleModal(e),
            colortype: 'transparent',
            hovercolortype: 'moderate_blue_dark',
            nonbtn: true,
          }}
        >
          x
        </Button>
      </ModalButtonStyled>
    </ModalStyled>
  </ModalContainerStyled>
);

Modal.propTypes = {
  children: PropTypes.node.isRequired,
  header: PropTypes.string.isRequired,
  modalToggle: PropTypes.bool.isRequired,
  handleModal: PropTypes.func.isRequired,
};

export default Modal;
