import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
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
  

  const [updatedData, setUpdatedData] = useState({
    event_name: EventEdit.event_name || '',
    description: EventEdit.description || '',
    start_time: moment(EventEdit.start_time, 'HH:mm').format('HH:mm') || '',
    end_time: moment(EventEdit.end_time, 'HH:mm').format('HH:mm') || '',
    event_date: moment(EventEdit.event_date).format('YYYY-MM-DD'),
    address: EventEdit.address || '',
    max_players: EventEdit.max_players || '',
    location_hint: EventEdit.location_hint || '',
  });
  
  //console.log('Event Edit Data:', updatedData);
  
  useEffect(() => {
    ValidatorForm.addValidationRule('isNameNotEmpty', (value) => {
      if (value.trim().length === 0) {
        return false;
      }
      return true;
    });
  
    return () => {
      ValidatorForm.removeValidationRule('isNameNotEmpty');
    };
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
      const response = await fetch(`https://go-time.onrender.com/api/event/`, {     
        method: 'post',        
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedData),
      });

      if (response.ok) {
        // Update successful
        dispatch(updateEvent(updatedData));
        history.push('/event/event-list');  
      } else {
        // Update failed
        // Handle error scenario
      }
    } catch (error) {
      console.error('Error updating data:', error);
      // Handle error scenario
    }
  };

  const handleButtonClick = () => {
    history.goBack(); 
  };

  return (
    <div>
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
                        validators={['required', 'isNameNotEmpty']}
                        errorMessages={['This field is required', 'Please enter a valid full name']}
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
