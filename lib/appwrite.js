import { Account, Client, ID } from 'react-native-appwrite';

export const config = {
  endpoint: 'https://cloud.appwrite.io/v1',
  platform: 'com.kira.aora',
  projectId: '66c542270013b4d3ff89',
  databaseId: '66c5450900062e022f5c',
  usersCollectionId: '66c545350018135815b0',
  videosCollectionId: '66c545580006ec6d25a5',
  storageId: '66c546dd0037867415e0',
};
// Init your React Native SDK
const client = new Client();

client
  .setEndpoint(config.endpoint) // Your Appwrite Endpoint
  .setProject(config.projectId) // Your project ID
  .setPlatform(config.platform); // Your application ID or bundle ID.

const account = new Account(client);

export function createUser(user) {
  account.create(ID.unique(), 'me@example.com', 'password', 'Jane Doe').then(
    function (response) {
      console.log(response);
    },
    function (error) {
      console.log(error);
    }
  );
}

// Register User
