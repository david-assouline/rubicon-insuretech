import { Amplify } from 'aws-amplify';
import config from 'amplifyconfiguration.json';
Amplify.configure(config);
import { getCurrentUser } from 'aws-amplify/auth';

export async function currentAuthenticatedUser() {
  try {
    const { username, userId, signInDetails } = await getCurrentUser();
    console.log(await getCurrentUser())
    console.log(`The username: ${username}`);
    console.log(`The userId: ${userId}`);
    console.log(`The signInDetails: ${signInDetails}`);
    return { username, userId, signInDetails }
  } catch (err) {
    console.log(err);
  }
}