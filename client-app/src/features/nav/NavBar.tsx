import React, { useContext } from 'react';
import { Menu, Container, Button } from 'semantic-ui-react';
import { observer } from 'mobx-react-lite';

import ActivityStore from '../../app/stores/activityStore';

export const NavBar: React.FC = () => {
  const activityStore = useContext(ActivityStore);

  return (
    <Menu fixed='top' inverted>
      <Container>
        <Menu.Item name='home'>
          <img src='/assets/logo.png' alt='logo' style={{ marginRight: 10 }} />
        </Menu.Item>
        <Menu.Item name='messages' />
        <Menu.Item name='friends'>
          <Button
            positive
            content='Create Activity'
            onClick={activityStore.openCreateForm}
          />
        </Menu.Item>
      </Container>
    </Menu>
  );
};

export default observer(NavBar);
