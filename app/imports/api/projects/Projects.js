import { Mongo } from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';

/** Encapsulates state and variable values for this collection. */
class ProjectsCollection {
  constructor() {
    // The name of this collection.
    this.name = 'ProjectsCollection';
    // Define the Mongo collection.
    this.collection = new Mongo.Collection(this.name);
    // Define the structure of each document in the collection.
    this.schema = new SimpleSchema({
      name: { type: String, index: true, unique: true },
      homepage: { type: String, optional: true },
      description: { type: String, optional: true },
      picture: { type: String, optional: true },
    });
    // Ensure collection documents obey schema.
    this.collection.attachSchema(this.schema);
    // Define names for publications and subscriptions
    this.userPublicationName = `${this.name}.publication.user`;
    this.adminPublicationName = `${this.name}.publication.admin`;

    this.collection.allow({
      update(userId) {
        // Allow update if the user is logged in
        return !!userId;
      },
      remove(userId) {
        // Allow removal if the user is logged in
        return !!userId;
      },
    });
  }
}

export const Projects = new ProjectsCollection();
