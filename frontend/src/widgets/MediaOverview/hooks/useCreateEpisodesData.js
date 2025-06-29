import { useEffect, useState } from 'react';
import createMediaAction from '../../../shared/api/createMediaAction';
import parseEpisodesData from '../../../shared/helpers/parseEpisodeData';

export default function useCreateEpisodesData(dependencies) {
  const [episodesData, setEpisodesData] = useState(null);

  const { isSuccess, tvSeason, id, data } = dependencies;

  useEffect(() => {
    (async () => {
      if (!isSuccess) return;
      let epsData = await createMediaAction(id, parseEpisodesData(data.episodes), true);
      setEpisodesData(epsData);
    })();
  }, [tvSeason, id, isSuccess, data?.episodes]);

  return episodesData;
}
