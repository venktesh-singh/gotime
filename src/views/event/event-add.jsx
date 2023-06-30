import React from 'react';
import { Stack } from '@mui/material';
import { styled } from '@mui/system';
import SimpleCard from './SimpleCard';
import { Button, Grid, TextField } from '@mui/material';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { updateEvent } from 'src/redux/actions/eventAction';
import { useHistory } from 'react-router-dom';  
import { ToastContainer, toast } from 'react-toastify';
import moment from "moment";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import 'react-toastify/dist/ReactToastify.css';
import 'react-datepicker/dist/react-datepicker.css';  

const Container = styled('div')(({ theme }) => ({
  margin: '30px',
  [theme.breakpoints.down('sm')]: { margin: '16px' },
  '& .breadcrumb': {
    marginBottom: '30px',
    [theme.breakpoints.down('sm')]: { marginBottom: '16px' },
  },
}));

const Form = styled('form')(() => ({
  paddingLeft: '16px',
  paddingRight: '16px',
}));

const StyledTextField = styled(TextField)(() => ({
  marginBottom: '16px',
}));



const AddEvent = () => {
    const dispatch = useDispatch();
    const history = useHistory();

    const handleSubmit = async (values) => {
      const formData = new FormData();
      formData.append('event_name', values.event_name);
      formData.append('description', values.description);
      formData.append('start_time', moment(values.start_time, 'HH:mm').format('HH:mm'));
      formData.append('end_time', moment(values.end_time, 'HH:mm').format('HH:mm'));
      formData.append('address', values.address);
      const formattedEventDate = moment(values.event_date).format('YYYY-MM-DD');
      formData.append('event_date', formattedEventDate);
      formData.append('max_players', values.max_players);
      formData.append('location_hint', values.location_hint);
      //formData.append('longitude', longitude);
      //formData.append('latitude', latitude);

      try {
        await dispatch(updateEvent(formData));
        toast.success('Event Added Successfully!');
        history.push('/event/event-list');
      } catch (error) {
        console.error('Error adding event:', error);
        toast.error('Failed to add event. Please try again later.');
      }
    };
  
  
    const handleButtonClick = () => {
        // Navigate back to the previous page
        history.goBack();
    };

  return (
    <>
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
            <Formik
              onSubmit={handleSubmit}
              enableReinitialize={true}
              initialValues={initialValues}
              validationSchema={eventSchema}
            >
              {({
                values,
                errors,
                touched,
                handleChange,
                handleBlur,
                handleSubmit,
              }) => (
                <Form onSubmit={handleSubmit}>  
                  <Grid container spacing={3}>
                    <Grid item sm={6} xs={12}>
                      <StyledTextField
                        fullWidth
                        name="event_name"
                        label="Event name"
                        size="small"
                        variant="outlined"
                        onBlur={handleBlur}
                        onChange={handleChange}
                        value={values.event_name || ''}
                        error={Boolean(touched.event_name && errors.event_name)}
                        helperText={touched.event_name && errors.event_name}
                      />
                      <StyledTextField
                        fullWidth
                        name="description"
                        label="Description"
                        size="small"
                        variant="outlined"
                        onBlur={handleBlur}
                        onChange={handleChange}
                        value={values.description || ''}
                        error={Boolean(touched.description && errors.description)}
                        helperText={touched.description && errors.description}
                      />
                      <StyledTextField
                        type="time"
                        name="start_time"
                        label="Start Time"
                        size="small"
                        variant="outlined"
                        onBlur={handleBlur}
                        onChange={handleChange}
                        value={values.start_time || ''}
                        error={Boolean(touched.start_time && errors.start_time)}
                        helperText={touched.start_time && errors.start_time}
                        style={{ color: '#000', width: '100%' }}
                      />
                      <StyledTextField
                        type="time"
                        name="end_time"
                        label="End Time"
                        size="small"
                        variant="outlined"
                        onBlur={handleBlur}
                        onChange={handleChange}
                        value={values.end_time || ''}
                        error={Boolean(touched.end_time && errors.end_time)}
                        helperText={touched.end_time && errors.end_time}
                        style={{ color: '#000', width: '100%' }}
                      />
                      <StyledTextField
                        type="date"
                        name="event_date"
                        label="Event Date"
                        size="small"
                        variant="outlined"
                        onBlur={handleBlur}
                        onChange={handleChange} // Add the onChange event handler
                        value={values.event_date || ''}
                        error={Boolean(touched.event_date && errors.event_date)}
                        helperText={touched.event_date && errors.event_date}
                        style={{ color: '#000', width: '100%' }}
                      />
                      <StyledTextField
                        fullWidth
                        name="max_players"
                        label="Max players"
                        size="small"
                        variant="outlined"
                        onBlur={handleBlur}
                        onChange={handleChange}
                        value={values.max_players || ''}
                        error={Boolean(touched.max_players && errors.max_players)}
                        helperText={touched.max_players && errors.max_players}
                      />
                      <StyledTextField
                        fullWidth
                        name="address"
                        label="Address"
                        size="small"
                        variant="outlined"
                        onBlur={handleBlur}
                        onChange={handleChange}
                        value={values.address || ''}
                        error={Boolean(touched.address && errors.address)}
                        helperText={touched.address && errors.address}
                      />
                      <StyledTextField
                        fullWidth
                        name="location_hint"
                        label="Location Hint"
                        size="small"
                        variant="outlined"
                        onBlur={handleBlur}
                        onChange={handleChange}
                        value={values.location_hint || ''}
                        error={Boolean(touched.location_hint && errors.location_hint)}
                        helperText={touched.location_hint && errors.location_hint}
                      />
                    </Grid>
                  </Grid>
                  <Button
                    type="submit"
                    color="primary"
                    variant="contained"
                    sx={{ mb: 2, px: 4, marginTop: '10px' }}
                  >
                    Add Event
                  </Button>
                </Form>
              )}
            </Formik>
          </SimpleCard>
        </Stack>
      </Container>
    </>
  );
};

const eventSchema = Yup.object().shape({
  event_name: Yup.string().required('Event name is required'),  
  description: Yup.string().required('Description is required'), 
  start_time: Yup.string().required('Start Time is required'), 
  end_time: Yup.string().required('End Time is required'), 
  event_date : Yup.string().required('Event Date is required'), 
  max_players: Yup.string().required('Max Players is required'), 
  address: Yup.string().required('Address is required'),
  location_hint: Yup.string().required('Location Hint is required'), 
  //profile_picture: Yup.string().required('Profile Picture is required'),
});

const initialValues = {
  event_name: '',
  description : '',
  start_time : '',
  end_time : '',
  event_date : '',
  max_players: '',
  address : '',
  location_hint : '',
  //profile_picture : '',
};

export default AddEvent;
