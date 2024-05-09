import React, { useState, useEffect } from 'react';
import { Link, Navigate } from 'react-router-dom';
import { Meteor } from 'meteor/meteor';
import { Alert, Card, Col, Container, Row } from 'react-bootstrap';
import SimpleSchema from 'simpl-schema';
import SimpleSchema2Bridge from 'uniforms-bridge-simple-schema-2';
import { AutoForm, ErrorsField, SubmitField, TextField } from 'uniforms-bootstrap5';
import { Roles } from 'meteor/alanning:roles';
import { useTracker } from 'meteor/react-meteor-data';
import { ComponentIDs, PageIDs } from '../utilities/ids';

const SignIn = () => {
  const [error, setError] = useState('');
  const [redirect, setRedirect] = useState(false);

  // Reactive user data and roles fetch
  const user = useTracker(() => Meteor.user(), []);
  const userRole = useTracker(() => {
    if (!user) return '';
    return Roles.getRolesForUser(user?._id)[0]; // Ensure roles are available
  }, [user]);

  const schema = new SimpleSchema({
    email: String,
    password: String,
  });
  const bridge = new SimpleSchema2Bridge(schema);

  // Handle Signin submission using Meteor's account mechanism.
  const submit = (doc) => {
    const { email, password } = doc;
    Meteor.loginWithPassword(email, password, (err) => {
      if (err) {
        setError(err.reason);
      } else {
        setRedirect(true);
      }
    });
  };

  // Redirect based on user role
  useEffect(() => {
    if (redirect && user) {
      if (userRole === 'admin' || userRole === 'super admin') {
        window.location.href = '/admin/dashboard'; // Adjust as needed
      } else {
        window.location.href = '/home'; // Adjust as needed
      }
    }
  }, [redirect, user, userRole]);

  // Render the signin form.
  if (redirect) {
    // Already handled in useEffect
    return null;
  }

  return (
    <Container id={PageIDs.signInPage}>
      <Row className="justify-content-center">
        <Col xs={9}>
          <Col className="text-center">
            <h2>Login to your account</h2>
          </Col>
          <AutoForm schema={bridge} onSubmit={data => submit(data)}>
            <Card>
              <Card.Body>
                <TextField id={ComponentIDs.signInFormEmail} name="email" placeholder="E-mail address" />
                <TextField id={ComponentIDs.signInFormPassword} name="password" placeholder="Password" type="password" />
                <ErrorsField />
                <SubmitField id={ComponentIDs.signInFormSubmit} />
              </Card.Body>
            </Card>
          </AutoForm>
          <Alert variant="secondary">
            <Link to="/signup">Click here to Register</Link>
          </Alert>
          {error === '' ? (
            ''
          ) : (
            <Alert variant="danger">
              <Alert.Heading>Login was not successful</Alert.Heading>
              {error}
            </Alert>
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default SignIn;
