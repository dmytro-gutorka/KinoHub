import { Divider, Stack } from '@mui/material';

import MediaSection from '../../shared/ui/MediaSection';
import useHomepageMedia from '@widgets/Homepage/hooks/useHomepageMedia';

const Homepage = () => {
  const { data: homepageMediaData, isLoading, isError } = useHomepageMedia();

  if (isLoading) return <div>Loading....</div>;

  if (isError) return <div>Error {isError.message}</div>;

  return (
    <Stack m={10} mt={0} rowGap={10} divider={<Divider orientation="horizontal" />}>
      <MediaSection mediaList={homepageMediaData?.at(0)?.value?.results} title="Top Rated Movies" />
      <MediaSection mediaList={homepageMediaData?.at(1)?.value?.results} title="Trending Movies" />
      <MediaSection mediaList={homepageMediaData?.at(2)?.value?.results} title="Trending TV Show" />
      <MediaSection
        mediaList={homepageMediaData?.at(3).value.results}
        title="TV show airing today"
      />
    </Stack>
  );
};

export default Homepage;
