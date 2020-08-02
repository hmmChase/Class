import React, { useState, useEffect } from 'react';
import { getDiscordUrl } from '../../api/DiscordApi';
import * as sc from './SignUpDiscord.style';

const SignUpDiscord = () => {
  const [discordUrl, setDiscordUrl] = useState(undefined);

  useEffect(() => {
    (async () => {
      const gotDiscordUrl = await getDiscordUrl();

      setDiscordUrl(gotDiscordUrl);
    })();
  }, []);

  return (
    <sc.Container>
      {discordUrl ? (
        <a href={discordUrl}>Sign up with Discord</a>
      ) : (
        <div>Loading...</div>
      )}
    </sc.Container>
  );
};

export default SignUpDiscord;
