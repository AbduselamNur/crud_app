import "antd/dist/reset.css";
import "./App.css";
import { Button, Table, Modal, Form, Input } from "antd";
import React, { useState } from "react";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";

interface User {
  id: number;
  name: string;
  email: string;
  password: string | number; // Change the type as needed
  phone: string | number;    // Change the type as needed
}

function App() {
  const [dataSource, setDataSource] = useState<User[]>([
    // Your initial data here...
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
      render: (text: string, record: User) => (
        <div>
          <EditOutlined style={{ color: "green" }} onClick={() => showEditModal(record)}/>
          <DeleteOutlined style={{ color: "red", marginLeft: 12 }} onClick={() => handleDelete(record.id)} />
        </div>
      ),
    },
  ];

  // State for controlling the modal visibility and form data
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isEditModalVisible, setIsEditModalVisible] = useState(false);
  const [form] = Form.useForm();
  const [editForm] = Form.useForm();
  const [editUser, setEditUser] = useState<User | null>(null);


  // Function to show the modal
  const showModal = () => {
    setIsModalVisible(true);
  };

  const showEditModal = (user: User) => {
    setEditUser(user);
    setIsEditModalVisible(true);
  };

  // Function to handle form submission
  const handleOk = () => {
    form
      .validateFields()
      .then((values) => {
        // Here, you can add logic to send the form values to your API or update the dataSource.
        // For now, let's just add a new item to the dataSource for demonstration purposes.
        const newUser: User = {
          id: dataSource.length + 1,
          ...values,
        };
        setDataSource([...dataSource, newUser]);
        form.resetFields();
        setIsModalVisible(false);
      })
      .catch((errorInfo) => {
        console.log("Validation failed:", errorInfo);
      });
  };

  const handleEditOk = () => {
    editForm
      .validateFields()
      .then((values) => {
        const updatedUser = { ...editUser!, ...values };
        const updatedDataSource = dataSource.map((user) =>
          user.id === updatedUser.id ? updatedUser : user
        );
        setDataSource(updatedDataSource);
        editForm.resetFields();
        setIsEditModalVisible(false);
      })
      .catch((errorInfo) => {
        console.log("Validation failed:", errorInfo);
      });
  };

  // Function to handle modal cancel
  const handleCancel = () => {
    form.resetFields();
    setIsModalVisible(false);
  };
  const handleDelete = (userid: number) => {
    const updatedData = dataSource.filter((user) => user.id !== userid);
    setDataSource(updatedData);
  };
  const handleEditCancel = () => {
    editForm.resetFields();
    setIsEditModalVisible(false);
  };

  return (
    <div className="App">
      <header className="App-header">
        <Button
          style={{ background: "greenyellow", marginBottom: 20 }}
          onClick={showModal}
        >
          Add User
        </Button>
        <Table columns={columns} dataSource={dataSource}></Table>
      </header>

      {/* Modal for adding a new user */}
      <Modal
        title="Add User"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <Form form={form} name="addUserForm">
          <Form.Item
            name="name"
            label="Name"
            rules={[{ required: true, message: "Please enter a name" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="email"
            label="Email"
            rules={[
              { required: true, message: "Please enter an email" },
              { type: "email", message: "Invalid email format" },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="password"
            label="Password"
            rules={[{ required: true, message: "Please enter a password" }]}
          >
            <Input /> 
          </Form.Item>
          <Form.Item
            name="phone"
            label="Phone Number"
            rules={[{ required: true, message: "Please enter a phone number" }]}
          >
            <Input />
          </Form.Item>
          {/* Add similar Form.Item elements for other user properties (e.g., password, phone) */}
        </Form>
      </Modal>
      <Modal
        title="Edit User"
        visible={isEditModalVisible}
        onOk={handleEditOk}
        onCancel={handleEditCancel}
      >
        <Form form={editForm} name="editUserForm">
          <Form.Item
            name="name"
            label="Name"
            rules={[{ required: true, message: "Please enter a name" }]}
            initialValue={editUser?.name}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="email"
            label="Email"
            rules={[
              { required: true, message: "Please enter an email" },
              { type: "email", message: "Invalid email format" },
            ]}
            initialValue={editUser?.email}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="password"
            label="Password"
            rules={[{ required: true, message: "Please enter a password" }]}
            initialValue={editUser?.password}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="phone"
            label="Phone Number"
            rules={[{ required: true, message: "Please enter a phone number" }]}
            initialValue={editUser?.phone}
          > 
            <Input />
          </Form.Item>
          {/* Add similar Form.Item elements for other user properties (e.g., password, phone) */}
        </Form>
      </Modal>
    </div>
  );
}

export default App;
