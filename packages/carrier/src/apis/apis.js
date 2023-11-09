import { apis as defaultApis } from 'layer7-apihub';
import { ApiList } from './ApiList';
import { List, Datagrid, TextField, EmailField, DeleteButton, ListGuesser, useResourceContext } from 'react-admin';
const ResourceName = () => {
  const { resource } = useResourceContext();
  return <>{resource}</>;
}

function apis({ ...props }) {
  return (

    <List {...props}>
      <>
        <ResourceName /> {/* renders 'posts' */}
        <Datagrid>
          <TextField source="id" />
          <TextField source="name" />
        </Datagrid>
      </>
    </List>

  )
};
export default apis;
