import { Box, Grid, ListItem, Stack, styled, Typography, List } from '@mui/material';
import ItemListSpaceBetween from '../ItemListSpaceBetween';
import convertToUDS from '../../helpers/convertToUSD';
import { BASE_POSTER_URL } from '../../../config/constants';


const StyledBox= styled(Box)(() => ({
  padding: '16px',
  border: '1px solid grey',
  borderRadius: '10px'
}))


const MediaOverview = ({mediaData}) => {

  const {overview, budget, spoken_languages: language, production_countries: country, production_companies: companies, release_date: releaseDate, revenue, status, credits: { cast, crew}  } = mediaData

  console.log(cast)
  console.log(crew)

  console.log(mediaData)

  const imgURL = `${BASE_POSTER_URL}/ulbVvuBToBN3aCGcV028hwO0MOP.jpg`;


  return (

    <Grid container spacing={2}>

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
            <Stack>
              {/*<Box component="img" src={imgURL} width="80px" height="130px"></Box>*/}
              {/*<Box></Box>*/}
              {/*<Box></Box>*/}

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
              <ItemListSpaceBetween label="Release date" data={releaseDate}/>
              <ItemListSpaceBetween label="Status" data={status}/>
              <ItemListSpaceBetween label="Budget" data={convertToUDS(budget)}/>
              <ItemListSpaceBetween label="Box Office" data={convertToUDS(revenue)}/>
              <ItemListSpaceBetween label="Language" data={language?.at(0)?.english_name}/>
              <ItemListSpaceBetween label="Country" data={country?.at(0)?.name}/>
            </List>
          </StyledBox>
          <StyledBox>
            <Typography variant="h5" component="h3">
              Production companies
            </Typography>
            <List>
              {companies.map(({id, name}) => <ListItem key={id}>{name}</ListItem>)}
            </List>
          </StyledBox>
        </Stack>
      </Grid>

    </Grid>
  )
};

export default MediaOverview;