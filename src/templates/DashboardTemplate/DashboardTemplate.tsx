import { Fragment } from "react";
import "./DashboardTemplate.scss";
import { Layout } from "antd";
import { Sidebar } from "../../components/Sidebar/Sidebar";

interface Props {
  PageContent: any;
}

interface MenuNode {
  title: string;
  link: string;
  key: string;
}

export const DashboardTemplate = (props: Props) => {
  const { PageContent: Component } = props;
  const menu: MenuNode[] = [
    {
      title: "Users",
      link: "/dashboard",
      key: "users",
    },
    {
      title: "Contacts",
      link: "/dashboard/contacts",
      key: "contacts",
    },
    {
      title: "Messages",
      link: "/dashboard/messages",
      key: "messages",
    },
  ];

  return (
    <Layout className="dashboard-layout d-flex">
      <Sidebar menuOptions={menu} />
      <Layout className="site-layout">
        <div className="component-content">
          <Fragment>
            <Component {...props} />
          </Fragment>
        </div>
      </Layout>
    </Layout>
  );
};
