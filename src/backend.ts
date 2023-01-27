import { faker } from "@faker-js/faker";

export type Tweet = {
  id: string;
  message: string;
  avatar: string;
  username: string;
  name: string;
  likes: number;
  retweets: number;
  comments: number;
  reach: number;
};

export type TweetResponse = {
  status: number;
  response: Tweet[];
};

function timeout(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

const random = (min: number, max: number) =>
  Math.floor(Math.random() * (max - min)) + min;

export const getTweets = async (
  numberOfTweets: number
): Promise<TweetResponse> => {
  await timeout(random(300, 1200));

  if (Math.random() < 0.05) {
    return { status: 500, response: [] };
  }
  const generatedTweets = Array.from(Array(numberOfTweets).keys())
    .fill(0)
    .map(() => ({
      id: faker.datatype.uuid(),
      message: faker.lorem.paragraph(),
      avatar: faker.internet.avatar(),
      username: faker.internet.userName(),
      name: faker.name.fullName(),
      likes: faker.datatype.number({ max: 100 }),
      retweets: faker.datatype.number({ max: 50 }),
      comments: faker.datatype.number({ max: 10 }),
      reach: faker.datatype.number({ max: 1000 }),
    }));
  return { status: 200, response: generatedTweets };
};
