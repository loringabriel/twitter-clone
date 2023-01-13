import { getTweets, Tweet } from "../../backend";
import TweetComponent from "../Tweet";

export default function Content(): JSX.Element {
  const tweets: Tweet[] = getTweets(10);

  return (
    <div className="h-full relative">
      <h1 className="fixed text-neutral-200 p-4 pt-3 text-xl font-bold bg-black/50 w-full backdrop-blur">
        Home
      </h1>
      <div className="overflow-scroll h-screen pt-12">
        {tweets.map((tweet) => (
          <TweetComponent key={tweet.id} tweet={tweet} />
        ))}
      </div>
    </div>
  );
}
