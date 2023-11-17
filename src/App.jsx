import FriendsList from "./components/FriendsList";
import FormAddFriend from "./components/FormAddFriend";
import Button from "./components/Button";
import FormSpliteBill from "./FormSpliteBill";
import { useState } from "react";
const initialFriends = [
  {
    id: 118836,
    name: "Clark",
    image: "https://i.pravatar.cc/48?u=118836",
    balance: -7,
  },
  {
    id: 933372,
    name: "Sarah",
    image: "https://i.pravatar.cc/48?u=933372",
    balance: 20,
  },
  {
    id: 499476,
    name: "Anthony",
    image: "https://i.pravatar.cc/48?u=499476",
    balance: 0,
  },
];
function App() {
  const [showFrined, setShowFriend] = useState(false);
  const [friends, setFriends] = useState(initialFriends);
  function hnadleShowAddFriend() {
    setShowFriend((show) => !show);
  }
  function handleAddfriend(friend) {
    setFriends((friends) => [...friends, friend]);
    setShowFriend(false);
  }
  return (
    <div className="app">
      <div className="sidebar">
        <FriendsList friends={friends}></FriendsList>

        {showFrined && (
          <FormAddFriend onAddFriend={handleAddfriend}></FormAddFriend>
        )}
        <Button onClick={hnadleShowAddFriend}>
          {showFrined ? "close" : "Add Friend"}
        </Button>
      </div>
      <FormSpliteBill></FormSpliteBill>
    </div>
  );
}

export default App;
