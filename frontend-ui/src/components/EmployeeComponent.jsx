import React, { useState, useEffect } from "react";
import { Button, Select, Modal, Form, Input, Table, message } from "antd";
import axios from "axios";
import { columns } from "./utils";

export const EmployeeComponent = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [dataSource, setDataSource] = useState([]);
  const [form] = Form.useForm();

  useEffect(() => {
    // Featch data from backend on initial page load
    fetchData();
  }, []);

  const fetchData = () => {
    // get data from backend using get request
    axios.get(`http://localhost:8601/employee`).then((res) => {
      setDataSource(res.data.Employees);
    });
  };

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const onFinish = (values) => {
    // send employee data to backend using post request
    axios
      .post("http://localhost:8601/employee", {
        firstName: values.firstName,
        lastName: values.lastName,
        departmentId: values.departmentId,
      })
      .then(function (response) {
        console.log(response);
        // Fetch data after adding new employee for synchronisation
        fetchData();
        form.resetFields();
        message.success(`Employee: '${values.firstName}' added successfully`);
        setIsModalOpen(false);
      })
      .catch(function (error) {
        message.error("falied to add New Employee");
        console.log(error);
      });
  };
  const onFinishFailed = (errorInfo) => {
    message.error("falied to add New Employee");
    console.log("Failed:", errorInfo);
  };

  return (
    <div>
      <Button onClick={showModal} style={{ color: "blue" }}>
        Add New Employee
      </Button>

      <Table
        // table to show employee data
        dataSource={dataSource}
        columns={columns}
        pagination={false}
        locale={{
          emptyText: <p> There are currently no Employee to show</p>,
        }}
      />
      <Modal
        title="Add New Employee"
        open={isModalOpen}
        onCancel={handleCancel}
        footer={false}
      >
        <Form
          // form to submit employee data
          form={form}
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item
            label="First Name"
            name="firstName"
            rules={[
              {
                required: true,
                message: "Please input Firstname!",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Last Name"
            name="lastName"
            rules={[
              {
                required: true,
                message: "Please input Lastname!",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Department"
            name="departmentId"
            rules={[
              {
                required: true,
                message: "Please select Department!",
              },
            ]}
          >
            <Select
              //map deparment to its id for adding it to database
              style={{ width: 120 }}
              defaultValue=""
              options={[
                {
                  value: 1,
                  label: "Sales",
                },
                {
                  value: 2,
                  label: "Ops",
                },
                {
                  value: 3,
                  label: "IT",
                },
              ]}
            />
          </Form.Item>

          <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
            <Button type="primary" htmlType="submit">
              Add Employee
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};
