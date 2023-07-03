import React, { useState } from "react";
import { Card, styled, Grid, Box, TableBody, TableCell, Table, TableRow, Icon, Button } from "@mui/material";
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


const CategoryDetail = () => { 
    const history = useHistory();
    const location = useLocation();
    const slotData = location.state.subscriber;
    //const [userData,setUserData] = useState();    

    const handleButtonClick = () => {
        // Navigate back to the previous page
        history.go(-1);
    };

    console.log("oder data throgh props", slotData);        
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
            <SimpleCard title={slotData?.sport}>
                <StyledLoading>
                    <Grid container spacing={2}>
                        <Grid item lg={6} md={6} sm={12} xs={12} >
                            <Card sx={{ px: 4, py: 0 }} elevation={3}>
                                <Box>
                                    <StyledTable >
                                        <TableBody>
                                            
                                            <TableRow>
                                                <TableCell>Date</TableCell>
                                                <TableCell align="center">{moment(slotData?.date).format('MMMM Do YYYY')}</TableCell>
                                            </TableRow>
                                            <TableRow>
                                                <TableCell>Start Time</TableCell>
                                                <TableCell align="center">{moment(slotData?.startTime, 'HH:mm').format('HH:mm')}</TableCell>
                                            </TableRow>
                                            <TableRow>
                                                <TableCell>End Time</TableCell>
                                                <TableCell align="center">{moment(slotData?.endTime, 'HH:mm').format('HH:mm')}</TableCell>
                                            </TableRow>
                                            <TableRow>
                                                <TableCell>Max Players</TableCell>
                                                <TableCell align="center">{slotData.maxPlayers}</TableCell>
                                            </TableRow>
                                        </TableBody>
                                    </StyledTable>
                                </Box>
                            </Card>
                        </Grid>
                        <Grid item md={4} xs={12}>
                            
                        </Grid>


                        
                    </Grid>
                </StyledLoading>
            </SimpleCard>
        </Container>  
    )
};

export default CategoryDetail;
