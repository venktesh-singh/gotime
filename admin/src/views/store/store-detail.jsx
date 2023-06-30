import React, { useState } from "react";
import { Card, styled, Grid, Box, TableBody, TableCell, Table,  TableHead, TableRow, Icon, Button } from "@mui/material";
import { useLocation,useHistory  } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import moment from "moment";

const CardRoot = styled(Card)(() => ({
    height: '100%',   
    padding: '20px 24px',
  }));
  const FlexBox = styled(Box)(() => ({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    margin: "0 auto",
  }));
  const IMG = styled("img")(() => ({
    height: 45,
    width:45,
    borderRadius: "4px",
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


const StoreDetail = () => { 
    const history = useHistory();
    const location = useLocation();
    const userData = location.state.subscriber;
    //const [userData,setUserData] = useState();    

    const handleButtonClick = () => {
        // Navigate back to the previous page
        history.go(-1);
    };

    console.log("oder data throgh props", userData.category.description);          
    return(
        <Container>     
            <Button
                sx={{ mb: 2 }}
                variant="contained"
                color="primary"
                onClick={handleButtonClick}
            >
                <ArrowBackIcon aria-label="ArrowBackIcon" aria-haspopup="true" />
                Back
            </Button>
            <SimpleCard title={userData?.store_name}>
                <StyledLoading>
                    <Grid container spacing={2}>
                        <Grid item md={6} xs={12}>
                            <Card sx={{ px: 4, py: 3 }} elevation={3}>
                                <Box align="center">
                                    <img src={userData.image} alt="" />
                                </Box>
                            </Card>
                        </Grid>


                        <Grid item lg={6} md={6} sm={12} xs={12} >
                            <Card sx={{ px: 4, py: 0 }} elevation={3}>
                                <Box>
                                    <StyledTable >
                                        <TableBody>
                                            <TableRow>
                                                <TableCell>Website Url </TableCell>
                                                <TableCell align="center">{userData?.website_url}</TableCell>
                                            </TableRow>
                                            <TableRow>
                                                <TableCell>Description </TableCell>
                                                <TableCell align="center">{userData?.description}</TableCell>
                                            </TableRow>
                                            <TableRow>
                                                <TableCell>Address </TableCell>
                                                <TableCell align="center">{userData?.address}</TableCell>
                                            </TableRow>
                                            <TableRow>
                                                <TableCell>Date</TableCell>
                                                <TableCell align="center">{moment(userData?.createdAt).format('MMMM Do YYYY')}</TableCell>
                                            </TableRow>
                                            
                                        </TableBody>
                                    </StyledTable>
                                </Box>
                            </Card>
                        </Grid>

                        <Grid item md={12} xs={12}>
                        <Card sx={{ width: '100%', px: 4, py: 0 }} elevation={3}>
                        <h3>Booking Slots</h3>
                            <StyledTable>
                                
                                <TableHead>
                                    <TableRow>
                                    <TableCell align="center" sx={{ fontWeight: 'bold' }}>S. No.</TableCell>
                                    <TableCell align="center" sx={{ fontWeight: 'bold' }}>Start Time</TableCell>
                                    <TableCell align="center" sx={{ fontWeight: 'bold' }}>End Time</TableCell>
                                    <TableCell align="center" sx={{ fontWeight: 'bold' }}>Date</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {userData?.bookings?.map((data, index) => (
                                    <TableRow key={index}>
                                        <TableCell align="center">{index+1}</TableCell>
                                        <TableCell align="center">{data?.timing.start_time}</TableCell>
                                        <TableCell align="center">{data?.timing.end_time}</TableCell>
                                        <TableCell align="center">{moment(data?.date).format('MMMM Do YYYY')}</TableCell>
                                    </TableRow>
                                    ))}
                                </TableBody>
                               
                            </StyledTable>
                            </Card>
                        </Grid>
                     
                        <Grid item md={12} xs={12}>
                        <Card sx={{ width: '100%', px: 4, py: 0 }} elevation={3}>
                            <Grid item xs={12}>
                                <h3>Sports Slots</h3>
                            </Grid>
                            <Grid item xs={12}>
                                <StyledTable>
                                <TableHead>
                                    <TableRow>
                                    <TableCell align="center" sx={{ fontWeight: 'bold' }}>S. No.</TableCell>
                                    <TableCell align="center" sx={{ fontWeight: 'bold' }}>Image</TableCell>
                                    <TableCell align="center" sx={{ fontWeight: 'bold' }}>Name</TableCell>
                                    <TableCell align="center" sx={{ fontWeight: 'bold' }}>Description</TableCell>
                                    <TableCell align="center" sx={{ fontWeight: 'bold' }}>Date</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {userData?.sports?.map((sport, index) => (
                                    <React.Fragment key={index}>
                                        <TableRow>
                                        <TableCell align="center">{index + 1}</TableCell>
                                        <TableCell align="center">
                                            <FlexBox>
                                            <Box>
                                                <IMG align="center" src={sport.images} alt="IMG" />
                                            </Box>
                                            </FlexBox>
                                        </TableCell>
                                        <TableCell align="center">{sport?.name}</TableCell>
                                        <TableCell style={{ whiteSpace: 'pre-line', textAlign: 'justify' }}>{sport?.description}</TableCell>
                                        <TableCell align="center">{moment(sport?.date).format('MMMM Do YYYY')}</TableCell>
                                        </TableRow>
                                        {sport?.timing?.map((sporttiming, index) => (
                                        <React.Fragment key={`${index}-${sport?.name}`}>
                                            <TableRow>
                                            <TableCell sx={{ fontWeight: 'bold' }} align="center" colSpan={5}>{moment(sporttiming?.date).format('MMMM Do YYYY')}</TableCell>
                                            </TableRow>
                                            {sporttiming?.slots?.map((slot, index) => (
                                            <TableRow key={`${index}-${slot?.start}-${slot?.end}`}>
                                                <TableCell align="center" colSpan={2}>Slots</TableCell>
                                                <TableCell align="center">{slot?.start} - {slot?.end}</TableCell>
                                                <TableCell align="center" colSpan={2}></TableCell>
                                            </TableRow>
                                            ))}
                                        </React.Fragment>
                                        ))}
                                    </React.Fragment>
                                    ))}
                                </TableBody>
                                </StyledTable>
                            </Grid>
                            </Card>
                        </Grid>

                        <Grid item md={12} xs={12}>
                        <Card sx={{ width: '100%', px: 4, py: 0 }} elevation={3}>
                            <Grid item xs={12}>
                                <h3>Category</h3>
                            </Grid>
                            <Grid item xs={12}>
                                <StyledTable>
                                <TableHead>
                                    <TableRow>
                                    <TableCell align="center" sx={{ fontWeight: 'bold' }}>S. No.</TableCell>
                                    <TableCell align="center" sx={{ fontWeight: 'bold' }}>Image</TableCell>
                                    <TableCell align="center" sx={{ fontWeight: 'bold' }}>Description</TableCell>
                                    <TableCell align="center" sx={{ fontWeight: 'bold' }}>Date</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody> 
                                    {userData?.category?.map((cat, index) => (
                                    <React.Fragment key={index}>
                                        <TableRow>
                                        <TableCell align="center">{index + 1}</TableCell>
                                        <TableCell align="center">
                                            <FlexBox>
                                            <Box>
                                                <IMG align="center" src={cat.image} alt="IMG" />
                                            </Box>
                                            </FlexBox>
                                        </TableCell>
                                        <TableCell style={{ whiteSpace: 'pre-line', textAlign: 'justify' }}>{cat?.description}</TableCell>
                                        <TableCell align="center">{moment(cat?.createdAt).format('MMMM Do YYYY')}</TableCell>
                                        </TableRow>
                                    </React.Fragment>
                                    ))}
                                </TableBody>
                                </StyledTable>
                            </Grid>
                            </Card>
                        </Grid>
                        
                    </Grid>
                </StyledLoading>
            </SimpleCard>
        </Container>  
    )
};

export default StoreDetail;
