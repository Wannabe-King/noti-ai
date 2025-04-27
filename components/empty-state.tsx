import { Plus } from "lucide-react";
import { Button } from "./ui/button";

interface EmptyStateProp {
  message: string;
  buttonText: string;
  onButtonClick: () => void;
}

export const EmptyState = ({
  message,
  onButtonClick,
  buttonText,
}: EmptyStateProp) => {
  return (
    <div className="flex flex-col gap-3 items-center justify-center h-full">
      <div>{message}</div>
      <Button onClick={onButtonClick}>
        {<Plus />} {buttonText}
      </Button>
    </div>
  );
};
