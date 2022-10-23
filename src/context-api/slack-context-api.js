import { React, createContext, useState } from "react";
import { MasterChannel } from "../models/master-channel";
import { Message, MessageContent } from "../models/message";
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
    new User(3, "Alex Mitchells", "abcd.122", "kumar@gmail.com", false),
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
  const [directMessages, setDirectMessages] = useState([
    new Message(101, 2, 1, [
      new MessageContent(1011, 2, 1, "Hello, 1", "Fri, 03:22 AM"),
      new MessageContent(1012, 1, 2, "How are you ? 1", "Fri, 03:22 AM"),
    ]),
    new Message(102, 1, 3, [
      new MessageContent(1021, 3, 1, "Hello, 2", "Fri, 03:22 AM"),
      new MessageContent(1022, 1, 3, "How are you ? 2", "Fri, 03:22 AM"),
    ]),
    new Message(103, 2, 3, [
      new MessageContent(1031, 3, 2, "Hello, 3", "Fri, 03:22 AM"),
      new MessageContent(1032, 2, 3, "Hey, How are you ? 3", "Fri, 03:22 AM"),
    ]),
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
  const sendMessageToUser = (messageContent) => {
    //dm item = to : 1, from : 3
    const toId = Number(messageContent.to_user_id); //3
    const fromId = Number(messageContent.from_user_id); //1
    // alert("to : " + toId + " from : " + fromId);
    //  alert(typeof toId + " " + typeof fromId);
    const copyMessages = [...directMessages];
    let findDirectMessage = copyMessages.filter((element) => {
      return (
        (element.message_to_user_id === fromId &&
          element.message_from_user_id === toId) ||
        (element.message_to_user_id === toId &&
          element.message_from_user_id === fromId)
      );
    });
    var index = copyMessages.indexOf(findDirectMessage[0]);
    //  alert(findDirectMessage.length);
    if (findDirectMessage.length === 1) {
      //  alert("if > chat exists");

      findDirectMessage[0].message.push(messageContent);
      //  alert("new item :" + JSON.stringify(findDirectMessage[0]));
      copyMessages[index] = findDirectMessage[0];
      //  alert("new array :" + JSON.stringify(directMessages));
    } else {
      alert("create new message object");
      const messageContentArray = [];
      messageContentArray.push(messageContent);
      const message = new Message(
        messageContent.id,
        toId,
        fromId,
        messageContentArray
      );
      copyMessages.push(message);
    }
    setDirectMessages(copyMessages);
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
        userFuncs: {
          findUserByID,
          getData,
          hideShowRightContent,
        },
        channelFuncs: { addRemoveUserToChannel, addSubChannel },
        threadFuncs: { addThreadToChannel, updateReactionForThread },
        sideBar: { hideShowSideBar },
        sideBarContent: [showSideBar],
        messages: [directMessages],
        messagesFuncs: { sendMessageToUser },
      }}
    >
      {props.children}
    </SlackContext.Provider>
  );
};
