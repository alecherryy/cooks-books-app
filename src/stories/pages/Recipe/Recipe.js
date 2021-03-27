import React from 'react';

import { Constrain } from '../../layouts/Constrain/Constrain';
import { FeaturedImage } from '../../components/FeaturedImage/FeaturedImage';
import { Sidebar } from '../../layouts/Sidebar/Sidebar';

/**
 * Component for Recipe page.
 *
 * @component
 * @param {string} modifierClasses Class modifiers of the component.
 * @return {object} (
 *   <Recipe modifierClasses={modifierClasses} />
 * )
 */

export const Recipe = () => {
  return (
    <div className="recipe">
      <Constrain>
        <FeaturedImage image={recipe.image} alt={recipe.title}
          title={recipe.title} excerpt={recipe.excerpt} />
        <Sidebar asideContent={''} mainContent={''} />
      </Constrain>
    </div>
  );
};
