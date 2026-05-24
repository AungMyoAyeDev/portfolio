import React, { FC } from "react";
import { Badge } from "../ui/badge";
type Props = {
  setInput: (text: string) => void;
};
const ChatIntitial: FC<Props> = ({ setInput }) => {
  return (
    <div className="space-y-4 mt-4">
      <p className="text-sm ">Feel free to ask me anything.</p>
      <div className="space-x-4">
        <Badge
          variant={"default"}
          className="p-2 text-white/90"
          onClick={() => setInput("projects")}
        >
          Projects
        </Badge>
        <Badge
          variant={"default"}
          className="p-2 text-white/90"
          onClick={() => setInput("techologies")}
        >
          Techologies
        </Badge>
        <Badge
          variant={"default"}
          className="p-2 text-white/90"
          onClick={() => setInput("background")}
        >
          Background
        </Badge>
      </div>
    </div>
  );
};

export default ChatIntitial;
