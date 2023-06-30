import React from "react";
import { Card, styled, Grid, Box, TableBody, TableCell, Table, TableRow, Button } from "@mui/material";
import { useLocation,useHistory  } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import moment from "moment";

const CardRoot = styled(Card)(() => ({
    height: '100%',   
    padding: '20px 24px',
  }));
  
  const CardTitle = styled('div')(({ subtitle }) => ({
    fontSize: '1.2rem',
    fontWeight: '500',
    textTransform: 'capitalize',
    marginBottom: !subtitle && '16px',
  }));
  
  const SimpleCard = ({ children, title, subtitle, icon }) => {
    return (
      <CardRoot elevation={6}>
        <CardTitle subtitle={subtitle}>{title}</CardTitle>
        {subtitle && <Box sx={{ mb: 2 }}>{subtitle}</Box>}
        {children}
      </CardRoot>
    );
  };

const Container = styled("div")(({ theme }) => ({
    margin: "30px",  
    [theme.breakpoints.down("sm")]: { margin: "16px" },
    "& .breadcrumb": {
        marginBottom: "30px",
        [theme.breakpoints.down("sm")]: { marginBottom: "16px" },
    },
}));

const StyledLoading = styled('div')(() => ({
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    '& img': {
        width: '100%',
        height: '100%',
    },
}));

const StyledTable = styled(Table)(() => ({
    width: '100%',
    whiteSpace: "pre",
    "& thead": {
        "& tr": { "& th": { paddingLeft: 0, paddingRight: 0 } },
    },  
    "& tbody": {
        "& tr": { "& td": { paddingLeft: 0, textTransform: "capitalize" } },
    },
}));


const EventDetail = () => { 
    const history = useHistory();
    const location = useLocation();
    const eventData = location.state.subscriber;  
    //const [userData,setUserData] = useState();    

    const handleButtonClick = () => {
        // Navigate back to the previous page
        history.go(-1);
    };

    console.log("oder data throgh props", eventData);        
    return(
        <Container>     
            <Button
                sx={{ mb: 2, pl: 1 }}
                variant="contained"
                color="primary"
                onClick={handleButtonClick}
            >
                <ArrowBackIcon aria-label="ArrowBackIcon" aria-haspopup="true" />
                Back
            </Button>
            <SimpleCard title={eventData?.full_name}>
                <StyledLoading>
                    <Grid container spacing={2}>
                        <Grid item md={6} xs={12}>
                            <Card sx={{ px: 4, py: 3 }} elevation={3}>
                                <Box>
                                    <StyledTable >
                                        <TableBody>
                                            <TableRow>
                                                <TableCell sx={{ fontWeight: 'bold' }}>Event Name </TableCell>
                                                <TableCell align="center">{eventData?.event_name}</TableCell>
                                            </TableRow>
                                            <TableRow>
                                                <TableCell sx={{ fontWeight: 'bold' }}>Description </TableCell>
                                                <TableCell align="center">{eventData?.description}</TableCell>
                                            </TableRow>
                                            <TableRow>
                                                <TableCell sx={{ fontWeight: 'bold' }}>Start Time </TableCell>
                                                <TableCell align="center">{eventData?.start_time}</TableCell>
                                            </TableRow>
                                            <TableRow>
                                                <TableCell sx={{ fontWeight: 'bold' }}>End Time</TableCell>
                                                <TableCell align="center">{eventData?.end_time}</TableCell>
                                            </TableRow>
                                            <TableRow>
                                                <TableCell sx={{ fontWeight: 'bold' }}>Event Date</TableCell>
                                                <TableCell align="center">{moment(eventData?.event_date).format('MMMM Do YYYY')}</TableCell>
                                            </TableRow>
                                        </TableBody> 
                                    </StyledTable> 
                                </Box>              
                            </Card>
                        </Grid>


                        <Grid item lg={6} md={6} sm={12} xs={12} >
                            <Card sx={{ px: 4, py: 0 }} elevation={3}>
                                <Box>
                                    <StyledTable >
                                        <TableBody>
                                            <TableRow>
                                                <TableCell sx={{ fontWeight: 'bold' }}>Max Players </TableCell>
                                                <TableCell align="center">{eventData?.max_players}</TableCell>
                                            </TableRow>
                                            <TableRow>
                                                <TableCell sx={{ fontWeight: 'bold' }}>Address</TableCell>
                                                <TableCell style={{ whiteSpace: 'pre-line', textAlign: 'center' }}>{eventData?.address}</TableCell>
                                            </TableRow>
                                            <TableRow>
                                                <TableCell sx={{ fontWeight: 'bold' }}>Location Hint</TableCell>
                                                <TableCell align="center">{eventData?.location_hint}</TableCell>
                                            </TableRow>
                                            <TableRow>
                                                <TableCell sx={{ fontWeight: 'bold' }}>Location</TableCell>
                                                {Array.isArray(eventData?.location) ? (
                                                    eventData.location.map((location, index) => (
                                                    <TableCell align="center" key={index}>
                                                        {index} - {location?.coordinates[0]} {location?.coordinates[1]}
                                                    </TableCell>
                                                    ))
                                                ) : (
                                                    <TableCell align="center">No locations available</TableCell>
                                                )}
                                            </TableRow>


                                            <TableRow>
                                                <TableCell sx={{ fontWeight: 'bold' }}>DAte</TableCell>
                                                <TableCell align="center">{moment(eventData?.createdAt).format('MMMM Do YYYY')}</TableCell>
                                            </TableRow>
                                            
                                        </TableBody>
                                    </StyledTable>
                                </Box>
                            </Card>
                        </Grid>
                    </Grid>
                </StyledLoading>
            </SimpleCard>
        </Container>  
    )
};

export default EventDetail;
