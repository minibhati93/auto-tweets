const { TwitterApi } = require('twitter-api-v2');
const core = require('@actions/core');

const client = new TwitterApi({
  appKey: core.getInput('appKey'),
  appSecret: core.getInput('appSecret'),
  accessToken: core.getInput('accessToken'),
  accessSecret: core.getInput('accessSecret'),
  bearerToken: core.getInput('bearerToken'),
});

const rwClient = client.readWrite;

const tweetText = async () => {
  try {
    await rwClient.v2.tweet(
      'You don’t understand — there are things worth dying for! ~J.K. Rowling'
    );

    console.log('success');
  } catch (error) {
    console.log(error);
  }
};

tweetText();
