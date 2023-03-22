import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import Container from '@mui/material/Container';
import Typography from '../LandingPage/Components/Typography';
import TextField from '../LandingPage/Components/TextField';

function Copyright() {
  return (
    <React.Fragment >
      <div style={{color:"#fff"}}  >
      {'©  '}{" "}
      <Link color="#fff" href="3">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}

      </div>
    </React.Fragment>
  );
}

const iconStyle = {
  width: 48,
  height: 48,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: '#fff',
  color:"#fff",
  mr: 1,
  '&:hover': {
    bgcolor: '#fff',
  },
};

const LANGUAGES = [
  {
    code: 'en-US',
    name: 'English',
  },
  {
    code: 'hi-IN',
    name: 'Hindi',
  },
  {
    code: 'bg-bl',
    name: 'Bangali',
  },
  {
    code: 'fr-FR',
    name: 'Français',
  },
];

export default function AppFooter() {
  return (
    <Typography
      component="footer"
      sx={{ display: 'flex', bgcolor: 'rgb(4, 4, 37)' }}
    >
      <Container sx={{ my: 10, display: 'flex' ,color:"gray",border:"0px solid red" }}>
       
        <Grid container spacing={12} >
         
         
          <Grid item xs={6} sm={2} md={2}>
            <Typography variant="h6" marked="left" color="#fff" sx={{marginLeft:"auto"}}  gutterBottom>
              Legal
            </Typography>
            <Box component="ul" sx={{ m: 0, listStyle: 'none', p: 0 }}>
              <Box component="li" sx={{ py: 0.5 }}  color="#fff">
                <Link href="/">Terms</Link>
              </Box>
              <Box component="li" sx={{ py: 0.5 }}  color="#fff">
                <Link href="/">Privacy</Link>
              </Box>
              <Box component="li" sx={{ py: 0.5 }}  color="#fff">
                AboutUS
              </Box>
              <Box component="li" sx={{ py: 0.5 }}  color="#fff">
                Settings
              </Box>
            </Box>
          </Grid>
         
          <Grid item xs={6} sm={2} md={2}>
            <Typography variant="h6" marked="left" color="#fff" sx={{marginLeft:"auto"}}  gutterBottom>
             Our Team
            </Typography>
            <Box component="ul" sx={{ m: 0, listStyle: 'none', p: 0 }}>
              <Box component="li" sx={{ py: 0.5 }}  color="#fff">
               Tech Support
              </Box>
              <Box component="li" sx={{ py: 0.5 }}  color="#fff">
                Help Center
              </Box>
              <Box component="li" sx={{ py: 0.5 }}  color="#fff">
                Career
              </Box>
              <Box component="li" sx={{ py: 0.5 }}  color="#fff">
                Business
              </Box>
            </Box>
          </Grid>
         
          <Grid item xs={6} sm={2} md={2}>
            <Typography variant="h6" marked="left" color="#fff" sx={{marginLeft:"auto"}}  gutterBottom>
              Community
            </Typography>
            <Box component="ul" sx={{ m: 0, listStyle: 'none', p: 0 }}>
              <Box component="li" sx={{ py: 0.5 }}  color="#fff">
             Central
              </Box>
              <Box component="li" sx={{ py: 0.5 }}  color="#fff">
                Media Kit
              </Box>
              <Box component="li" sx={{ py: 0.5 }}  color="#fff">
                Help
              </Box>
              <Box component="li" sx={{ py: 0.5 }}  color="#fff">
              Do Not Sell My Info
              </Box>
            </Box>
          </Grid>
         
          <Grid item xs={6} sm={2} md={2}>
            <Typography variant="h6" marked="left" color="#fff" sx={{marginLeft:"auto"}}  gutterBottom>
              Traffic
            </Typography>
            <Box component="ul" sx={{ m: 0, listStyle: 'none', p: 0 }}>
              <Box component="li" sx={{ py: 0.5 }}  color="#fff">
            Ad Software
              </Box>
              <Box component="li" sx={{ py: 0.5 }}  color="#fff">
               Blog Software
              </Box>
              <Box component="li" sx={{ py: 0.5 }}  color="#fff">
                Seo Software
              </Box>
              <Box component="li" sx={{ py: 0.5 }}  color="#fff">
                Media Software
              </Box>
            </Box>
          </Grid>
         
          <Grid item xs={6} sm={4} md={2}>
            <Typography variant="h6"  color="#fff" marked="left" gutterBottom>
              Language
            </Typography>
            <TextField
              select
              size="medium"
              variant="standard"
              color="#fff"
              SelectProps={{
                native: true,
              }}
              sx={{ mt: 1, width: 100 }}
            >
              {LANGUAGES.map((language) => (
                <option value={language.code} key={language.code} >
                  {language.name}
                </option>
              ))}
            </TextField>
          </Grid>

          <Grid item xs={6} sm={4} md={3} >
           <Typography variant="h6" marked="left" color="#fff" sx={{marginLeft:"auto"}}  gutterBottom >Our Social Pages</Typography>
            <Grid item sx={{ display: 'flex' }}>
                <Box component="a" href="/" sx={iconStyle}>
                  <img
                    src="https://mui.com/static/themes/onepirate/appFooterFacebook.png"
                    alt="Facebook"
                  />
                </Box>
                <Box component="a" href="/" sx={iconStyle}>
                  <img
                    src="https://mui.com/static/themes/onepirate/appFooterTwitter.png"
                    alt="Twitter"
                  />
                </Box>
            </Grid>

          </Grid>
          
         
          <Grid item>
          
            <Copyright />

            <Typography variant="caption">
              {'Icons made by '}
              <Link href="clone" rel="sponsored"  color="#fff" title="Freepik">
                Freepik
              </Link>
              {' from '}
              <Link href="3" rel="sponsored" title="clone"  color="#fff" >
                www.clone.com
              </Link>
              {' is licensed by '}
              <Link
                href="#"
                title="Creative Commons BY 3.0"
                target="_blank"
                rel="noopener noreferrer"
              >
                CC 3.0 BY
              </Link>
            </Typography>

          </Grid>

        </Grid>
     
      </Container>
    </Typography>
  );
}