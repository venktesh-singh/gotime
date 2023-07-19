import React, { useState } from "react";
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { CSVLink } from 'react-csv';
import {
  Card,
  Box,
  Icon,
  styled,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TableContainer,
  Paper,
  TablePagination,
  Button,
  TextField  
} from "@mui/material";
import EditIcon from '@mui/icons-material/Edit';
import PreviewIcon from '@mui/icons-material/Preview';
import DeleteIcon from '@mui/icons-material/Delete';
import moment from "moment";
import AddIcon from '@mui/icons-material/Add';

const Container = styled('div')(({ theme }) => ({
  margin: '30px',
  [theme.breakpoints.down('sm')]: { margin: '16px' },
  '& .breadcrumb': {
    marginBottom: '30px',
    [theme.breakpoints.down('sm')]: { marginBottom: '16px' },
  },
}));

const StyledTextField = styled(TextField)(() => ({
  marginBottom: '16px',
  padding:'0px'
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

const StyledTable = styled(Table)(() => ({
  minWidth: '1000',
  whiteSpace: "pre",
  "& thead": {
    "& tr": { "& th": { paddingLeft: 0, paddingRight: 0, fontSize: '1rem' } },
  },
  "& tbody": {
    "& tr": { "& td": { paddingLeft: 0, textTransform: "capitalize" } },
  },
}
));


const StoreBooking = () => {
  const [page, setPage] = useState(0);
  const [dataList, setDataList] = useState([]);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchQueryChange = (event) => {
    const query = event.target.value;
    setSearchQuery(query);
  };


  const handleChangePage = (_, newPage) => {
      setPage(newPage);
  };  
  const handleChangeRowsPerPage = (event) => {
      setRowsPerPage(+event.target.value);
      setPage(0);
  };
  
  const paginationta =  useSelector(state => state?.dataList?.store);  
  console.log("Sia Store Data", dataList?.store);    
    fetch('https://gotimeapi.onrender.com/api/store/allstore')  
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
      console.error('Error fetching Store Booking data:', error);
    });

    const handleDownloadCSV = () => {
      if (!dataList || !dataList.store) {
        return null;
      }
    
      // Prepare the CSV data
      const csvData = dataList.store.map((subscriber, index) => {
        const categoryPic = Array.isArray(subscriber.image) ? subscriber.image.join(', ') : subscriber.image;
        return {
          SNo: index + 1,
          'Store Pic': categoryPic,
          'Store Name': subscriber.store_name,
          'Website Url': subscriber.website_url,
          Date: moment(subscriber?.createdAt).format('MMMM Do YYYY'),
        };
      });
    
      // Define the CSV headers
      const headers = [
        { label: 'S.No.', key: 'SNo' },
        { label: 'Store Pic', key: 'Store Pic' },
        { label: 'Store Name', key: 'Store Name' },
        { label: 'Website Url', key: 'Website Url' },
        { label: 'Date', key: 'Date' },
      ];
    
      // Trigger the CSV download
      const csvOptions = {
        filename: 'store_booking_data.csv',
        headers: headers,
      };
    
      return (
        <CSVLink data={csvData} {...csvOptions} style={{ color: '#fff', textDecoration: 'none' }}>
          Download CSV
        </CSVLink>
      );
    };
    

  return (
    <Container>
      
      <Button
        sx={{
          mb: 2,
          pl: 1,
          '&:hover': {
            backgroundColor: 'primary.main',
            color:'#fff'
          },
        }}
        variant="contained"
        color="primary"
        component={Link}
        to="/store-booking/add-storebooking"
      >
        <AddIcon aria-label="AddIcon"   aria-haspopup="true"/>
        Add New Store
      </Button>
      <StyledTextField
        size="small"
        type="text"
        value={searchQuery}
        onChange={(event) => handleSearchQueryChange(event)}
        placeholder="Search by Title"
        style={{ float: 'right',backgroundColor:'#fff',padding: '0px' }}
      />
      <TableContainer component={Paper} sx={{ px: 0 }}>
        <Card sx={{ px: 0, py: 0 }} elevation={1}>
          <Box width="100%" overflow="auto">
            <StyledTable>
              <TableHead>
                <TableRow>
                  <TableCell align="center" sx={{ fontWeight: 'bold' }}>S.No.</TableCell>
                  <TableCell align="center" sx={{ fontWeight: 'bold' }}>Store Pic</TableCell>
                  <TableCell align="center" sx={{ fontWeight: 'bold' }}>Store Name</TableCell>
                  <TableCell align="center" sx={{ fontWeight: 'bold' }}>Website Url</TableCell>
                  <TableCell align="center" sx={{ fontWeight: 'bold' }}>Date</TableCell>
                  <TableCell align="center" sx={{ fontWeight: 'bold' }}>Action</TableCell>
                </TableRow>
              </TableHead>

              <TableBody>
               {dataList?.store
                    ?.filter((subscriber) =>
                      subscriber.store_name &&
                      subscriber.store_name.toLowerCase().includes(searchQuery.toLowerCase()))
                    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                    .map((subscriber, index) => (
                  
                  <TableRow key={index}>
                    <TableCell align="center">{index + 1}</TableCell>
                    <TableCell align="center">
                      <FlexBox>
                          <Box>
                            <IMG align="center" src={subscriber.image}  alt="IMG" />
                          </Box>
                      </FlexBox>
                    </TableCell>
                    <TableCell align="center">{subscriber?.store_name}</TableCell>
                    <TableCell align="center">{subscriber?.website_url}</TableCell>
                    <TableCell align="center">{moment(subscriber?.createdAt).format('MMMM Do YYYY')}</TableCell>
                    <TableCell align="center">
                    
                      <Link sx={{ m: 0.5 }} variant="contained" to={{ pathname: "/store-booking/detail-storebooking", state: { subscriber }}} name="Store booking Details" >
                        <PreviewIcon
                            aria-label="PreviewIcon"
                            aria-haspopup="true">
                            <Icon color="primary">view</Icon>
                        </PreviewIcon>
                      </Link>     
                      <Link sx={{ m: 0.5 }} variant="contained" to={{ pathname: "/store-booking/edit-storebooking", state: { subscriber }}} name="Store booking Edit">
                        <EditIcon
                          aria-label="EditIcon"
                          aria-haspopup="true"
                        >
                          <Icon color="primary">edit</Icon>
                        </EditIcon>
                      </Link>  
                      <DeleteIcon
                        aria-label="delete"
                        aria-haspopup="true"
                        //onClick={() => deleteUsers(subscriber?._id)}
                      >
                        <Icon color="error">close</Icon>
                      </DeleteIcon>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </StyledTable>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', px: 2 }}>  
              <Button variant="contained" >
                  {handleDownloadCSV()}
              </Button>
              <TablePagination
                sx={{ px: 2 }}  
                page={page}
                component="div"
                rowsPerPage={rowsPerPage}
                count={paginationta?.length}  
                onPageChange={handleChangePage}
                rowsPerPageOptions={[20, 40, 60]}
                onRowsPerPageChange={handleChangeRowsPerPage}
                nextIconButtonProps={{ "aria-label": "Next Page" }}
                backIconButtonProps={{ "aria-label": "Previous Page" }}
            />
            </Box>
          </Box>
        </Card>  
      </TableContainer>
    </Container>  
  );
};

export default StoreBooking;


