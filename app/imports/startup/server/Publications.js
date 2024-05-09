import { Meteor } from 'meteor/meteor';
import { Roles } from 'meteor/alanning:roles';
import { Interests } from '../../api/interests/Interests';
import { Profiles } from '../../api/profiles/Profiles';
import { ProfilesInterests } from '../../api/profiles/ProfilesInterests';
import { ProfilesProjects } from '../../api/profiles/ProfilesProjects';
import { Projects } from '../../api/projects/Projects';
import { ProjectsInterests } from '../../api/projects/ProjectsInterests';

/** Publish all interests */
Meteor.publish(Interests.userPublicationName, () => {
  return Interests.collection.find();
});

/** Publish all profiles */
Meteor.publish(Profiles.userPublicationName, () => {
  return Profiles.collection.find();
});

/** Publish profile interests */
Meteor.publish(ProfilesInterests.userPublicationName, () => {
  return ProfilesInterests.collection.find();
});

/** Publish profile projects */
Meteor.publish(ProfilesProjects.userPublicationName, () => {
  return ProfilesProjects.collection.find();
});

/** Publish all projects */
Meteor.publish(Projects.userPublicationName, () => {
  return Projects.collection.find();
});

/** Publish project interests */
Meteor.publish(ProjectsInterests.userPublicationName, () => {
  return ProjectsInterests.collection.find();
});

/** Admin-specific publications, assumes admin roles have been set correctly */
Meteor.publish('adminProjects', function () {
  if (!this.userId) {
    return this.ready();
  }

  if (Roles.userIsInRole(this.userId, ['super admin', 'admin'])) {
    // Super admins and admins get access to all projects
    return Projects.collection.find();
  } else {
    // Only publish projects where the user is involved if not an admin
    return Projects.collection.find({ members: this.userId });
  }
});
