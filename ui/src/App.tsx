import "antd/dist/reset.css";
import "./App.css";
import { Button, Table, Modal } from "antd";
import { useState } from "react";
import {EditOutlined, DeleteOutlined} from "@ant-design/icons";

function App() {
  const [dataSource] = useState([
    {
      id: 1,
      name: "John",
      email: "john@gmail.com",
      password: 987654,
      phone: 1234567890,
    },
    {
      id: 2,
      name: "David",
      email: "david@gmail.com",
      password: 8765,
      phone: 1234567890,
    },
    {
      id: 3,
      name: "James",
      email: "james@gmail.com",
      password: 87654,
      phone: 1234567890,
    },

    {
      id: 4,
      name: "Sam",
      email: "sam@gmail.com",
      password: 234565,
      phone: 1234567890,
    },
  ]);
  const columns = [
    {
      key: "1",
      title: "ID",
      dataIndex: "id",
    },
    {
      key: "2",
      title: "Name",
      dataIndex: "name",
    },
    {
      key: "3",
      title: "Email",
      dataIndex: "email",
    },
    {
      key: "4",
      title: "Password",
      dataIndex: "password",
    },
    {
      key: "5",
      title: "Phone Number",
      dataIndex: "phone",
    },
    {
      key: "6",
      title: "Action",
      render: () => (
        <div>
          <EditOutlined style={{color: "green"}}/>
          <DeleteOutlined style={{ color: "red", marginLeft: 12}}/>
          <Modal title="Edit User">
            <p>Some contents...</p>
            </Modal>   
        </div>
      ),
    }
  ];
  return (
    <div className="App">
      <header className="App-header">
        <Button style={{background: "greenyellow", marginBottom: 20}}>Add User</Button>
        <Table columns={columns} dataSource={dataSource}></Table>
      </header>
    </div>
  );
}

export default App;