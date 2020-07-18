import React, { useRef, useEffect } from 'react';

import ChannelMessage, { Mention } from '../ChannelMessage';

import { Container, Messages, InputWrapper, Input, InputIcon, } from './styles';

const ChannelData: React.FC = () => {
  const messagesRef = useRef() as React.MutableRefObject<HTMLDivElement>;

  useEffect(() => {
    const div = messagesRef.current;

    if (div) {
      div.scrollTop = div.scrollHeight;
    }
  }, [messagesRef]);

  return (
    <Container>
      <Messages ref={messagesRef}>
        <ChannelMessage 
          author="Lineu Pastorelli"
          date="08/07/2020"
          content="Olá Lineu!"
        />
        {Array.from(Array(15).keys()).map((n) => (
          <ChannelMessage 
          author="Lineu Pastorelli"
          date="08/07/2020"
          content="Olá Lineu!"
        />
        ))}

        <ChannelMessage
          author="Luísa Coutinho"
          date="08/07/2020"
          content={
            <>
              <Mention>@Lineu Pastorelli</Mention>, me carrega no Lolzinho pfvr?
            </>
          }
          hasMention
          isBot
        />
      </Messages>

      <InputWrapper>
        <Input type="text" placeholder="Conversar em #chat-livre" />
        <InputIcon />
      </InputWrapper>
    </Container>
  )
}

export default ChannelData;