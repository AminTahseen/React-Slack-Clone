import { User } from "../models/user";
import { useNavigate } from "react-router-dom";
import auth from "../auth/auth";
import { useContext, useState } from "react";
import { SlackContext } from "../context-api/slack-context-api";
import { MasterChannel } from "../models/master-channel";

const SignUp = () => {
  const { user, masterChannel } = useContext(SlackContext);
  const [users, setUsers] = user;
  const [masterChannels, setMasterChannels] = masterChannel;
  const navigate = useNavigate();
  const [name, setName] = useState("Ameen");
  const [email, setEmail] = useState("ameen@gmail.com");
  const [pass, setPass] = useState("abc.123");
  const [channelName, setChannelName] = useState("MainChannel");

  const userList = [...users];
  const masterChannelList = [...masterChannels];
  const existingUser = userList.find(
    (element) => element.email === email && element.pass === pass
  );
  const existingMasterChannel = masterChannelList.find(
    (element) => element.channelName === channelName
  );
  const handleChange = (event, forValue) => {
    if (forValue === "name") {
      setName(event.target.value);
    } else if (forValue === "email") {
      setEmail(event.target.value);
    } else if (forValue === "pass") {
      setPass(event.target.value);
    } else if (forValue === "channel") {
      setChannelName(event.target.value);
    }
  };

  const checkForExistingChannel = (channel = null) => {
    const existingUser = userList.find(
      (element) => element.email === email && element.pass === pass
    );
    if (existingMasterChannel != null) {
      const userList = existingMasterChannel.membersIds;
      const existingId = userList.find(
        (element) => element === existingUser.id
      );
      if (existingId != null) {
        alert("channel found and user is a part of it !");
        auth.setLoggedInUser(existingUser);
        auth.setMasterChannel(existingMasterChannel);
        auth.login(() => {
          navigate("/channel/" + existingMasterChannel.channelName);
        });
      } else {
        alert("channel found and user is not part of it !");
        const membersIds = [...existingMasterChannel.membersIds];
        membersIds.push(existingUser.id);
        existingMasterChannel.membersIds = membersIds;
        const objIndex = masterChannelList.findIndex(
          (obj) => obj.id === existingMasterChannel.id
        );
        masterChannelList[objIndex] = existingMasterChannel;
        setMasterChannels(masterChannelList);
        auth.setLoggedInUser(existingUser);
        auth.setMasterChannel(existingMasterChannel);
        auth.login(() => {
          navigate("/channel/" + existingMasterChannel.channelName);
        });
      }
    } else {
      alert("channel not found, create it and add existing user in it");
      channel.membersIds.push(existingUser.id);
      masterChannelList.push(channel);
      setMasterChannels(masterChannelList);
      auth.setLoggedInUser(existingUser);
      auth.setMasterChannel(channel);
      auth.login(() => {
        navigate("/channel/" + channel.channelName);
      });
    }
  };
  const signInOrUp = () => {
    const userId = Math.floor(Math.random() * 100);
    const channelId = Math.floor(Math.random() * 100) + 1;

    const user = new User(userId, name, pass, email, true);
    const channel = new MasterChannel(channelId, channelName, user.id, []);

    if (existingUser != null) {
      alert("Existing User Found");
      checkForExistingChannel();
    } else {
      alert("User Not Found");
      userList.push(user);
      setUsers(userList);
      checkForExistingChannel(channel);
    }
  };
  return (
    <div className="signUp">
      <form onSubmit={signInOrUp}>
        <h2>Fill Up The Details</h2>
        <h4>Display Name</h4>
        <input
          type={"text"}
          placeholder="Your Name"
          value={name}
          onChange={(e) => handleChange(e, "name")}
        />
        <h4>Email Address</h4>
        <input
          type={"text"}
          placeholder="Your Email"
          value={email}
          onChange={(e) => handleChange(e, "email")}
        />
        <h4>Password</h4>
        <input
          type={"text"}
          placeholder="Your Password"
          value={pass}
          onChange={(e) => handleChange(e, "pass")}
        />
        <h4>Join/Create Channel</h4>
        <input
          type={"text"}
          placeholder="Channel Name"
          value={channelName}
          onChange={(e) => handleChange(e, "channel")}
        />
        {name} {email} {pass} {channelName}
        <button>Join Slack 2.0</button>
      </form>
    </div>
  );
};
export default SignUp;
