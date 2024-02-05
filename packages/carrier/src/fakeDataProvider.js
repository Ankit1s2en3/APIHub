// In fakeDataProvider.js
import ArchiveIcon from '@material-ui/icons/Archive';
import SearchIcon from '@material-ui/icons/Search';
import BookIcon from '@material-ui/icons/Book';
import CameraIcon from '@material-ui/icons/Camera';
const fakeDataProvider = {
  getList: (resource, params) => {
    if (resource === "apis") {
      console.log('fake data provider is called :> ')
      return Promise.resolve({
        data: [
          { id: 1, title: 'PIM API', description: 'Get all PIM Carrier Apis.' },
          { id: 2, title: 'PIC  API', description: 'Get all PIC Carrier Apis.' },
          { id: 2, title: 'PHDB Serial to model API', description: 'Get all PHDB Serial to model carrier api.' },
          { id: 2, title: 'Availability API', description: 'Get all Availability carrier api.' },
        ],
        total: 4,
      });
    }
  },
  // ...other methods like getOne, getMany, create, update, delete...
};

export default fakeDataProvider;
