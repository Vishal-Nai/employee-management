import React from "react";
import { Button } from "antd";
import "./Users.scss";

const Users: React.FC = () => {
  return (
    <>
      <div className="rightside-container d-flex">
        <div className="top-header d-flex">
          <h3>Users</h3>
          <div className="add-new-btn">
            <Button>Add New User</Button>
          </div>
        </div>
        <div className="content d-flex">
          <div className="">
            <div>Users List</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Users;
