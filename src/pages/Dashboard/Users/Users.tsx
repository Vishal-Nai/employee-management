import React from "react";
import { Button } from "antd";
import "./Users.scss";

const Users: React.FC = () => {
  return (
    <>
      <div className="container d-flex">
        <h3>Users</h3>
        <div className="d-flex add-new-btn">
          <div>
            <Button>Add New User</Button>
          </div>
        </div>
      </div>
      <div className="container content">
        <div className="d-flex">
          <div>Users List</div>
        </div>
      </div>
    </>
  );
};

export default Users;
