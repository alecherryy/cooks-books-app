import '../../../scss/utility.scss';

import React, { useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';

import { Constrain } from '../../layouts/Constrain/Constrain';
import { Grid } from '../../layouts/Grid/Grid';
import { Link } from 'react-router-dom';
import Artwork from '../../../images/artwork-3.svg';
import { Form } from '../../components/Form/Form';
import { FormItem } from '../../components/FormItem/FormItem';
import { AuthContext } from '../../../Auth';
import { USERS } from '../../../services/user-service';

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
  const [username, setUsername] = useState(null);
  const [fullName, setFullName] = useState(null);
  const [userType, setUserType] = useState(null);
  // const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const { signup } = useContext(AuthContext);
  const history = useHistory();

  const handleSignup = () => {
    // setError('');
    setLoading(true);
    signup(email, password)
      .then((result) => {
        return USERS.setProfile(result.user.uid, {
          fullName,
          username,
          userType,
        });
      })
      .then(() => {
        setLoading(false);
        history.push(`/`);
      })
      .catch((error) => {
        // setError(error);
      });
  };

  return (
    <div className="signup">
      <Constrain>
        <Grid numColumns={2} modifierClasses="grid--special">
          <div className="grid__item">
            <img src={Artwork} alt="Decorative Graphics"/>
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
              buttonDisabled={loading}
              handleClick={(e) => {
                e.preventDefault();
                handleSignup();
              }}
            >
              <FormItem
                type="text"
                placeholder="Full Name"
                handleChange={(e) => setFullName(e.target.value)}
                value={fullName}
              />
              <FormItem
                type="email"
                placeholder="Email"
                handleChange={(e) => setEmail(e.target.value)}
                value={email}
              />
              <FormItem
                type="text"
                placeholder="Username"
                handleChange={(e) => setUsername(e.target.value)}
                value={username}
              />
              <FormItem
                type="password"
                placeholder="Password"
                handleChange={(e) => setPassword(e.target.value)}
                value={password}
              />
              <FormItem
                type="select"
                options={['Who you are', 'Chef', 'Foodie']}
                handleChange={(e) => setUserType(e.target.value)}
                value={userType}
              />
            </Form>
          </div>
        </Grid>
      </Constrain>
    </div>
  );
};
