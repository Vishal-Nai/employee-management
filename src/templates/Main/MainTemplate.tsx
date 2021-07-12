import React from "react";
import { Layout } from "antd";
import "./MainTemplate.scss";

const { Content } = Layout;

interface PageProps {
  PageContent: any;
}

export const MainTemplate = ({ PageContent }: PageProps) => {
  return (
    <Layout className="root-layout">
      <div className="header-block">
        <div className="logo-block">
          <span>Welcome</span>
        </div>
      </div>
      <Content className="wrapper">
        <div className="page-container">
          <PageContent />
        </div>
      </Content>
    </Layout>
  );
};
