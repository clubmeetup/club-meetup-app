import React from 'react';
import { Meteor } from 'meteor/meteor';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { AutoForm, TextField, LongTextField, SubmitField, ErrorsField } from 'uniforms-bootstrap5';
import { useParams } from 'react-router-dom';
import { useTracker } from 'meteor/react-meteor-data';
import SimpleSchema2Bridge from 'uniforms-bridge-simple-schema-2';
import { Projects } from '../../api/projects/Projects';
import LoadingSpinner from '../components/LoadingSpinner';

const bridge = new SimpleSchema2Bridge(Projects.schema);

const EditClub = () => {
  const { _id } = useParams();
  const { doc, isLoading } = useTracker(() => {
    const subscription = Meteor.subscribe('project', _id);
    return {
      doc: Projects.collection.findOne(_id),
      isLoading: !subscription.ready(),
    };
  }, [_id]);

  const handleSubmit = (data) => {
    Projects.collection(_id, { $set: data }, (error) => {
      if (error) {
        // eslint-disable-next-line no-alert
        alert(`Update failed: ${error.message}`);
      } else {
        // eslint-disable-next-line no-alert
        alert('Project updated successfully!');
      }
    });
  };

  return !isLoading ? (
    <Container className="py-3">
      <Row className="justify-content-center">
        <Col xs={12} md={8}>
          <Card>
            <Card.Body>
              <AutoForm schema={bridge} onSubmit={handleSubmit} model={doc}>
                <TextField name="name" />
                <TextField name="homepage" />
                <LongTextField name="description" />
                <TextField name="picture" />
                <SubmitField value="Update Project" />
                <ErrorsField />
              </AutoForm>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  ) : <LoadingSpinner />;
};

export default EditClub;
