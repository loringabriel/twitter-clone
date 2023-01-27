import { useEffect, useState } from "react";
import { getTweets, Tweet, TweetResponse } from "../../backend";
import Error from "../Error";
import LoadingIndicator from "../LoadingIndicator";
import TweetComponent from "../Tweet";

export default function Content(): JSX.Element {
  const [tweets, setTweets] = useState<Tweet[]>([]);
  const [status, setStatus] = useState<string>("");

  async function fetchData() {
    setStatus("loading");
    const res: TweetResponse = await getTweets(10);
    if (res.status === 200) {
      setTweets(res.response);
      setStatus("success");
    }
    if (res.status >= 400) {
      setTweets(res.response);
      setStatus("error");
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="h-full relative">
      <h1 className="fixed text-neutral-200 p-4 pt-3 text-xl font-bold bg-black/50 w-full backdrop-blur">
        Home
      </h1>
      <div className="overflow-scroll h-screen pt-12">
        {tweets.map((tweet) => (
          <TweetComponent key={tweet.id} tweet={tweet} />
        ))}
        {status === "loading" && (
          <div className="flex justify-center p-12">
            <LoadingIndicator />
          </div>
        )}
        {status === "error" && (
          <div className="flex justify-center p-12 text-neutral-200">
            <Error
              onClickHandler={fetchData}
              errorText="Unable to fetch"
              buttonText="Try Again"
            />
          </div>
        )}
      </div>
    </div>
  );
}
