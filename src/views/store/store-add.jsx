import React, { useState } from 'react';
import { Stack } from '@mui/material';
import { Box, styled } from '@mui/system';
import SimpleCard from './SimpleCard';
import { Button, Grid, TextField, TextareaAutosize } from '@mui/material';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { updateUser } from 'src/redux/actions/userAction';
import { useHistory } from 'react-router-dom';  
import { ToastContainer, toast } from 'react-toastify';
import { useDropzone } from 'react-dropzone';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import 'react-toastify/dist/ReactToastify.css';

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



const AddStore = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const [selectedFile, setSelectedFile] = useState(null);
    const [uploading, setUploading] = useState(false);
    //console.log("File Select", selectedFile);
    //console.log("File Upload", uploading);

    const { getRootProps, getInputProps, isDragActive } = useDropzone({
    accept: 'image/*',
    onDrop: (acceptedFiles) => {
        setSelectedFile(acceptedFiles[0]);
        setUploading(false); // Reset the uploading state when a new file is selected
    },
    });

    const handleSubmit = async (values) => {
      const formData = new FormData();
      formData.append('full_name', values.full_name); 
      formData.append('username', values.username);
      formData.append('email', values.email);
      formData.append('password', values.password);
      formData.append('weight', values.weight); 
      formData.append('height_feet', values.height_feet);
      formData.append('height_inches', values.height_inches);
      formData.append('age', values.age);
      formData.append('contact_number', values.contact_number);
      formData.append('address', values.address);
      console.log("Selected File:", selectedFile);
      if (selectedFile) {
          formData.append('image', selectedFile);
      } else {
          console.log("No file selected");
      }
  
      const config = {
        headers: {
            'Content-Type': 'multipart/form-data',
        },
      };
  
      setUploading(true);
      try {
        await dispatch(updateUser(formData, config));
          toast.success('User Added Successfully!', {
              // ...
          });
        //dispatch(getCategoryList());
        history.push("/users/user-list");
      } catch (error) {
        console.error('Error adding user:', error);
        toast.error('Failed to add user. Please try again later.', {
            // ...
        });
      } finally {
        setUploading(false);
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
          <SimpleCard title="Add New User">
            <Formik
              onSubmit={handleSubmit}
              enableReinitialize={true}
              initialValues={initialValues}
              validationSchema={userSchema}
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
                        name="full_name"
                        label="Full Name"
                        size="small"
                        variant="outlined"
                        onBlur={handleBlur}
                        onChange={handleChange}
                        value={values.full_name || ''}
                        error={Boolean(touched.full_name && errors.full_name)}
                        helperText={touched.full_name && errors.full_name}
                      />
                      <StyledTextField
                        fullWidth
                        name="username"
                        label="User Name"
                        size="small"
                        variant="outlined"
                        onBlur={handleBlur}
                        onChange={handleChange}
                        value={values.username || ''}
                        error={Boolean(touched.username && errors.username)}
                        helperText={touched.username && errors.username}
                      />
                      <StyledTextField
                        fullWidth
                        name="email"
                        label="Email"
                        size="small"
                        variant="outlined"
                        onBlur={handleBlur}
                        onChange={handleChange}
                        value={values.email || ''}
                        error={Boolean(touched.email && errors.email)}
                        helperText={touched.email && errors.email}
                      />
                      <StyledTextField
                        fullWidth
                        name="password"
                        label="Password"
                        size="small"
                        variant="outlined"
                        onBlur={handleBlur}
                        onChange={handleChange}
                        value={values.password || ''}
                        error={Boolean(touched.password && errors.password)}
                        helperText={touched.password && errors.password}
                      />
                      <StyledTextField
                        fullWidth
                        name="weight"
                        label="Weight"
                        size="small"
                        variant="outlined"
                        onBlur={handleBlur}
                        onChange={handleChange}
                        value={values.weight || ''}
                        error={Boolean(touched.weight && errors.weight)}
                        helperText={touched.weight && errors.weight}
                      />
                      <StyledTextField
                        fullWidth
                        name="height_feet"
                        label="Height In Feet"
                        size="small"
                        variant="outlined"
                        onBlur={handleBlur}
                        onChange={handleChange}
                        value={values.height_feet || ''}
                        error={Boolean(touched.height_feet && errors.height_feet)}
                        helperText={touched.height_feet && errors.height_feet}
                      />
                      <StyledTextField
                        fullWidth
                        name="height_inches"
                        label="Height In Inches"
                        size="small"
                        variant="outlined"
                        onBlur={handleBlur}
                        onChange={handleChange}
                        value={values.height_inches || ''}
                        error={Boolean(touched.height_inches && errors.height_inches)}
                        helperText={touched.height_inches && errors.height_inches}
                      />
                      <StyledTextField
                        fullWidth
                        name="age"
                        label="Age"
                        size="small"
                        variant="outlined"
                        onBlur={handleBlur}
                        onChange={handleChange}
                        value={values.age || ''}
                        error={Boolean(touched.age && errors.age)}
                        helperText={touched.age && errors.age}
                      />
                      <StyledTextField
                        fullWidth
                        name="contact_number"
                        label="Contact Number"
                        size="small"
                        variant="outlined"
                        onBlur={handleBlur}
                        onChange={handleChange}
                        value={values.contact_number || ''}
                        error={Boolean(touched.contact_number && errors.contact_number)}
                        helperText={touched.contact_number && errors.contact_number}
                      />
                      <TextareaAutosize
                        fullWidth
                        minRows={2}
                        maxRows={4}
                        style={{ width: '100%',borderRadius: '4px',borderColor:'#ccc',padding: '8px',fontSize: '16px' }}
                        name="address"
                        label="Address"
                        placeholder="Enter your Address"
                        size="small"
                        variant="outlined"
                        onBlur={handleBlur}
                        onChange={handleChange}
                        value={values.address || ''}
                        error={Boolean(touched.address && errors.address)}
                        helperText={touched.address && errors.address}
                      />
                      <Box flex={1}>
                        <div style={{border:'1px solid #ccc',padding:'10px',textAlign:'center',margin:'12px 0',borderRadius: '4px'}} {...getRootProps()}>
                            <input type="file" label="Profile Pic" name="profile_picture" {...getInputProps()} />  
                            {isDragActive ? (
                            <p>Drop the image file here ...</p>
                            ) : (
                            <b>
                                Drag and drop an image file here, or click to select file
                            </b>
                            )}
                        </div>
                      </Box>
                    </Grid>
                  </Grid>
                  <Button
                    type="submit"
                    color="primary"
                    variant="contained"
                    sx={{ mb: 2, px: 4 }}
                    disabled={uploading}
                    style={{marginTop:'10px'}}
                  >
                    {uploading ? 'Uploading...' : 'Add User'}
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

const userSchema = Yup.object().shape({
  full_name: Yup.string().required('Full name is required'),  
  username: Yup.string().required('User name is required'), 
  email: Yup.string().required('Email is required'), 
  password: Yup.string().required('Password is required'), 
  height_feet: Yup.string().required('Height in feet is required'), 
  height_inches : Yup.string().required('Height in inches is required'), 
  weight: Yup.string().required('Weight is required'), 
  age: Yup.number()
  .typeError('Age must be a number')
  .required('Age is required')
  .positive('Age must be a positive number')
  .integer('Age must be an integer'), 
  contact_number: Yup.string().required('Contact Number is required'), 
  //profile_picture: Yup.string().required('Profile Picture is required'),
});

const initialValues = {
  full_name: '',
  username : '',
  email : '',
  password : '',
  weight : '',
  height_feet : '',
  height_inches: '',
  age : '',
  contact_number : '',
  //profile_picture : '',
};

export default AddStore;
