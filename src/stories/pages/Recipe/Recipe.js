import React from 'react';

import { Constrain } from '../../layouts/Constrain/Constrain';
import { FeaturedImage } from '../../components/FeaturedImage/FeaturedImage';
import { Sidebar } from '../../layouts/Sidebar/Sidebar';
import { StickyContent } from '../../layouts/StickyContent/StickyContent';
import { Fragment } from 'react';

/**
 * Component for Recipe page.
 *
 * @component
 * @return {object} (
 *   <Recipe />
 * )
 */

export const Recipe = () => {
  return (
    <div className="recipe">
      <Constrain>
        <FeaturedImage />
        <Sidebar asideContent={
          <StickyContent>
            <h4>Sticky Content</h4>
            <p>Lorem ipsum dolor sit amet, cum justo repudiandae ei.
              Ius laoreet nominavi dissentias te, te nobis civibus ius.
              Qui cibo assum accusam ei. Veritus splendide quo ut. Id mel
              offendit volutpat, qui mutat volutpat eu.</p>
          </StickyContent>
        } mainContent={<Content />} />
      </Constrain>
    </div>
  );
};

const Content = () => {
  return (
    <Fragment>
      <p>Lorem ipsum dolor sit amet, cum justo repudiandae ei.
        Ius laoreet nominavi dissentias te, te nobis civibus ius.
        Qui cibo assum accusam ei. Veritus splendide quo ut. Id mel
        offendit volutpat, qui mutat volutpat eu.</p>
      <p>Lorem ipsum dolor sit amet, cum justo repudiandae ei.
        Ius laoreet nominavi dissentias te, te nobis civibus ius.
        Qui cibo assum accusam ei. Veritus splendide quo ut. Id mel
        offendit volutpat, qui mutat volutpat eu.</p>
      <p>Lorem ipsum dolor sit amet, cum justo repudiandae ei.
        Ius laoreet nominavi dissentias te, te nobis civibus ius.
        Qui cibo assum accusam ei. Veritus splendide quo ut. Id mel
        offendit volutpat, qui mutat volutpat eu.</p>
      <p>Lorem ipsum dolor sit amet, cum justo repudiandae ei.
        Ius laoreet nominavi dissentias te, te nobis civibus ius.
        Qui cibo assum accusam ei. Veritus splendide quo ut. Id mel
        offendit volutpat, qui mutat volutpat eu.</p>
      <p>Lorem ipsum dolor sit amet, cum justo repudiandae ei.
        Ius laoreet nominavi dissentias te, te nobis civibus ius.
        Qui cibo assum accusam ei. Veritus splendide quo ut. Id mel
        offendit volutpat, qui mutat volutpat eu.</p>
      <p>Lorem ipsum dolor sit amet, cum justo repudiandae ei.
        Ius laoreet nominavi dissentias te, te nobis civibus ius.
        Qui cibo assum accusam ei. Veritus splendide quo ut. Id mel
        offendit volutpat, qui mutat volutpat eu.</p>
      <p>Lorem ipsum dolor sit amet, cum justo repudiandae ei.
        Ius laoreet nominavi dissentias te, te nobis civibus ius.
        Qui cibo assum accusam ei. Veritus splendide quo ut. Id mel
        offendit volutpat, qui mutat volutpat eu.</p>
      <p>Lorem ipsum dolor sit amet, cum justo repudiandae ei.
        Ius laoreet nominavi dissentias te, te nobis civibus ius.
        Qui cibo assum accusam ei. Veritus splendide quo ut. Id mel
        offendit volutpat, qui mutat volutpat eu.</p>
    </Fragment>
  );
};
