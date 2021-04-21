import '../../../scss/utility.scss';

import React, { useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';

import { Constrain } from '../../layouts/Constrain/Constrain';
import { Grid } from '../../layouts/Grid/Grid';
import { Link } from 'react-router-dom';
import Artwork from '../../../images/artwork-4.svg';
import { Form } from '../../components/Form/Form';
import { FormItem } from '../../components/FormItem/FormItem';
import { AuthContext } from '../../components/AuthProvider/AuthProvider';

/**
 * Component for Login page.
 *
 * @component
 * @return {object} (
 *   <Login />
 * )
 */

export const Login = () => {
  const { login } = useContext(AuthContext);
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  // const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  const handleLogin = () => {
    // setError('');
    setLoading(true);
    login(email, password)
      .then(() => {
        setLoading(false);
        history.push('/account/information');
      })
      .catch((error) => {
        // setError(error);
      });
  };

  return (
    <div className="login">
      <Constrain>
        <Grid numColumns={2} modifierClasses="grid--special">
          <div className="grid__item">
            <img src={Artwork} alt="Decorative Graphics"/>
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
              buttonDisabled={loading}
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
          </div>
        </Grid>
      </Constrain>
    </div>
  );
};
