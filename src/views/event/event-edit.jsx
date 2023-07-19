import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory, useLocation } from 'react-router-dom';
import {
  Button,
  Grid,
  Stack,
  styled,
} from '@mui/material';
import SimpleCard from './SimpleCard';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import SendIcon from '@mui/icons-material/Send';
import { TextValidator, ValidatorForm } from 'react-material-ui-form-validator';
import { updateEvent } from 'src/redux/actions/eventAction';
import moment from "moment";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'react-datepicker/dist/react-datepicker.css'; 
  
const StyledTextField = styled(TextValidator)(({ theme }) => ({
  width: '100%',
  marginBottom: '16px',
}));

const Container = styled('div')(({ theme }) => ({
  margin: '30px',
}));

const EditEvent = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const location = useLocation();
  const eventData = location.state;
  const EventEdit = eventData.subscriber
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLatitude(position.coords.latitude);
          setLongitude(position.coords.longitude);
        },
        (error) => {
          console.log(error.message);
        }
      );
    } else {
      console.log('Geolocation is not supported by this browser.');
    }
  }, []);
  

  const [updatedData, setUpdatedData] = useState({
    event_name: EventEdit.event_name || '',
    description: EventEdit.description || '',
    start_time: moment(EventEdit.start_time, 'HH:mm').format('HH:mm') || '',
    end_time: moment(EventEdit.end_time, 'HH:mm').format('HH:mm') || '',
    event_date: moment(EventEdit.event_date).format('YYYY-MM-DD'),
    address: EventEdit.address || '',
    max_players: EventEdit.max_players || '',
    location_hint: EventEdit.location_hint || '',
    location:{
      latitude:latitude,
      longitude:longitude
    }
  });
  
  console.log('Event Edit Data:', updatedData);
  
  useEffect(() => {

    ValidatorForm.addValidationRule('isNameNotEmpty', (value) => {
      if (typeof value !== 'string') {
        return false;
      }
      if (value.trim().length === 0) {
        return false;
      }
      return true;
    });

    ValidatorForm.addValidationRule('isNumber', (value) => {
      return !isNaN(value);
    });
  
    return () => {
      ValidatorForm.removeValidationRule('isNumber');
      ValidatorForm.removeValidationRule('isNameNotEmpty');
    }
  
  }, []);
  
  

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUpdatedData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      await dispatch(updateEvent(eventData));
      toast.success('Event Added Successfully!');
     // history.push('/event/event-list');
    } catch (error) {
      console.error('Error adding event:', error);
      toast.error('Failed to add event. Please try again later.');
    }
  };

  const handleButtonClick = () => {
    history.goBack(); 
  };

  return (
    <div>
      <ToastContainer
        position="top-center"
        theme="colored"
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
          sx={{ mb: 2, pl: 1 }}
          variant="contained"
          color="primary"
          onClick={handleButtonClick}
        >
          <ArrowBackIcon aria-label="ArrowBackIcon" aria-haspopup="true" />
          Back
        </Button>

        <Stack spacing={3}>
        <SimpleCard title="Add New Event">
          <ValidatorForm onSubmit={handleSubmit} onError={() => null}>
            <Grid container spacing={6}>
              <Grid item lg={6} md={6} sm={12} xs={12} sx={{ mt: 2 }}>
                      <StyledTextField
                        type="text"
                        fullWidth
                        size="small"
                        name="event_name"
                        id="event_name"
                        value={updatedData.event_name}
                        onChange={handleInputChange}
                        label="Event name"
                        validators={['required', 'isNameNotEmpty']}
                        errorMessages={['This field is required', 'Please enter a valid full name']}
                      />

                      <StyledTextField
                        type="text"
                        fullWidth
                        size="small"
                        name="description"
                        id="description"
                        value={updatedData.description}
                        onChange={handleInputChange}
                        label="Description"
                        validators={['required', 'isNameNotEmpty']}
                        errorMessages={['This field is required', 'Please enter a valid full name']}
                      />

                     
                      <StyledTextField
                        type="time"
                        fullWidth
                        size="small"
                        name="start_time"
                        id="start_time"
                        value={updatedData.start_time}
                        onChange={handleInputChange}
                        label="Start Time"
                        validators={['required', 'isNameNotEmpty']}
                        errorMessages={['This field is required', 'Please enter a valid full name']}
                      />

                      <StyledTextField
                        type="time"
                        fullWidth
                        size="small"
                        name="end_time"
                        id="end_time"
                        value={updatedData.end_time}
                        onChange={handleInputChange}
                        label="End Time"
                        validators={['required', 'isNameNotEmpty']}
                        errorMessages={['This field is required', 'Please enter a valid full name']}
                      />

                      <StyledTextField
                        type="date"
                        fullWidth
                        size="small"
                        name="event_date"
                        id="event_date"
                        value={updatedData.event_date}
                        onChange={handleInputChange}
                        label="Event Date"
                        validators={['required', 'isNameNotEmpty']}
                        errorMessages={['This field is required', 'Please enter a valid full name']}
                      />

                      <StyledTextField
                        type="number"
                        fullWidth
                        size="small"
                        name="max_players"
                        id="max_players"
                        value={updatedData.max_players}
                        onChange={handleInputChange}
                        label="Max players"
                        validators={['required', 'isNumber']}
                        errorMessages={['This field is required', 'Please enter a valid max players']}
                      />

                      <StyledTextField
                        fullWidth
                        size="small"
                        name="address"
                        id="address"
                        value={updatedData.address}
                        onChange={handleInputChange}
                        label="Address"
                        validators={['required', 'isNameNotEmpty']}
                        errorMessages={['This field is required', 'Please enter a valid full name']}
                      />

                      <StyledTextField
                        fullWidth
                        size="small"
                        name="location_hint"
                        id="location_hint"
                        value={updatedData.location_hint}
                        onChange={handleInputChange}
                        label="Location Hint"
                        validators={['required', 'isNameNotEmpty']}
                        errorMessages={['This field is required', 'Please enter a valid full name']}
                      />
                
              </Grid>
            </Grid>

            <Button color="primary" variant="contained" type="submit">
              <SendIcon aria-label="send" aria-haspopup="true" />
              Update Event
            </Button>
          </ValidatorForm>
          </SimpleCard>
        </Stack>
      </Container>
    </div>
  );
};


export default EditEvent;
