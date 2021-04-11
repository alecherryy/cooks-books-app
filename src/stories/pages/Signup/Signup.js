import '../../../scss/utility.scss';

import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import { Constrain } from '../../layouts/Constrain/Constrain';
import { Grid } from '../../layouts/Grid/Grid';
import { Link } from 'react-router-dom';
import Artwork from '../../../images/artwork-3.svg';
import { Form } from '../../components/Form/Form';
import { FormItem } from '../../components/FormItem/FormItem';
import fire from '../../../fire';

/**
 * Component for Signup page.
 *
 * @component
 * @return {object} (
 *   <Signup />
 * )
 */

export const Signup = () => {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const history = useHistory();

  /**
   * Signs in with the currently input username and password,
   *   navigates to home on successful login.
   *
   * @throws errors if email si already in use,
   *   or if the email is incorrectly formatted.
   */
  const handleSignup = () => {
    fire
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .catch((err) => {
        switch (err.code) {
        case 'auth/email-already-in-use':
        case 'auth/invalid-email':
          // TODO: Visually alert user of error
          // alert(err.message);
          break;
        }
      });
    // TODO: Visually alert user of account creation
    // alert('creating user: ' + email);
    history.push(`/`);
  };

  // TODO: remove this later if not needed
  // const authListener = () => {
  //   fire.auth().onAuthStateChanged((user) => {
  //     if (user) {
  //       setUser(user);
  //     } else {
  //       setUser('');
  //     }
  //   });
  // };

  return (
    <div className="signup">
      <Constrain>
        <Grid numColumns={2} modifierClasses="grid--special">
          <div className="grid__item">
            <img src={Artwork} alt="Decorative Graphics" />
            <h1>
              Hello, <span className="text-normal">there</span>.
            </h1>
            <p>
              Signup into your account to add new recipes, create meal plans and
              much more.
            </p>
            <p>
              Don’t have an account yet? <Link to="login">Login here</Link>.
            </p>
          </div>
          <div className="grid__item">
            <Form
              buttonColor="red"
              modifierClasses="form--login"
              buttonText="Create account"
              handleClick={(e) => {
                e.preventDefault();
                handleSignup();
              }}
            >
              <FormItem type="text" placeholder="Full Name" />
              <FormItem
                type="email"
                placeholder="Email"
                handleChange={(e) => setEmail(e.target.value)}
                value={email}
              />
              <FormItem type="text" placeholder="Username" />
              <FormItem
                type="password"
                placeholder="Password"
                handleChange={(e) => setPassword(e.target.value)}
                value={password}
              />
              <FormItem
                type="select"
                options={['Who you are', 'Chef', 'Foodie']}
              />
            </Form>
          </div>
        </Grid>
      </Constrain>
    </div>
  );
};
