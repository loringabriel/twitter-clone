import { Tweet } from "../../backend";
import {
  ChartBarIcon,
  ChatBubbleLeftIcon,
  ArrowPathRoundedSquareIcon,
  HeartIcon,
  ArrowUpTrayIcon,
} from "@heroicons/react/24/solid";

type TweetProps = {
  tweet: Tweet;
};

export default function TweetComponent({ tweet }: TweetProps): JSX.Element {
  return (
    <article className="text-white p-5 border-b border-neutral-700">
      <div className="flex gap-2">
        <img
          src={tweet.avatar}
          alt="avatar"
          className="rounded-full w-11 h-11"
        />
        <div>
          <p>
            <span className="font-bold mr-1">{tweet.name}</span>
            <span className="text-neutral-500">@{tweet.username}</span>
          </p>
          <p>{tweet.message}</p>
        </div>
      </div>
      <div className="px-[54px] pt-3 flex justify-between">
        <div className="flex items-center text-neutral-500">
          <ChartBarIcon className="h-4 w-4 text-white-500 mr-3" />
          <span className="text-sm">{tweet.reach}</span>
        </div>
        <div className="flex items-center text-neutral-500">
          <ChatBubbleLeftIcon className="h-4 w-4 text-white-500 mr-3" />
          <span className="text-sm">{tweet.comments}</span>
        </div>
        <div className="flex items-center text-neutral-500">
          <ArrowPathRoundedSquareIcon className="h-4 w-4 text-white-500 mr-3" />
          <span className="text-sm">{tweet.retweets}</span>
        </div>
        <div className="flex items-center text-neutral-500">
          <HeartIcon className="h-4 w-4 text-white-500 mr-3" />
          <span className="text-sm">{tweet.likes}</span>
        </div>
        <div className="flex items-center text-neutral-500">
          <ArrowUpTrayIcon className="h-4 w-4 text-white-500 mr-3" />
        </div>
      </div>
    </article>
  );
}
