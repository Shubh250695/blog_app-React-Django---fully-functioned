import React from "react";

import { List, Avatar } from "antd";

const Articles = props => {
  return (
    <List
      itemLayout="vertical"
      size="large"
      pagination={{
        onChange: page => {
          console.log(page);
        },
        pageSize: 3
      }}
      dataSource={props.data}
      renderItem={item => (
        <List.Item key={item.title}        >
          <List.Item.Meta
            title={<a href={`/articles/${item.id}`}> {item.title} </a>}
            description={item.description}
          />
          {item.content}
        </List.Item>
      )}
    />
  );
};

export default Articles;
