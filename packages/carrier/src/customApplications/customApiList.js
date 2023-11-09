// in src/posts/PostList.js
import * as React from 'react';
import { 
  List,
  Datagrid,
  TextField,
  FunctionField
} from 'react-admin';

const customApiList = (props) => {
  // Mock data array
  const mockData = [
    { id: 1, title: 'Post 1', body: 'Lorem ipsum dolor sit amet.' },
    { id: 2, title: 'Post 2', body: 'Sed do eiusmod tempor incididunt.' },
    { id: 3, title: 'Post 3', body: 'Consectetur adipiscing elit.' },
    // ...more mock posts
  ];

  // Custom function to simulate fetching data
  const dataProvider = {
    getList: () => Promise.resolve({
      data: mockData,
      total: mockData.length,
    }),
  };

  return (
    <List {...props} dataProvider={dataProvider} hasCreate={false} hasEdit={false} hasList={false} hasShow={false} pagination={null} exporter={false}>
      <Datagrid>
        <TextField source="id" />
        <TextField source="title" />
        <FunctionField source="body" render={record => `${record.body.substring(0, 50)}...`} />
      </Datagrid>
    </List>
  );
};

export default customApiList;
