import {Box, Grid, ListItem, Stack, styled, Typography, List, useTheme} from '@mui/material';
import {  useState } from 'react';

import ItemListSpaceBetween from '../ItemListSpaceBetween';
import convertToUDS from '../../helpers/convertToUSD';
import EpisodeList from '../../../entities/tvShowEpisode/ui/episodeList';
import SeasonList from '../../../entities/tvShowSeason/ui/seasonList';
import getPosterURL from '../../helpers/getPosterURL';

const StyledBox= styled(Box)(() => ({
  padding: '16px',
  border: '1px solid grey',
  borderRadius: '10px'
}))


const MediaOverview = ({ mediaData, mediaType }) => {
  const [tvSeason, setTvSeason] = useState(1)

  const {
    overview,
    budget,
    revenue,
    status,
    seasons,
    credits: { cast },
    spoken_languages: language,
    production_countries: country,
    production_companies: companies,
    release_date: releaseDate,
    first_air_date: airDate,
  } = mediaData

  return (
    <Stack >
    <Grid container>
      <Grid size={8}>
        <Stack>
          <StyledBox>
            <Typography variant="h5" component="h3">
              Plot
            </Typography>
            <Typography variant="body1" component="p">
              {overview}
            </Typography>
          </StyledBox>
          <StyledBox>
            <Typography variant="h5" component="h3">
              Cast & Crew
            </Typography>
            <Stack direction="row" flexWrap="wrap" gap={8}>
              {cast.slice(0, 10).map(actor => {
                const { character, name, profile_path: profilePath, id } = actor
                const photoURL =  getPosterURL(profilePath);
                return (
                  <Stack key={id}>
                    <Box component="img" src={photoURL} width="100px" height="145px"></Box>
                    <Box>{name}</Box>
                    <Box color="grey">{character}</Box>
                  </Stack>
                )})}
            </Stack>
          </StyledBox>
        </Stack>
      </Grid>
      <Grid size={4}>
        <Stack>
          <StyledBox>
            <Typography variant="h5" component="h3">
              Movie Details
            </Typography>
            <List>
              <ItemListSpaceBetween label="Release date" data={releaseDate || airDate}/>
              <ItemListSpaceBetween label="Status" data={status}/>
              {budget && (
                <ItemListSpaceBetween label="Budget" data={convertToUDS(budget)}/>
              )}
              {revenue && (
                <ItemListSpaceBetween label="Box Office" data={convertToUDS(revenue)}/>
              )}
              <ItemListSpaceBetween label="Language" data={language?.at(0)?.english_name}/>
              <ItemListSpaceBetween label="Country" data={country?.at(0)?.name}/>
            </List>
          </StyledBox>
          {companies.length > 0 && (
            <StyledBox>
              <Typography variant="h5" component="h3">
                Production companies
              </Typography>
              <List>
                {companies.map(({id, name}) => <ListItem key={id}>{name}</ListItem>)}
              </List>
            </StyledBox>
          )}
        </Stack>
      </Grid>
    </Grid>

      {mediaType === 'tv' && (
        <Grid container spacing={8}>
          <Grid size={3}>
            <SeasonList seasons={seasons} tvSeason={tvSeason} onSetTvSeason={setTvSeason}/>
          </Grid>
          <Grid size={9}>
            <EpisodeList tvSeason={tvSeason} mediaType={mediaType}/>
          </Grid>
        </Grid>
      )}
    </Stack>
  )
};

export default MediaOverview;