import React, { useState, useEffect } from 'react';
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
} from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import PreviewIcon from '@mui/icons-material/Preview';
import DeleteIcon from '@mui/icons-material/Delete';
import moment from 'moment';
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
}));

const StyledTable = styled(Table)(() => ({
  minWidth: '1000',
  whiteSpace: 'pre',
  '& thead': {
    '& tr': { '& th': { paddingLeft: 0, paddingRight: 0, fontSize: '1rem' } },
  },
  '& tbody': {
    '& tr': { '& td': { paddingLeft: 0, textTransform: 'capitalize' } },
  },
}));

const EventList = () => {
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

  useEffect(() => {
    fetch('https://gotimeapi.onrender.com/api/event/get')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Error: ' + response.status);
        }
        return response.json();
      })
      .then((data) => {
        setDataList(data);
      })
      .catch((error) => {
        console.error('Error fetching Event data:', error);
      });
  }, []);

  const handleDownloadCSV = () => {
    if (!dataList || !dataList.data) {
      return null;
    }
  
    // Prepare the CSV data
    const csvData = dataList.data.map((subscriber,index) => ({
      SNo: index+1,
      'Event Name': subscriber.event_name,
      Description: subscriber.description,
      'Start Time': subscriber?.start_time,
      'End Time': subscriber?.end_time,
    }));
  
    // Define the CSV headers
    const headers = [
      { label: 'S.No.', key: 'SNo' },
      { label: 'Event Name', key: 'Event Name' },
      { label: 'Description', key: 'Description' },
      { label: 'Start Time', key: 'Start Time' },
      { label: 'End Time', key: 'End Time' },
      { label: 'Date', key: 'Date' },
    ];
  
    // Trigger the CSV download
    const csvOptions = {
      filename: 'event_data.csv',
      headers: headers,
    };
  
    return (
      <CSVLink data={csvData} {...csvOptions} style={{ color: '#fff',textDecoration:'none' }}>
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
            color: '#fff',
          },
        }}
        variant="contained"
        color="primary"
        component={Link}
        to="/event/event-add"
      >
        <AddIcon aria-label="AddIcon" aria-haspopup="true" />
        Add New Event
      </Button>
      <StyledTextField
        size="small"
        type="text"
        value={searchQuery}
        onChange={handleSearchQueryChange}
        placeholder="Search by event name"
        style={{ float: 'right',backgroundColor:'#fff' }}
      />

      <TableContainer component={Paper} sx={{ px: 0 }}>
        <Card sx={{ px: 0, py: 0 }} elevation={1}>
          <Box width="100%" overflow="auto">
            <StyledTable>
              <TableHead>
                <TableRow>
                  <TableCell align="center" sx={{ fontWeight: 'bold' }}>
                    S.No.
                  </TableCell>
                  <TableCell align="center" sx={{ fontWeight: 'bold' }}>
                    Event Name
                  </TableCell>
                  <TableCell align="center" sx={{ fontWeight: 'bold' }}>
                    Description
                  </TableCell>
                  <TableCell align="center" sx={{ fontWeight: 'bold' }}>
                    Start Time
                  </TableCell>
                  <TableCell align="center" sx={{ fontWeight: 'bold' }}>
                    End Time
                  </TableCell>
                  <TableCell align="center" sx={{ fontWeight: 'bold' }}>
                    Date
                  </TableCell>
                  <TableCell align="center" sx={{ fontWeight: 'bold' }}>
                    Action
                  </TableCell>
                </TableRow>
              </TableHead>

              <TableBody>
                {dataList?.data
                  ?.filter((subscriber) =>
                    subscriber.event_name
                      .toLowerCase()
                      .includes(searchQuery.toLowerCase())
                  )
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((subscriber, index) => (
                    <TableRow key={index}>
                      <TableCell align="center">{index + 1}</TableCell>
                      <TableCell align="center">{subscriber.event_name}</TableCell>
                      <TableCell align="center">{subscriber.description}</TableCell>
                      <TableCell align="center">{subscriber.start_time}</TableCell>
                      <TableCell align="center">{subscriber.end_time}</TableCell>
                      <TableCell align="center">
                        {moment(subscriber?.createdAt).format('MMMM Do YYYY')}
                      </TableCell>
                      <TableCell align="center">
                        <Link
                          sx={{ m: 0.5 }}
                          variant="contained"
                          to={{ pathname: '/event/event-detail', state: { subscriber } }}
                          name="Event Details"
                        >
                          <PreviewIcon aria-label="PreviewIcon" aria-haspopup="true">
                            <Icon color="primary">view</Icon>
                          </PreviewIcon>
                        </Link>
                        <Link
                          sx={{ m: 0.5 }}
                          variant="contained"
                          to={{ pathname: '/event/event-edit', state: { subscriber } }}
                          name="Event Edit"
                        >
                          <EditIcon aria-label="EditIcon" aria-haspopup="true">
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
              count={dataList?.data?.length || 0}
              onPageChange={handleChangePage}
              rowsPerPageOptions={[10, 20, 30]}
              onRowsPerPageChange={handleChangeRowsPerPage}
              nextIconButtonProps={{ 'aria-label': 'Next Page' }}
              backIconButtonProps={{ 'aria-label': 'Previous Page' }}
            />
            </Box>
          </Box>
        </Card>
      </TableContainer>
    </Container>
  );
};

export default EventList;
