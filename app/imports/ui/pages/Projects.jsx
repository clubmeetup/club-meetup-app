import React from 'react';
import { Meteor } from 'meteor/meteor';
import { Container, Card, Button, Row, Col } from 'react-bootstrap';
import { useTracker } from 'meteor/react-meteor-data';
import PropTypes from 'prop-types';
import { _ } from 'meteor/underscore';
import { useNavigate } from 'react-router-dom';
import { Profiles } from '../../api/profiles/Profiles';
import { ProfilesProjects } from '../../api/profiles/ProfilesProjects';
import { Projects } from '../../api/projects/Projects';
import { ProjectsInterests } from '../../api/projects/ProjectsInterests';
import LoadingSpinner from '../components/LoadingSpinner';
import { pageStyle } from './pageStyles';
import { PageIDs } from '../utilities/ids';

/* Gets the Project data as well as Profiles and Interests associated with the passed Project name. */
function getProjectData(name) {
  const data = Projects.collection.findOne({ name });
  const interests = _.pluck(ProjectsInterests.collection.find({ project: name }).fetch(), 'interest');
  const profiles = _.pluck(ProfilesProjects.collection.find({ project: name }).fetch(), 'profile');
  const profilePictures = profiles.map(profile => Profiles.collection.findOne({ email: profile })?.picture);
  return _.extend({}, data, { interests, participants: profilePictures });
}

// Allow method for Projects.collection
Projects.collection.allow({
  remove: function (userId, doc) {
    // Only allow deleting if the user is logged in and the document belongs to the user
    return userId && doc.ownerId === userId;
  },
});

// MakeCard component
const MakeCard = ({ project }) => {
  const navigate = useNavigate();
  const handleEdit = () => {
    // eslint-disable-next-line react/prop-types
    navigate(`/editclub/${project._id}`);
  };

  return (
    <Col>
      <Card className="h-100">
        <Card.Body>
          <Card.Img src={project.picture} width={50} />
          <Card.Title>{project.name}</Card.Title>
          <Card.Subtitle>{project.title}</Card.Subtitle>
          <Card.Text>{project.description}</Card.Text>
          <Button onClick={handleEdit}>Edit</Button>
        </Card.Body>
        {/* other card parts */}
      </Card>
    </Col>
  );
};

MakeCard.propTypes = {
  project: PropTypes.shape({
    description: PropTypes.string,
    name: PropTypes.string,
    participants: PropTypes.arrayOf(PropTypes.string),
    picture: PropTypes.string,
    title: PropTypes.string,
    interests: PropTypes.arrayOf(PropTypes.string),

  }).isRequired,
};

// Existing code for ProjectsPage remains the same

/* Renders the Project Collection as a set of Cards. */
const ProjectsPage = () => {
  const { ready } = useTracker(() => {
    // Ensure that minimongo is populated with all collections prior to running render().
    const sub1 = Meteor.subscribe(ProfilesProjects.userPublicationName);
    const sub2 = Meteor.subscribe(Projects.userPublicationName);
    const sub3 = Meteor.subscribe(ProjectsInterests.userPublicationName);
    const sub4 = Meteor.subscribe(Profiles.userPublicationName);
    return {
      ready: sub1.ready() && sub2.ready() && sub3.ready() && sub4.ready(),
    };
  }, []);
  const projects = _.pluck(Projects.collection.find().fetch(), 'name');
  const projectData = projects.map(project => getProjectData(project));
  return ready ? (
    <Container id={PageIDs.projectsPage} style={pageStyle}>
      <Row xs={1} md={2} lg={4} className="g-2">
        {projectData.map((project, index) => <MakeCard key={index} project={project} />)}
      </Row>
    </Container>
  ) : <LoadingSpinner />;
};

export default ProjectsPage;
