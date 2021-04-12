import '../../../scss/utility.scss';

import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import { Constrain } from '../../layouts/Constrain/Constrain';
import { Grid } from '../../layouts/Grid/Grid';
import { Link } from 'react-router-dom';
import Artwork from '../../../images/artwork-4.svg';
import { Form } from '../../components/Form/Form';
import { FormItem } from '../../components/FormItem/FormItem';
import fire from '../../../firebase';
import { Button } from '../../components/Button/Button';

/**
 * Component for Login page.
 *
 * @component
 * @return {object} (
 *   <Login />
 * )
 */

export const Login = () => {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const history = useHistory();

  /**
   * Logs in with the current values from email and password,
   *   navigates to home if succesful login.
   */
  const handleLogin = () => {
    fire
      .auth()
      .signInWithEmailAndPassword(email, password)
      .catch((err) => {
        switch (err.code) {
        case 'auth/invalid-email':
        case 'auth/user-disabled':
        case 'auth/user-not-found':
          // TODO: Visually alert user of error
          // alert(err.message);
          break;
        }
      });
    // TODO: Visually alert user of login
    // alert('logging in as user: ' + email);
    history.push(`/`);
  };

  /**
   * Logs the user out of the current firebase auth, navigates to home.
   */
  const handleLogout = () => {
    fire.auth().signOut();
    // TODO: Visually alert user of signout
    // alert('logging out as user: ' + email);
    history.push(`/`);
  };

  return (
    <div className="login">
      <Constrain>
        <Grid numColumns={2} modifierClasses="grid--special">
          <div className="grid__item">
            <img src={Artwork} alt="Decorative Graphics" />
            <h1>
              Welcome <span className="text-normal">back</span>.
            </h1>
            <p>
              Sign into your account to add new recipes, create meal plans and
              much more.
            </p>
            <p>
              Don’t have an account yet? <Link to="signup">Sign up here</Link>.
            </p>
          </div>
          <div className="grid__item">
            <Form
              buttonColor="blue"
              modifierClasses="form--login"
              buttonText="Login"
              handleClick={(e) => {
                e.preventDefault();
                handleLogin();
              }}
            >
              <FormItem
                type="text"
                placeholder="Email"
                handleChange={(e) => setEmail(e.target.value)}
                value={email}
              />
              <FormItem
                type="password"
                placeholder="Password"
                handleChange={(e) => setPassword(e.target.value)}
                value={password}
              />
            </Form>
            <Button
              text="logout"
              isButton={true}
              onClick={(e) => {
                e.preventDefault();
                handleLogout();
              }}
            ></Button>
          </div>
        </Grid>
      </Constrain>
    </div>
  );
};
