import React, { useState } from "react";
import { Link } from 'react-router-dom'
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
import { getUserList,deleteUser } from 'src/redux/actions/userAction';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useSelector, useDispatch } from 'react-redux';

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


const Users = () => {
  const [page, setPage] = useState(0);
  const dispatch = useDispatch();
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
  
  const paginationta =  useSelector(state => state?.dataList?.data);
  console.log("Sia User Data", dataList.data);    
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

    const handleDownloadCSV = () => {
      if (!dataList || !dataList?.data) {
        return null;
      }
    
      // Prepare the CSV data
      const csvData = dataList?.data?.map((subscriber, index) => {
        const profilePic = Array.isArray(subscriber.profile_picture) ? subscriber.profile_picture.join(', ') : subscriber.profile_picture;
        return {
          SNo: index + 1,
          'Profile Pic': profilePic,
          'Full Name': subscriber.full_name,
          'Email': subscriber.email,
          'Contact Number': subscriber.contact_number,
          Date: moment(subscriber?.createdAt).format('MMMM Do YYYY'),
        };
      });
    
      // Define the CSV headers
      const headers = [
        { label: 'S.No.', key: 'SNo' },
        { label: 'Profile Pic', key: 'Profile Pic' },
        { label: 'Full Name', key: 'Full Name' },
        { label: 'Email', key: 'Email' },
        { label: 'Contact Number', key: 'Contact Number' },
        { label: 'Date', key: 'Date' },
      ];
    
      // Trigger the CSV download
      const csvOptions = {
        filename: 'user_data.csv',
        headers: headers,
      };
    
      return (
        <CSVLink data={csvData} {...csvOptions} style={{ color: '#fff', textDecoration: 'none' }}>
          Download CSV
        </CSVLink>
      );
    };

    
  const deleteUsers = async (id) => {
    try {
      await dispatch(deleteUser(id));
      toast.success('User Deleted Successfully!', {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
      dispatch(getUserList());
    } catch (error) {
      toast.error('Failed to delete user!', {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    }
  };
    
  return (
    <>
    <ToastContainer
      position="top-center"
      theme="dark"
      autoClose={2000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
    />
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
        to="/users/add-user"
      >
        <AddIcon aria-label="AddIcon"   aria-haspopup="true"/>
        Add New User
      </Button>
      <StyledTextField
        size="small"
        type="text"
        value={searchQuery}
        onChange={(event) => handleSearchQueryChange(event)}
        placeholder="Search by Name"
        style={{ float: 'right',backgroundColor:'#fff',padding: '0px' }}
      />
      <TableContainer component={Paper} sx={{ px: 0 }}>
        <Card sx={{ px: 0, py: 0 }} elevation={1}>
          <Box width="100%" overflow="auto">
            <StyledTable>
              <TableHead>
                <TableRow>
                  <TableCell align="center" sx={{ fontWeight: 'bold' }}>S.No.</TableCell>
                  <TableCell align="center" sx={{ fontWeight: 'bold' }}>Profile Pic</TableCell>
                  <TableCell align="center" sx={{ fontWeight: 'bold' }}>Full Name</TableCell>
                  <TableCell align="center" sx={{ fontWeight: 'bold' }}>Email</TableCell>
                  <TableCell align="center" sx={{ fontWeight: 'bold' }}>Phone</TableCell>
                  <TableCell align="center" sx={{ fontWeight: 'bold' }}>Date</TableCell>
                  <TableCell align="center" sx={{ fontWeight: 'bold' }}>Action</TableCell>
                </TableRow>
              </TableHead>

              <TableBody>
              {dataList?.data
                ?.filter((subscriber) =>
                  subscriber.full_name &&
                  subscriber.full_name.toLowerCase().includes(searchQuery.toLowerCase()))
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((subscriber, index) => (
                  <TableRow key={index}>
                    <TableCell align="center">{index + 1}</TableCell>
                    <TableCell align="center">
                      <FlexBox>
                          <Box>
                            {subscriber.profile_picture ? (
                            <IMG align="center"
                              src={subscriber.profile_picture}
                              className="c-avatar-img"
                              alt={subscriber.email}
                            />
                          ) : (
                            <IMG align="center"
                              src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
                              className="c-avatar-img"
                              alt="Dummy Image"
                            />
                          )}
                          </Box>
                      </FlexBox>
                    </TableCell>
                    <TableCell align="center">{subscriber.full_name}</TableCell>
                    <TableCell align="center">{subscriber.email}</TableCell>
                    <TableCell align="center">{subscriber.contact_number}</TableCell>
                    <TableCell align="center">{moment(subscriber?.createdAt).format('MMMM Do YYYY')}</TableCell>
                    <TableCell align="center">
                    
                      <Link sx={{ m: 0.5 }} variant="contained" to={{ pathname: "/users/user-details", state: { subscriber }}} name="User Details" >
                        <PreviewIcon
                            aria-label="PreviewIcon"
                            aria-haspopup="true">
                            <Icon color="primary">view</Icon>
                        </PreviewIcon>
                      </Link>     
                      <Link sx={{ m: 0.5 }} variant="contained" to={{ pathname: "/users/edit-user", state: { subscriber }}} name="User Edit">
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
                        onClick={() => deleteUsers(subscriber?._id)}
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
                rowsPerPageOptions={[10, 20, 30]}
                onRowsPerPageChange={handleChangeRowsPerPage}
                nextIconButtonProps={{ "aria-label": "Next Page" }}
                backIconButtonProps={{ "aria-label": "Previous Page" }}
            />
            </Box>
          </Box>
        </Card>  
      </TableContainer>
    </Container>  
    </>
  );
};

export default Users;


