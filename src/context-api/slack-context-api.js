import { React, createContext, useState } from "react";
import { MasterChannel } from "../models/master-channel";
import { SubChannel } from "../models/sub-channel";
import { Thread } from "../models/thread";
import { User } from "../models/user";

export const SlackContext = createContext();

export const SlackProvider = (props) => {
  const [showRightContent, setShowRightContent] = useState(false);
  const [users, setUsers] = useState([
    new User(1, "John Doe", "abc.123", "ameen@gmail.com", true),
    new User(2, "Ahmed Ali", "efg.123", "ahmed@gmail.com", false),
  ]);
  const [masterChannels, setMasterChannels] = useState([
    new MasterChannel(1, "MainChannel", 1, [1]),
  ]);
  const [channelSubChannels, setChannelSubChannels] = useState([
    new SubChannel(1, "New-channel", 1, [1], 1),
    new SubChannel(2, "DummyChannel", 1, [1, 2], 1),
    new SubChannel(3, "Testing-channel", 1, [1], 2),
  ]);
  const [channelThreads, setChannelThreads] = useState([
    new Thread(
      1,
      1,
      1,
      "This is a dummy thread content",
      "Fri, 03:22 AM",
      3,
      [1, 2, 3]
    ),
    new Thread(
      2,
      1,
      1,
      "Welcome to the channel ya'll !",
      "Fri, 03:22 AM",
      1,
      [1, 0, 0]
    ),
    new Thread(
      3,
      1,
      1,
      "Welcome to the channel ya'll !",
      "Fri, 03:22 AM",
      1,
      [1, 0, 0]
    ),
  ]);
  const findUserByID = (id) => {
    return users.find((element) => element.id === id);
  };
  const hideShowRightContent = () => {
    setShowRightContent(!showRightContent);
  };
  const getData = () => "hello";
  return (
    <SlackContext.Provider
      value={{
        user: [users, setUsers],
        masterChannel: [masterChannels, setMasterChannels],
        subChannel: [channelSubChannels, setChannelSubChannels],
        threads: [channelThreads, setChannelThreads],
        rightContent: [showRightContent, setShowRightContent],
        userFuncs: { findUserByID, getData, hideShowRightContent },
      }}
    >
      {props.children}
    </SlackContext.Provider>
  );
};
