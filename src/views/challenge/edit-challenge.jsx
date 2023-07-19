import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useLocation } from 'react-router-dom';
import {
  Button,
  Grid,
  MenuItem,
  Stack,
  styled,
} from '@mui/material';
import SimpleCard from './SimpleCard';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import SendIcon from '@mui/icons-material/Send';
import { TextValidator, ValidatorForm } from 'react-material-ui-form-validator';
import { updateUser } from 'src/redux/actions/userAction';
import { getUserData } from 'src/redux/selectors/userSelectors';
  
const StyledTextField = styled(TextValidator)(({ theme }) => ({
  width: '100%',
  marginBottom: '16px',
}));

const Container = styled('div')(({ theme }) => ({
  margin: '30px',
}));

const EditUser = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const location = useLocation();
  const userData = location.state;
  const UserEdit = userData.subscriber
  

  const [updatedData, setUpdatedData] = useState({
    _id : UserEdit._id || '',  
    full_name: UserEdit.full_name || '',
    height_feet: UserEdit.height_feet || '',
    height_inches: UserEdit.height_inches || '',
    weight: UserEdit.weight || '',
    age : UserEdit.age || '',
    contact_number: UserEdit.contact_number || '',
    amount : UserEdit.amount || '',
  });

  //console.log('user Edit Data:', updatedData); 

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
      const response = await fetch(`https://gotimeapi.onrender.com/api/user`, {     
        method: 'post',        
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedData),
      });

      if (response.ok) {
        // Update successful
        dispatch(updateUser(updatedData));
        history.push("/users/user-list")
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
        <SimpleCard title="Add New User">
          <ValidatorForm onSubmit={handleSubmit} onError={() => null}>
            <Grid container spacing={6}>
              <Grid item lg={6} md={6} sm={12} xs={12} sx={{ mt: 2 }}>
                <StyledTextField
                  type="text"
                  fullWidth
                  size="small"
                  name="full_name"
                  id="full_name"
                  value={updatedData.full_name}
                  onChange={handleInputChange}
                  label="Full Name"
                  validators={['required', 'isNameNotEmpty']}
                  errorMessages={['This field is required', 'Please enter a valid full name']}
                />
                <StyledTextField
                  type="text"
                  fullWidth
                  size="small"
                  name="height_feet"
                  id="height_feet"
                  value={updatedData.height_feet}
                  onChange={handleInputChange}
                  label="Height in feet"
                  validators={['required', 'isNameNotEmpty']}
                  errorMessages={['This field is required', 'Please enter a valid Height in feet']}
                />
                <StyledTextField
                  type="text"
                  fullWidth
                  size="small"
                  name="height_inches"
                  id="height_inches"
                  value={updatedData.height_inches}
                  onChange={handleInputChange}
                  label="Height In inches"
                  validators={['required', 'isNameNotEmpty']}
                  errorMessages={['This field is required', 'Please enter a valid Height in inches']}
                />
                <StyledTextField
                  type="text"
                  fullWidth
                  size="small"
                  name="weight"
                  id="weight"
                  label="Weight"
                  value={updatedData.weight}
                  onChange={handleInputChange}
                  validators={['required', 'isNameNotEmpty']}
                  errorMessages={['This field is required', 'Please enter a valid weight']}
                />
                <StyledTextField
                  type="number"
                  fullWidth
                  size="small"
                  name="contact_number"
                  id="contact_number"
                  label="Phone Number"
                  value={updatedData.contact_number}
                  onChange={handleInputChange}
                  validators={['required', 'isNumber']}
                  errorMessages={['This field is required', 'Please enter a valid contact number']}
                />
                <StyledTextField
                  type="number"
                  fullWidth
                  size="small"
                  name="age"
                  id="age"
                  label="Age in Year"
                  value={updatedData.age}  
                  onChange={handleInputChange}
                  validators={['required', 'isNumber']}
                  errorMessages={['This field is required', 'Please enter a valid Age']}
                />
                <StyledTextField
                  type="number"
                  fullWidth
                  size="small"
                  name="amount"
                  id="age"
                  label="Amount"
                  value={updatedData.amount}  
                  onChange={handleInputChange}
                  validators={['required', 'isNumber']}
                />
              </Grid>
            </Grid>

            <Button color="primary" variant="contained" type="submit">
              <SendIcon aria-label="send" aria-haspopup="true" />
              Update User
            </Button>
          </ValidatorForm>
          </SimpleCard>
        </Stack>
      </Container>
    </div>
  );
};

export default EditUser;
