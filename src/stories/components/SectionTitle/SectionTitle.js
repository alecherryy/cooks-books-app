import './styles.scss';

import React from 'react';
import PropTypes from 'prop-types';
import { Fragment } from 'react';

/**
 * Component for Section Title element.
 *
 * @component
 * @param {string} modifierClasses Class modifiers of the component.
 * @param {string} url URL of the component.
 * @param {string} imagePath The path to the img for this component.
 * @param {string} title The title of this component.
 * @param {string} paragraph The paragraph in this component.
 * @param {string} svgClass A class to determine which SVG component uses.
 * @return {object} (
 *   <SectionTitle modifierClasses={modifierClasses} url={url}
 *      imagePath={imagePath} title={title}
 *      paragraph={paragraph} svgClass={svgClass} />
 * )
 */
export const SectionTitle = ({
  modifierClasses, url, imagePath, title, paragraph, svgClass,
}) => {
  const classes = ['section-title', `${modifierClasses}`].join(' ').trim();
  const svgClasses = ['section-title__icon', `${svgClass}`].join(' ').trim();

  return (
    <Fragment>
      <div className={classes} url={url}>
        <img className="section-title__img"
          src={imagePath} alt="title-img"></img>
        <div className="section-title__blurb">
          <span
            className={svgClasses}>
          </span>
          <div className="section-title__text">
            <div className="section-title__title">{title}</div>
            <div className="section-title__paragraph">{paragraph}</div>
          </div>
        </div>
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
  url: PropTypes.string,

  /**
   * SectionTitle's path to the image to be used.
   */
  imagePath: PropTypes.string.isRequired,

  /**
   * SectionTitle's title.
   */
  title: PropTypes.string.isRequired,

  /**
   * SectionTitle's paragraph text. Optional.
   */
  paragraph: PropTypes.string,

  /**
   * SectionTitle's SVG class to style the icon.
   */
  svgClass: PropTypes.string,
};

SectionTitle.defaultProps = {
  modifierClasses: '',
  svgClass: 'section-title__icon--placeholder',
};
