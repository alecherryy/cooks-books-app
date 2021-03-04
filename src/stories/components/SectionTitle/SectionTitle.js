import './styles.scss';

import React from 'react';
import PropTypes from 'prop-types';
import { Fragment } from 'react';

/**
 * Component for section titles
 *
 * @component
 * @param {string} modifierClasses CLass modifiers of the component.
 * @param {string} url URL of the component.
 * @param {string} imagePath The path to the img for this component.
 * @param {string} title The title of this component.
 * @param {string} svgPath The path to the svg for this component.
 * @param {string} paragraph The paragraph in this component.
 * @return {object} (
 *   <SectionTitle modifierClasses={modifierClasses} url={url}
 *      imagePath={imagePath} title={title}
 *      svgPath={svgPath} paragraph={paragraph} />
 * )
 */
export const SectionTitle = ({ modifierClasses, url, imagePath, title,
  svgPath, paragraph }) => {
  const classes = ['section-title', `${modifierClasses}`].join(' ').trim();

  return (
    <Fragment>
      <div className={classes}>
        {/* add img here */}
        <h3>{title}</h3>
        <p>{paragraph}</p>
        {/* add svg here */}
      </div>
    </Fragment>
  );
};

SectionTitle.propTypes = {
  /**
  * SectionTitle's modifier classes.
  */
  modifierClasses: PropTypes.string,

  /**
   * SectionTitle's url.
   */
  url: PropTyptes.string,

  /**
   * SectionTitle's path to the image to be used.
   */
  imagePath: PropTypes.string.isRequired,

  /**
   * SectionTitle's title.
   */
  title: PropTypes.string.isRequired,

  /**
   * SectionTitle's path to the SVG to be used.
   */
  svgPath: PropTypes.string.isRequired,

  /**
   * SectionTitle's paragraph text. Optional.
   */
  paragraph: PropTypes.string,
};

SectionTitle.defaultProps = {
  modifierClasses: '',
};
