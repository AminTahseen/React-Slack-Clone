import { React, createContext, useState } from "react";
import { MasterChannel } from "../models/master-channel";
import { SubChannel } from "../models/sub-channel";
import { Thread } from "../models/thread";
import { User } from "../models/user";

export const SlackContext = createContext();

export const SlackProvider = (props) => {
  const [showRightContent, setShowRightContent] = useState(false);
  const [showSideBar, setShowSideBar] = useState(false);
  const [users, setUsers] = useState([
    new User(1, "John Doe", "abc.123", "ameen@gmail.com", true),
    new User(2, "Ahmed Ali", "efg.123", "ahmed@gmail.com", false),
    new User(3, "Kumar Sanu", "abcd.122", "kumar@gmail.com", false),
    new User(4, "Hamza Khan", "abcd.1223", "hamza@gmail.com", false),
  ]);
  const [masterChannels, setMasterChannels] = useState([
    new MasterChannel(1, "MainChannel", 1, [1, 2, 3, 4]),
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
      "Welcome to the channel ya'll 2!",
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
  const hideShowSideBar = () => {
    setShowSideBar(!showSideBar);
  };
  const addRemoveUserToChannel = (channelId, UserId) => {
    const subChannel = channelSubChannels.find(
      (element) => element.id === channelId
    );
    if (subChannel != null) {
      if (subChannel.membersIds.includes(UserId)) {
        const index = subChannel.membersIds.indexOf(UserId);
        if (index > -1) {
          // only splice array when item is found
          subChannel.membersIds.splice(index, 1); // 2nd parameter means remove one item only
        }
      } else {
        subChannel.membersIds.push(UserId);
      }
    } else {
      alert("channel not found");
    }
  };
  const addSubChannel = (subChannel) => {
    const subChannelList = [...channelSubChannels];
    subChannelList.push(subChannel);
    setChannelSubChannels(subChannelList);
  };
  const addThreadToChannel = (thread) => {
    alert(JSON.stringify(thread));
    const threadList = [...channelThreads];
    threadList.push(thread);
    setChannelThreads(threadList);
  };
  const updateReactionForThread = (threadId, emojiIndex) => {
    const dummyArray = [...channelThreads];
    if (emojiIndex === 0) {
      const item = dummyArray.find((item) => item.id === threadId);
      item.reactionsCount[0]++;
    } else if (emojiIndex === 1) {
      const item = dummyArray.find((item) => item.id === threadId);
      item.reactionsCount[1]++;
    } else if (emojiIndex === 2) {
      const item = dummyArray.find((item) => item.id === threadId);
      item.reactionsCount[2]++;
    }
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
        channelFuncs: { addRemoveUserToChannel, addSubChannel },
        threadFuncs: { addThreadToChannel, updateReactionForThread },
        sideBar: { hideShowSideBar },
        sideBarContent: [showSideBar],
      }}
    >
      {props.children}
    </SlackContext.Provider>
  );
};
