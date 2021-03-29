import '../../../scss/utility.scss';

import React from 'react';

import { Constrain } from '../../layouts/Constrain/Constrain';
import { Grid } from '../../layouts/Grid/Grid';
import { Link } from 'react-router-dom';
import Artwork from '../../../images/artwork-4.svg';
import { Form } from '../../components/Form/Form';
import { FormItem } from '../../components/FormItem/FormItem';

/**
 * Component for Login page.
 *
 * @component
 * @return {object} (
 *   <Login />
 * )
 */

export const Login = () => {
  return (
    <div className="login">
      <Constrain>
        <Grid numColumns={2}>
          <div className="grid__item">
            <img src={Artwork}
              alt="Decorative Graphics" />
            <h1>Welcome <span className="text-normal">back</span>.</h1>
            <p>Login into your account to add new recipes,
              create meal plans and much more.</p>
            <p>Don’t have an account yet? <Link to="signup">
              Sign up here</Link>.</p>
          </div>
          <div className="grid__item">
            <Form buttonColor="red" modifierClasses="form--login">
              <FormItem type="text" placeholder="Username" />
              <FormItem type="password" placeholder="Password" />
            </Form>
          </div>
        </Grid>
      </Constrain>
    </div>
  );
};
