import React, { useState, useEffect } from 'react';
import useFetch from '../../../api/useFetch';
import * as sc from './SignUpDiscord.style';

const SignUpDiscord = () => {
  const [discordUrl, setDiscordUrl] = useState(undefined);

  const [getData] = useFetch('/discord');

  useEffect(() => {
    (async () => {
      const gotDiscordUrl = await getData();

      setDiscordUrl(gotDiscordUrl.discordUrl);
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
