import React, { useState } from 'react';
import { Stack } from '@mui/material';
import { styled } from '@mui/system';
import SimpleCard from './SimpleCard';
import { Button, Grid, TextField } from '@mui/material';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { addupdateSlot } from 'src/redux/actions/slotAction';
import { useHistory } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import 'react-toastify/dist/ReactToastify.css';
import moment from 'moment';

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

const AddSlot = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [uploading, setUploading] = useState(false);

  const handleSubmit = async (values) => {
    const formData = new FormData();
    formData.append('sport', values.sport);
    formData.append('maxPlayers', values.maxPlayers);
    formData.append('startTime',moment(values.startTime, 'HH:mm').format('HH:mm'));
    formData.append('endTime', moment(values.endTime, 'HH:mm').format('HH:mm'));
    const formattedEventDate = moment(values.date).format('YYYY-MM-DD');
    formData.append('date', formattedEventDate);
  
    try {
      await dispatch(addupdateSlot(formData));
      toast.success('Slots Added Successfully!');
      history.push('/slot/slot-list');
    } catch (error) {
      console.error('Error adding slots:', error);
      toast.error('Failed to add slots. Please try again later.');
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
          <SimpleCard title="Add New Slot">
            <Formik
              onSubmit={handleSubmit}
              enableReinitialize={true}
              initialValues={initialValues}
              validationSchema={slotSchema}
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
                        name="sport"
                        label="Sport Name"
                        size="small"
                        variant="outlined"
                        onBlur={handleBlur}
                        onChange={handleChange}
                        value={values.sport || ''}
                        error={Boolean(touched.sport && errors.sport)}
                        helperText={touched.sport && errors.sport}
                      />

                      <StyledTextField
                        type="date"
                        name="date"
                        label="Date"
                        size="small"
                        variant="outlined"
                        onBlur={handleBlur}
                        onChange={handleChange}
                        value={values.date || ''}
                        error={Boolean(touched.date && errors.date)}
                        helperText={touched.date && errors.date}
                        style={{ color: '#000', width: '100%' }}
                      />

                      <StyledTextField
                        type="time"
                        name="startTime"
                        label="Start Time"
                        size="small"
                        variant="outlined"
                        onBlur={handleBlur}
                        onChange={handleChange}
                        value={values.startTime || ''}
                        error={Boolean(touched.startTime && errors.startTime)}
                        helperText={touched.startTime && errors.startTime}
                        style={{ color: '#000', width: '100%' }}
                      />
                      <StyledTextField
                        type="time"
                        name="endTime"
                        label="End Time"
                        size="small"
                        variant="outlined"
                        onBlur={handleBlur}
                        onChange={handleChange}
                        value={values.endTime || ''}
                        error={Boolean(touched.endTime && errors.endTime)}
                        helperText={touched.endTime && errors.endTime}
                        style={{ color: '#000', width: '100%' }}
                      />

                      <StyledTextField
                        fullWidth
                        name="maxPlayers"
                        label="Max Players"
                        size="small"
                        variant="outlined"
                        onBlur={handleBlur}
                        onChange={handleChange}
                        value={values.maxPlayers || ''}
                        error={Boolean(touched.maxPlayers && errors.maxPlayers)}
                        helperText={touched.maxPlayers && errors.maxPlayers}
                      />
                    </Grid>
                  </Grid>
                  <Button
                    type="submit"
                    color="primary"
                    variant="contained"
                    sx={{ mb: 2, px: 4 }}
                    disabled={uploading}
                    style={{ marginTop: '10px' }}
                  >
                    {uploading ? 'Uploading...' : 'Add Slot'}
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

const slotSchema = Yup.object().shape({
  sport: Yup.string().required('Sport name is required'),
  date: Yup.string().required('Date is required'),
  startTime: Yup.string().required('Start Time is required'),
  endTime: Yup.string().required('End Time is required'),
  maxPlayers: Yup.string().required('Max Players is required'),
});

const initialValues = {
  sport: '',
  date: '',
  startTime: '',
  endTime: '',
  maxPlayers: '',
};

export default AddSlot;
