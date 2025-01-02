import React from "react";

function Friends(): JSX.Element {
  return (
    <div className="text-content">
      <h1>Your Friends</h1>

      <div className="center">
        <button className="referal">Your referal</button>
      </div>

      <h3>No friends yet</h3>

      <ul className="list">
        <li className="list-item">
          Maximilian
          <span className="list-btn done">50</span>
        </li>
      </ul>
    </div>
  );
}

export default Friends;
