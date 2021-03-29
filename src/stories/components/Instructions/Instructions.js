import './styles.scss';

import React from 'react';
import PropTypes from 'prop-types';

/**
 * Component for Section Title element.
 *
 * @component
 * @param {string} modifierClasses Class modifiers of the component.
 * @param {string} steps of the component.
 * @return {object} (
 *   <Instructions steps={steps} />
 * )
 */
export const Instructions = ({ steps }) => {
  return (
    <div className="instructions">
      <h3 className="instructions__title">Instructions</h3>
      <ol className="instructions__steps">
        {steps.map((s) => {
          return <li key={s.number} className>{s.step}</li>;
        })}
      </ol>
    </div>
  );
};

Instructions.propTypes = {
  /**
  * Instructions's modifier classes.
  */
  steps: PropTypes.array,
};

Instructions.defaultProps = {
  steps: [],
};
