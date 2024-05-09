import React from 'react';
import swal from 'sweetalert';
import { Card, Col, Container, Row, Button } from 'react-bootstrap';
import { AutoForm, ErrorsField, LongTextField, SubmitField, TextField } from 'uniforms-bootstrap5';
import { Meteor } from 'meteor/meteor';
import { useTracker } from 'meteor/react-meteor-data';
import SimpleSchema2Bridge from 'uniforms-bridge-simple-schema-2';
import { useParams } from 'react-router';
import { useNavigate } from 'react-router-dom';
import { Projects } from '../../api/projects/Projects';
import LoadingSpinner from '../components/LoadingSpinner';

const bridge = new SimpleSchema2Bridge(Projects.schema);

const EditClub = () => {
  const { _id } = useParams();
  const history = useNavigate();

  const { doc, ready } = useTracker(() => {
    const subscription = Meteor.subscribe(Projects.userPublicationName);
    return {
      doc: Projects.collection.findOne(_id),
      ready: subscription.ready(),
    };
  }, [_id]);

  const submit = (data) => {
    const { name, homepage, description, picture } = data;
    Projects.collection.update(_id, { $set: { name, homepage, description, picture } }, error => {
      if (error) {
        swal('Error', error.message, 'error');
      } else {
        swal('Success', 'Club updated successfully', 'success');
      }
    });
  };

  const handleDelete = () => {
    swal({
      title: 'Are you sure?',
      text: 'Once deleted, you will not be able to recover this club information!',
      icon: 'warning',
      buttons: true,
      dangerMode: true,
    })
      .then((willDelete) => {
        if (willDelete) {
          Projects.collection.remove(_id, (error) => {
            if (error) {
              swal('Error', error.message, 'error');
            } else {
              swal('Poof! Your club has been deleted!', {
                icon: 'success',
              }).then(() => {
                history.push('/'); // Redirect to home or another page
              });
            }
          });
        }
      });
  };

  return ready ? (
    <Container className="py-3">
      <Row className="justify-content-center">
        <Col xs={10}>
          <Col className="text-center"><h2>Edit Club Information</h2></Col>
          <AutoForm schema={bridge} onSubmit={submit} model={doc}>
            <Card>
              <Card.Body>
                <Row>
                  <Col><TextField name="name" /></Col>
                </Row>
                <Row>
                  <Col><TextField name="homepage" /></Col>
                  <Col><TextField name="picture" /></Col>
                </Row>
                <LongTextField name="description" />
                <SubmitField value="Submit" />
                <ErrorsField />
                <Button variant="danger" onClick={handleDelete}>Delete Club</Button>
              </Card.Body>
            </Card>
          </AutoForm>
        </Col>
      </Row>
    </Container>
  ) : <LoadingSpinner />;
};

export default EditClub;
