# Self-Image Experiment
[![Build Status](https://travis-ci.com/neu-self-image-experiments/sie-firebase.svg?branch=master)](https://github.com/neu-self-image-experiments/sie-firebase)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

1. __Owner__: [@alecherryy](https://github.com/alecherryy)
2. __Contributors__: [@looper-m](https://github.com/looper-m), [@rileyhgrant](https://github.com/rileyhgrant)

The repo contains development work for the CooksBooks web-based application. This product is implemented using a combination of languages and development tools such as: React, Node.js, public APIs, MongoDB, Storybook and Jest.

## Introduction
CooksBooks is a web application that aims to bring both culinary creators and food enthusiasts together in a more level playing field than currently exists. By giving users the freedom of registering as either a chef or a foodie, it allows everyone to enjoy good recipes and food, while providing confidence in the robustness of recipes and reviews on the platform. Overall, CooksBooks provides a space for everyday individuals to browse recipes and be a part of an ongoing discussion, in contrast to the existing spaces of food critic reviews and recipe blogs.

Additional information can be found on our [Wiki](https://github.com/alecherryy/cooks-books-app/wiki) pages.

## Installation
To get started, clone this repo to your preferred folder, `cd` into the project and run
```
npm install
```
to install all dependecies. To preview the application and spin up a new server, run
```
npm start
```
When creating new front-end components and templates, run
```
npm run storybook
```
to initiate Storybook. To see your work, go to [http://localhost:6006](http://localhost:6006); here, you will find a preview of the entire interface. Storybook allows you to view and test each component, parameter and responsive behavior. To read more about it, you can check out Storybook's documentation [here](https://storybook.js.org/docs/react/get-started/introduction).

After running the commands above, you will be ready to start working.

## Folder Structure
All components can be found in the `src/stories/` folder; components are organized in three groups: Components, Layouts and Pages. When working on a new element, make sure to select the correct group within which your new component should live. Each component should be organized in the following manner:
```
src/
    stories/
        [components, layouts, pages]/
            ComponentName/
                ComponentName.js
                [ComponentName.test.js]
                ComponentName.stories.js
                styles.scss
```

## Components and Styles
When creating a new component, make sure to include `JSDOC` to outline data types, parameters and return objects or values. Each comment should abide to the following structure:
```
/**
 * Component for element name.
 *
 * @component
 * @param {type} param explanation goes here.
 * @param {type param explanation goes here.
 * @return {type} description goes here.
 *
 */
```
Below, you can find a practical example of a new React component, which includes syntax, props, default values, etc. You can use the code below as a starting point:
```
/**
 * Component for button element.
 *
 * @component
 * @param {string} modifierClasses Class modifiers of the component.
 * @param {string} url URL of the component.
 * @param {string} text Text of the component.
 * @param {boolean} isButton Boolean in case markup should be <button>.
 * @param {func} handleClick click function when component renders as a button.
 * @return {object} (
 *   <Button modifierClasses={modifierClasses} url={url} text={text} />
 * )
 */
export const Button = ({ modifierClasses, url, text, isButton }) => {
  const classes = ['button', `${modifierClasses}`].join(' ').trim();

  return (
    <Fragment>
      {isButton ?
        <button role="button" className={classes} onClick={handleClick}>{text}</button> :
        <a href={url} className={classes}>{text}</a>
      }
    </Fragment>
  );
};

Button.propTypes = {
  /**
   * Button's modifier classes
   */
  modifierClasses: PropTypes.string,
  /**
   * Button's url
   */
  url: PropTypes.string,
  /**
   * Button's text
   */
  text: PropTypes.string.isRequired,
  /**
     * Button's isButton
     */
  isButton: PropTypes.bool,
  /**
     * Button's handleClick
     */
  handleClick: PropTypes.func,
};

Button.defaultProps = {
  modifierClasses: '',
  text: 'Button',
  url: '#',
  isButton: false,
  handleClick: null,
};
```
Each component shall have its own Sass file which includes default styles and additional style for all component's variants. When overriding default styling, you can use "_modifier classes_" to apply additional styles to your component. Class name should follow the BEM Naming system, which you can read more about [here](http://getbem.com/naming/). According to BEM, each class name should be as follow:

1. Default component class: `.component`
2. Component variant class: `.component--variant`

Child elements of the component should use the following class naming convention: `.component__element`. You can use the practical example below for reference.

__Default Card__
```
<div class="card">
    <h3 class="card__title">{ Title goes here }</h3>
    <p class="card__content">{ Content goes here}</p>
</div>
```
__White Card__
```
<div class="card card--white">
    <h3 class="card__title">{ Title goes here }</h3>
    <p class="card__content">{ Content goes here}</p>
</div>
```
### Styling Override
If you need to override styling of child elements within a component variant, you can do so by using nested styles in Sass. To find out more about how Sass works, you can read the documentation found [here](https://sass-lang.com/documentation). Below is a practical example based on the code snippets above:
```
// default styling
.card {
    background-color: blue;
}

.card__title {
    font-size: 20px;
}

// styling override
.card--white {
    backgroundc-color: white;

    .card__title {
        font-size: 36px;
    }
}
```
## Branching and Merging
When working on a new feature, checkout `main` and run
```
git pull
```
to make sure you have most up-to-date code base. After that, you create a new branch by running
```
git checkout -b feature/issue-#-short-label
```
The `#` should match the issue number of the GitHub project you are currently working on, for example, `issue-4-create-card-component`; this will let your teammates know which feature you're working on and review your work against the AC written on the ticket.

When your work is ready, you can merge your branch into `test`, wait for the Heroku build to finish and test your work on the server. After all checks have passed and your work has been tested on the hosted environment, open a PR into `main` and select __<u>at least one teammate</u>__ to review your work. If you run into conflicts, resolve them before passing your work onto someone else for review. Once your PR has been approved, it can be merge into the `main` branch and be integrated into the code base.

Reviewers are expected to actually take time to inspect the reviewee's work and flag any potential issue and/or oversight included in the branch; reviewees are expected to aknowledge any feedback and make adjustments accordingly.

Whenever a PR is approved, make sure you delete your branch to keep the repo clean and organized.

## Testing
[Jest](https://jestjs.io/docs/en/getting-started) along with [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/) will be used for unit testing components. Tests are located in the same folder of the corresponding component.

Test files end with `.test.js`.

```
src/
    App.js
    App.test.js
```
To run tests, use:
```
npm test
```
By default, tests that were changed since the last commit will be ran. Running specific tests can be achieved by writing the path to the test or by pattern matching.
```
npm test -- App.test.js
npm test -- src/App.test.js
```
Global setup for tests can be found in:
```
src/setupTests.js
```
## USERSand API Connection
To establish communication with the USERSor public API, locate the `.env-sample` file in the project root, make a copy of it and rename it `.env`. Inside the file, you can assign values to the environemnt globals like so:
```
DB_URL=https://www.mongodb.com/
DB_COLLECTION_NAME=Collection_Name
API_KEY=1234
```
and call those values in your `config` file, like so:
```
const config = {
  dbURL: process.env.DB_URL,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  dbCollection: process.env.DB_COLLECTION_NAME,
  apiKey: process.env.API_KEY,
};
```
Now you can run
```
npm start
```
or
```
npm run storybook
```
to get work with the USERSand/or API.
