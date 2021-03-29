import '../../../scss/utility.scss';

import React from 'react';

import { Constrain } from '../../layouts/Constrain/Constrain';
import { Grid } from '../../layouts/Grid/Grid';
import { Link } from 'react-router-dom';
import Artwork from '../../../images/artwork-3.svg';
import { Form } from '../../components/Form/Form';
import { FormItem } from '../../components/FormItem/FormItem';

/**
 * Component for Signup page.
 *
 * @component
 * @return {object} (
 *   <Signup />
 * )
 */

export const Signup = () => {
  return (
    <div className="signup">
      <Constrain>
        <Grid numColumns={2} modifierClasses="grid--special">
          <div className="grid__item">
            <img src={Artwork}
              alt="Decorative Graphics" />
            <h1>Hello, <span className="text-normal">there</span>.</h1>
            <p>Signup into your account to add new recipes,
              create meal plans and much more.</p>
            <p>Don’t have an account yet? <Link to="login">
              Login here</Link>.</p>
          </div>
          <div className="grid__item">
            <Form buttonColor="red" modifierClasses="form--login"
              buttonText="Create account">
              <FormItem type="text" placeholder="Full Name" />
              <FormItem type="emaill" placeholder="Email" />
              <FormItem type="text" placeholder="Username" />
              <FormItem type="password" placeholder="Password" />
              <FormItem type="select" options={[
                'Who you are', 'Chef', 'Foodie',
              ]} />
            </Form>
          </div>
        </Grid>
      </Constrain>
    </div>
  );
};
