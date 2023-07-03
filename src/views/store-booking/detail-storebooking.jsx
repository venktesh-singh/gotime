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


const DetailStoreBooking = () => { 
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
                    </Grid>
                </StyledLoading>
            </SimpleCard>
        </Container>  
    )
};

export default DetailStoreBooking;
