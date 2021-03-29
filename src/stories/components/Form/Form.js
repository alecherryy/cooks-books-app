import './styles.scss';

import React from 'react';
import PropTypes from 'prop-types';

import { Button } from '../Button/Button';

/**
 * Component for form element.
 *
 * @component
 * @param {string} modifierClasses Class modifiers of the component.
 * @param {func} handleClick of the component.
 * @param {node} children of the component.
 * @param {string} buttonColor of the component.
 * @return {object} (
 *   <Form modifierClasses={modifierClasses}
 *      buttonColor={buttonColor} />
 *      {children}
 *   </Form>
 * )
 */
export const Form = ({
  modifierClasses,
  handleClick,
  buttonColor,
  children,
}) => {
  return (
    <form className={['form', `${modifierClasses}`].join(' ').trim()}>
      {children}
      <Button modifierClasses={`button--${buttonColor} form__button`}
        isButton={true} text="Login" handleClick={handleClick} />
    </form>
  );
};

Form.propTypes = {
  /**
   * Form's modifier classes
   */
  modifierClasses: PropTypes.string,
  /**
   * Form's handleClick
   */
  handleClick: PropTypes.func,
  /**
   * Form's children
   */
  children: PropTypes.node,
  /**
   * Form's buttonColor
   */
  buttonColor: PropTypes.string,
};

Form.defaultProps = {
  modifierClasses: '',
  handleClick: null,
  children: null,
  buttonColor: 'red',
};
