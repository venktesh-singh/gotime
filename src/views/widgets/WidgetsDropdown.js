import React, { useState, useEffect } from "react";
import Person3Icon from '@mui/icons-material/Person3';
import { Card, CardContent, Typography, Grid, Box } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Link } from 'react-router-dom';
import LocalConvenienceStoreIcon from '@mui/icons-material/LocalConvenienceStore';
import EventIcon from '@mui/icons-material/Event';
import WindowIcon from '@mui/icons-material/Window';

const mainsytle = {
  marginBottom:'20px'
}

const cardStyle = {
  background: 'linear-gradient(to right, #FF8A00, #FFCD00)',
  color: 'white',
  padding: '20px',
  borderRadius: '8px',
  display: 'flex',
  alignItems: 'center',
};

const cardStyle2 = {
  background: 'linear-gradient(to right, rgb(51, 139, 147), rgb(182, 244, 146))',
  color: 'white',
  padding: '20px',
  borderRadius: '8px',
  display: 'flex',
  alignItems: 'center',
};

const cardStyle3 = {
  background: 'linear-gradient(to right, #c1c161 0%, #c1c161 0%, #d4d4b1 100%)',
  color: 'white',
  padding: '20px',
  borderRadius: '8px',
  display: 'flex',
  alignItems: 'center',
};

const cardStyle4 = {
  background: 'radial-gradient(circle at 10% 20%, rgb(15, 213, 172) 0%, rgb(34, 182, 198) 100.2%)',
  color: 'white',
  padding: '20px',
  borderRadius: '8px',
  display: 'flex',
  alignItems: 'center',
};

const arrowIconStyle = {
  marginLeft: '10px',
  fontWeight:'bold',
  fontSize:'50px',
  color:'#fff'
};

const WidgetsDropdown = () => {
  const [dataList, setDataList] = useState([]);
  const [storeList, setStoreList] = useState([]);
  const [eventList,setEventList]  = useState([]);
  const [challengeList,setChallengeList] = useState([]);
  const dataLength = dataList?.data?.length;
  const dataStore  = storeList?.store?.length;
  const dataEvent  = eventList?.data?.length;
  const dataChallenge = challengeList?.data?.length;

  useEffect(() => {
    fetch('https://gotimeapi.onrender.com/api/user/')
      .then(response => {
        if (!response.ok) {
          throw new Error('Error: ' + response.status);
        }
        return response.json();
      })
      .then(data => {
        setDataList(data);
      })
      .catch(error => {
        console.error('Error fetching User data:', error);
      });
  }, []);


  fetch('https://gotimeapi.onrender.com/api/store/allstore')  
    .then(response => {
      if (!response.ok) {  
        throw new Error('Error: ' + response.status);
      }
      return response.json();
    })
    .then(data => {
      setStoreList(data);
    })
    .catch(error => {
      console.error('Error fetching Store Booking data:', error);
    });

    useEffect(() => {
      fetch('https://gotimeapi.onrender.com/api/event/get')
        .then((response) => {
          if (!response.ok) {
            throw new Error('Error: ' + response.status);
          }
          return response.json();
        })
        .then((data) => {
          setEventList(data);
        })
        .catch((error) => {
          console.error('Error fetching Event data:', error);
        });
    }, []);

    fetch('https://gotimeapi.onrender.com/api/challenge/get')  
    .then(response => {
      if (!response.ok) {  
        throw new Error('Error: ' + response.status);
      }
      return response.json();
    })
    .then(data => {
      setChallengeList(data);
    })
    .catch(error => {
      console.error('Error fetching Challenge data:', error);
    });

  return (
    <Grid container spacing={3} style={mainsytle}>
      <Grid item xs={3}>
      <Box marginLeft="2px" marginRight="2px">
        <Card style={cardStyle}>
          <Grid container alignItems="center">
            <Grid item xs={1}>
              <Person3Icon
                aria-label="Person3Icon"
                aria-haspopup="true"
                color="primary"
                style={{ color: '#fff', fontWeight: 'bold', fontSize: '60px', paddingRight: '15px' }}
              />
            </Grid>
            <Grid item xs={6}>
              <CardContent>
                <Typography variant="h5" color="#fff">
                  Total User <br/>{dataLength}
                </Typography>
              </CardContent>
            </Grid>
            <Grid item xs={5} style={{ textAlign: 'right' }}>
              <Link to="/users" sx={{ m: 0.5 }} variant="contained" color="primary">
                <ArrowForwardIcon className="forward-arrow-icon" style={arrowIconStyle} />
              </Link>
            </Grid>
          </Grid>
        </Card>
        </Box>
      </Grid>

      <Grid item xs={3}>
      <Box marginLeft="2px" marginRight="2px">
        <Card style={cardStyle2}>
          <Grid container alignItems="center">
            <Grid item xs={1}>
              <LocalConvenienceStoreIcon
                aria-label="LocalConvenienceStoreIcon"
                aria-haspopup="true"
                color="primary"
                style={{ color: '#fff', fontWeight: 'bold', fontSize: '60px', paddingRight: '20px' }}
              />
            </Grid>
            <Grid item xs={6}>
              <CardContent>
                <Typography variant="h5" color="#fff">
                  Total Store <br/>{dataStore}
                </Typography>
              </CardContent>
            </Grid>
            <Grid item xs={5} style={{ textAlign: 'right' }}>
              <Link to="/list-storebooking" sx={{ m: 0.5 }} variant="contained" color="primary">
                <ArrowForwardIcon className="forward-arrow-icon" style={arrowIconStyle} />
              </Link>
            </Grid>
          </Grid>
        </Card>
        </Box>
      </Grid>

      <Grid item xs={3}>
      <Box marginLeft="2px" marginRight="2px">
        <Card style={cardStyle3}>
          <Grid container alignItems="center">
            <Grid item xs={1}>
              <EventIcon
                aria-label="EventIcon"
                aria-haspopup="true"
                color="primary"
                style={{ color: '#fff', fontWeight: 'bold', fontSize: '60px', paddingRight: '20px' }}
              />
            </Grid>
            <Grid item xs={6}>
              <CardContent>
                <Typography variant="h5" color="#fff">
                  Total Event <br/>{dataEvent}
                </Typography>
              </CardContent>
            </Grid>
            <Grid item xs={5} style={{ textAlign: 'right' }}>
              <Link to="/event" sx={{ m: 0.5 }} variant="contained" color="primary">
                <ArrowForwardIcon className="forward-arrow-icon" style={arrowIconStyle} />
              </Link>
            </Grid>
          </Grid>
        </Card>
        </Box>
      </Grid>

      <Grid item xs={3}>
      <Box marginLeft="2px" marginRight="2px">
        <Card style={cardStyle4}>
          <Grid container alignItems="center">
            <Grid item xs={1}>
              <WindowIcon
                aria-label="WindowIcon"
                aria-haspopup="true"
                color="primary"
                style={{ color: '#fff', fontWeight: 'bold', fontSize: '60px', paddingRight: '20px' }}
              />
            </Grid>
            <Grid item xs={8}>
              <CardContent>
                <Typography variant="h5" color="#fff">
                  Total Challenges <br/>{dataChallenge}
                </Typography>
              </CardContent>
            </Grid>
            <Grid item xs={3} style={{ textAlign: 'right' }}>
              <Link to="/challenge" sx={{ m: 0.5 }} variant="contained" color="primary">
                <ArrowForwardIcon className="forward-arrow-icon" style={arrowIconStyle} />
              </Link>
            </Grid>
          </Grid>
        </Card>
        </Box>
      </Grid>
    </Grid>
  )
}

export default WidgetsDropdown;
