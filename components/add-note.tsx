"use client";
import { Plus } from "lucide-react";
import { Button } from "./ui/button";

interface AddContentProp {
  onClick: () => void;
}

export const AddContent = ({ onClick }: AddContentProp) => {
  return (
    <Button size={"lg"} variant={"outline"} onClick={onClick}>
      Add Content {<Plus />}
    </Button>
  );
};
