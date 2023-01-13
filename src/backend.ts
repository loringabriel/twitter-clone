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

export const getTweets = (numberOfTweets: number): Tweet[] => {
  return Array.from(Array(numberOfTweets).keys())
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
};
