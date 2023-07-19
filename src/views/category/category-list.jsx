import React, { useState } from "react";
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom'
import { useHistory } from 'react-router-dom';  
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


const Category = () => {
  const [page, setPage] = useState(0);
  const history = useHistory();
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
 
    fetch('https://gotimeapi.onrender.com/api/category')  
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
      if (!dataList || !dataList.data) {
        return null;
      }
    
      // Prepare the CSV data
      const csvData = dataList.data.map((subscriber, index) => {
        const categoryPic = Array.isArray(subscriber.image) ? subscriber.image.join(', ') : subscriber.image;
        return {
          SNo: index + 1,
          'Category Pic': categoryPic,
          Name: subscriber?.name,
          Date: moment(subscriber?.createdAt).format('MMMM Do YYYY'),
        };
      });
    
      // Define the CSV headers
      const headers = [
        { label: 'S.No.', key: 'SNo' },
        { label: 'Category Pic', key: 'Category Pic' },
        { label: 'Name', key: 'Name' },
        { label: 'Date', key: 'Date' },
      ];
    
      // Trigger the CSV download
      const csvOptions = {
        filename: 'category_data.csv',
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
        to="/category/category-add"
      >
        <AddIcon aria-label="AddIcon"   aria-haspopup="true"/>
        Add New Category
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
                  <TableCell align="center" sx={{ fontWeight: 'bold' }}>Category Pic</TableCell>
                  <TableCell align="center" sx={{ fontWeight: 'bold' }}>Name</TableCell>
                  <TableCell align="center" sx={{ fontWeight: 'bold' }}>Date</TableCell>
                  <TableCell align="center" sx={{ fontWeight: 'bold' }}>Action</TableCell>
                </TableRow>
              </TableHead>

              <TableBody>
              {dataList?.data
                ?.filter((subscriber) =>
                  subscriber.name &&
                  subscriber.name.toLowerCase().includes(searchQuery.toLowerCase()))
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
                    <TableCell align="center">{subscriber?.name}</TableCell>
                    <TableCell align="center">{moment(subscriber?.createdAt).format('MMMM Do YYYY')}</TableCell>
                    <TableCell align="center">
                    
                      <Link sx={{ m: 0.5 }} variant="contained" to={{ pathname: "/category/category-detail", state: { subscriber }}} name="Category Detail" >
                        <PreviewIcon
                            aria-label="PreviewIcon"
                            aria-haspopup="true">
                            <Icon color="primary">view</Icon>
                        </PreviewIcon>
                      </Link>     
                      <Link sx={{ m: 0.5 }} variant="contained" to={{ pathname: "/category/category-edit", state: { subscriber }}} name="Category Edit">
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
  );
};

export default Category;  


