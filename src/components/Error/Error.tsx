import React from "react";
import Button from "../Button";

type ErrorProps = {
  onClickHandler: React.MouseEventHandler<HTMLButtonElement> | undefined;
  buttonText: string;
  errorText: string;
};

export default function Error({
  onClickHandler,
  buttonText,
  errorText,
}: ErrorProps): JSX.Element {
  return (
    <div role="status" className="flex flex-col">
      <p className="pb-4">{errorText}</p>
      <Button onClick={onClickHandler}>{buttonText}</Button>
    </div>
  );
}
