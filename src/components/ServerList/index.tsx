import React from 'react';

import { Container, Separetor } from './styles';

const ServerList: React.FC = () => {
  return (
    <Container>
      <ServerButton isHome/>

      <Separetor />

      <ServerButton hasNotification />
      <ServerButton mentions={3} />
    </Container>
  )
}

export default ServerList;