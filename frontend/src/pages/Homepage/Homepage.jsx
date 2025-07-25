import { Divider, Stack } from '@mui/material';

import MediaSection from '../../shared/ui/MediaSection';
import useHomePageMedia from '../../widgets/Homepage/hooks/useHomePageMedia';
import { useEffect } from 'react';
import getSeasonDetails from '@shared/api/TMDB/getSeasonDetails';

const Homepage = () => {
  const { data: homepageMediaData, isLoading, isError } = useHomePageMedia();

  useEffect(() => {
    const fetchData = async () => {
      const data = await getSeasonDetails(124364, 1);
      console.log(data);
    };

    fetchData().then((r) => console.log('Finish!'));
  }, []);

  if (isLoading) return <div>Loading....</div>;

  if (isError) return <div>Error {isError.message}</div>;

  return (
    <Stack m={10} mt={0} rowGap={10} divider={<Divider orientation="horizontal" />}>
      <MediaSection mediaList={homepageMediaData?.at(0).value.results} title="Top Rated Movies" />
      <MediaSection mediaList={homepageMediaData?.at(1).value.results} title="Trending Movies" />
      <MediaSection mediaList={homepageMediaData?.at(2).value.results} title="Trending TV Show" />
      <MediaSection
        mediaList={homepageMediaData?.at(3).value.results}
        title="TV show airing today"
      />
    </Stack>
  );
};

export default Homepage;
