import { Meteor } from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base';
// import { TasksCollection } from '/imports/api/TasksCollection';
import { TasksCollection } from '/imports/db/TasksCollection';

import '/imports/api/tasksMethods';
import '/imports/api/tasksPublications';

// import { LinksCollection } from '/imports/api/links';

// const insertTask = taskText => TasksCollection.insert({ text: taskText });

const insertTask = (taskText, user) =>
  TasksCollection.insert({
    text: taskText,
    userId: user._id,
    createdAt: new Date(),
  });

const SEED_USERNAME = 'ashu';
const SEED_PASSWORD = 'qwerty123';

Meteor.startup(() => {
  if (!Accounts.findUserByUsername(SEED_USERNAME)) {
    Accounts.createUser({
      username: SEED_USERNAME,
      password: SEED_PASSWORD,
    });
  }

  const user = Accounts.findUserByUsername(SEED_USERNAME);

  if (TasksCollection.find().count() === 0) {
    [
      'First Task',
      'Second Task',
      'Third Task',
      'Fourth Task',
      'Fifth Task',
      'Sixth Task',
      'Seventh Task',
    ].forEach(taskText => insertTask(taskText, user));
  }
});

// Meteor.startup(() => {
//   if (!Accounts.findUserByUsername(SEED_USERNAME)) {
//     Accounts.createUser({
//       username: SEED_USERNAME,
//       password: SEED_PASSWORD,
//     });
//   }

//   if (TasksCollection.find().count() === 0) {
//     [
//       'First Task',
//       'Second Task',
//       'Third Task',
//       'Fourth Task',
//       'Fifth Task',
//       'Sixth Task',
//       'Seventh Task'
//     ].forEach(insertTask)
//   }
// });



// function insertLink({ title, url }) {
//   LinksCollection.insert({ title, url, createdAt: new Date() });
// }

// Meteor.startup(() => {
//   // If the Links collection is empty, add some data.
//   if (LinksCollection.find().count() === 0) {
//     insertLink({
//       title: 'Do the Tutorial',
//       url: 'https://www.meteor.com/tutorials/react/creating-an-app'
//     });

//     insertLink({
//       title: 'Follow the Guide',
//       url: 'http://guide.meteor.com'
//     });

//     insertLink({
//       title: 'Read the Docs',
//       url: 'https://docs.meteor.com'
//     });

//     insertLink({
//       title: 'Discussions',
//       url: 'https://forums.meteor.com'
//     });
//   }
// });
