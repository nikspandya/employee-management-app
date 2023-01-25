import React from "react";
import { Layout, Affix } from "antd";
import "./style.css";
import { EmployeeComponent } from "./components/EmployeeComponent";

const { Header, Content } = Layout;

// This app renders the EmployeeComponent to list and add employees
// basic styling and css are used for better view

function App() {
  return (
    <div>
      <Layout>
        <Affix offsetTop={1}>
          <Header
            style={{
              background: "#FFFACD",
              textAlign: "center",
              fontSize: "30px",
            }}
          >
            HR Tasks
          </Header>
        </Affix>
        <Content className="body">
          <EmployeeComponent />
        </Content>
      </Layout>
    </div>
  );
}

export default App;
