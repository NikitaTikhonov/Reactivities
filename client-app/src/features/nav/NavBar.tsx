import React from 'react';
import { Menu, Container, Button } from 'semantic-ui-react';

interface IProps {
  openCreateForm: () => void;
}

export const NavBar: React.FC<IProps> = ({ openCreateForm }) => {
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
            onClick={() => openCreateForm()}
          />
        </Menu.Item>
      </Container>
    </Menu>
  );
};

export default NavBar;
