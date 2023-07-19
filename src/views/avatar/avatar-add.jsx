import React, { useState } from 'react';
import { Stack } from '@mui/material';
import { Box, styled } from '@mui/system';
import SimpleCard from './SimpleCard';
import { Button, Grid, TextField, Icon } from '@mui/material';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { addupdateAvatar, getAvatarList } from 'src/redux/actions/avatarAction';
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

const AddAvatar = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const [selectedFile, setSelectedFile] = useState(null);
    const [uploading, setUploading] = useState(false);

    const { getRootProps, getInputProps, isDragActive } = useDropzone({
    accept: 'image/*',
    onDrop: (acceptedFiles) => {
        setSelectedFile(acceptedFiles[0]);
        setUploading(false); // Reset the uploading state when a new file is selected
    },
    });

    const handleSubmit = async (values) => {
        const formData = new FormData();
        ///formData.append('name', values.name);  
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
        await dispatch(addupdateAvatar(formData, config));
        toast.success('Avatar Added Successfully!', {
            // ...
        });
        dispatch(getAvatarList());
        history.push("/avatar/avatar-list");
        } catch (error) {
        console.error('Error adding avatar:', error);
        toast.error('Failed to add avatar. Please try again later.', {
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
          <SimpleCard title="Add New Avatar">
            <Formik
              onSubmit={handleSubmit}
              enableReinitialize={true}
              initialValues={initialValues}
              validationSchema={avatarSchema}
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
                      <Box flex={1}>
                        <div style={{border:'2px dashed #aaa',padding:'12px',textAlign:'center'}} {...getRootProps()}>
                            <input type="file" name="image" {...getInputProps()} />  
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
                    {uploading ? 'Uploading...' : 'Add Avatar'}
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

const avatarSchema = Yup.object().shape({  
    image: Yup.string().required('Avatar Image is required'),  
});

const initialValues = {
    image: '',
};

export default AddAvatar;
