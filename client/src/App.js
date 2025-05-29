import React, { useState, useEffect } from 'react';
import {
  Box,
  Button,
  TextField,
  Typography,
  Stack,
  Stepper,
  Step,
  StepLabel,
  Card as MuiCard,
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
  Divider,
  Snackbar
} from '@mui/material';
import { styled } from '@mui/material/styles';
import axios from 'axios';

const Card = styled(MuiCard)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignSelf: 'center',
  width: '100%',
  padding: theme.spacing(4),
  gap: theme.spacing(2),
  margin: 'auto',
  [theme.breakpoints.up('sm')]: {
    maxWidth: '450px',
  },
  boxShadow:
    'hsla(220, 30%, 5%, 0.05) 0px 5px 15px 0px, hsla(220, 25%, 10%, 0.05) 0px 15px 35px -5px',
}));

const SignInContainer = styled(Stack)(({ theme }) => ({
  height: '100vh',
  padding: theme.spacing(2),
  [theme.breakpoints.up('sm')]: {
    padding: theme.spacing(4),
  },
  '&::before': {
    content: '""',
    display: 'block',
    position: 'absolute',
    zIndex: -1,
    inset: 0,
    backgroundImage:
      'radial-gradient(ellipse at 50% 50%, hsl(210, 100%, 97%), hsl(0, 0%, 100%))',
    backgroundRepeat: 'no-repeat',
  },
}));

const steps = [
  'Q-1. What is your name?',
  'Q-2. Number of wheels',
  'Q-3. Type of vehicle',
  'Q-4. Specific Model',
  'Q-5. Date range picker',
];

const App = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    wheels: '',
    vehicleType: '',
    model: '',
    dateRange: [null, null],
  });
  const [errors, setErrors] = useState({});
  const [vehicleTypes, setVehicleTypes] = useState([]);
  const [vehicleModels, setVehicleModels] = useState([]);
  const [message, setMessage] = useState('');
  const [open, setOpen] = useState(false);


  const handleChange = (field) => (e) => {
    setFormData({ ...formData, [field]: e.target.value });
  };

  const handleDateRangeChange = (newValue) => {
    setFormData({ ...formData, dateRange: newValue });
  };

  const validateStep = () => {
    const newErrors = {};
    switch (activeStep) {
      case 0:
        if (!/^[a-zA-Z]+$/.test(formData.firstName))
          newErrors.firstName = 'Valid first name is required';
        if (!/^[a-zA-Z]+$/.test(formData.lastName))
          newErrors.lastName = 'Valid last name is required';
        break;
      case 1:
        if (!['2', '4'].includes(formData.wheels))
          newErrors.wheels = 'Please select 2 or 4 wheels';
        break;
      case 2:
        if (!formData.vehicleType)
          newErrors.vehicleType = 'Please select a vehicle type';
        break;
      case 3:
        if (!formData.model)
          newErrors.model = 'Please select a vehicle model';
        break;
      case 4:
        if (!formData.dateRange[0] || !formData.dateRange[1])
          newErrors.dateRange = 'Please select a valid date range';
        break;
      default:
        break;
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = async () => {
    try {

      if (validateStep()) {
        // Simulate server-side request
        // setTimeout(() => {
        //   console.log(`Step ${activeStep + 1} data submitted:`, formData);

        // }, 200);

        if (activeStep === 0) {
          setActiveStep((prevStep) => prevStep + 1);
        }

        if (activeStep === 3) {
          setActiveStep((prevStep) => prevStep + 1);
        }

        if (activeStep === 1) {
          const { data: obj } = await axios({
            url: 'http://localhost:8089/rent-services/get-vehicle-type',
            method: 'post',
            responseType: 'json',
            data: {
              wheels: formData.wheels,
            }
          })

          if (obj.success === 'ok') {
            setVehicleTypes(obj.type);
            setActiveStep((prevStep) => prevStep + 1);
          }

        }

        if (activeStep === 2) {
          const { data: obj } = await axios({
            url: 'http://localhost:8089/rent-services/get-vehicle-modals',
            method: 'post',
            responseType: 'json',
            data: {
              vehicleType: formData.vehicleType,
            }
          })

          if (obj.success === 'ok') {
            setVehicleTypes(obj.modals);
            setActiveStep((prevStep) => prevStep + 1);
          }

        }

        if (activeStep === 4) {
          const { data: obj } = await axios({
            url: 'http://localhost:8089/rent-services/confirm-booking',
            method: 'post',
            responseType: 'json',
            data: {
              data: formData,
            }
          })

          if (obj.success === 'ok') {
            setMessage(obj.message);
            setOpen(true);
          }

          if (obj.success === 'error') {
            setMessage(obj.message);
            setOpen(true);
          }

        }

      }

    }

    catch (e) {
      setMessage(e.message);
      setOpen(true);
    }

  };

  const renderStepContent = () => {
    switch (activeStep) {
      case 0:
        return (
          <>
            <FormControl>
              <FormLabel>First Name</FormLabel>
              <TextField
                value={formData.firstName}
                onChange={handleChange('firstName')}
                error={!!errors.firstName}
                helperText={errors.firstName}
              />
            </FormControl>
            <FormControl>
              <FormLabel>Last Name</FormLabel>
              <TextField
                value={formData.lastName}
                onChange={handleChange('lastName')}
                error={!!errors.lastName}
                helperText={errors.lastName}
              />
            </FormControl>
          </>
        );
      case 1:
        return (
          <FormControl component="fieldset">
            <FormLabel component="legend">Number of Wheels</FormLabel>
            <RadioGroup
              value={formData.wheels}
              onChange={handleChange('wheels')}
            >
              <FormControlLabel value="2" control={<Radio />} label="2" />
              <FormControlLabel value="4" control={<Radio />} label="4" />
            </RadioGroup>
            {errors.wheels && (
              <Typography color="error">{errors.wheels}</Typography>
            )}
          </FormControl>
        );
      case 2:
        return (
          <FormControl component="fieldset">
            <FormLabel component="legend">Type of Vehicle</FormLabel>
            <RadioGroup
              value={formData.vehicleType}
              onChange={handleChange('vehicleType')}
            >
              {vehicleTypes.map((type) => (
                <FormControlLabel
                  key={type}
                  value={type}
                  control={<Radio />}
                  label={type}
                />
              ))}
            </RadioGroup>
            {errors.vehicleType && (
              <Typography color="error">{errors.vehicleType}</Typography>
            )}
          </FormControl>
        );
      case 3:
        return (
          <FormControl component="fieldset">
            <FormLabel component="legend">Specific Model</FormLabel>
            <RadioGroup
              value={formData.model}
              onChange={handleChange('model')}
            >
              {vehicleModels.map((model) => (
                <FormControlLabel
                  key={model}
                  value={model}
                  control={<Radio />}
                  label={model}
                />
              ))}
            </RadioGroup>
            {errors.model && (
              <Typography color="error">{errors.model}</Typography>
            )}
          </FormControl>
        );
      case 4:
        return (
          <FormControl fullWidth>
            {/* <FormLabel>Select Booking Date Range</FormLabel> */}
            <Stack direction="column" spacing={2}>
              <TextField
                label="Start Date"
                type="date"
                InputLabelProps={{ shrink: true }}
                value={formData.dateRange[0] || ''}
                onChange={(e) =>
                  setFormData((prev) => ({
                    ...prev,
                    dateRange: [e.target.value, prev.dateRange[1]],
                  }))
                }
                error={!!errors.dateRange}
              />
              <TextField
                label="End Date"
                type="date"
                InputLabelProps={{ shrink: true }}
                value={formData.dateRange[1] || ''}
                onChange={(e) =>
                  setFormData((prev) => ({
                    ...prev,
                    dateRange: [prev.dateRange[0], e.target.value],
                  }))
                }
                error={!!errors.dateRange}
              />
            </Stack>
            {errors.dateRange && (
              <Typography color="error">{errors.dateRange}</Typography>
            )}
          </FormControl>
        );
      default:
        return <Typography>All steps completed!</Typography>;
    }
  };

  return (
    <SignInContainer direction="column" justifyContent="center">
      <Card variant="outlined">
        <Stepper activeStep={activeStep} alternativeLabel>
          {steps.map((label, index) => (
            <Step key={index}>
              <StepLabel>{`Q-${index + 1}`}</StepLabel>
            </Step>
          ))}
        </Stepper>

        <Typography variant="h6" sx={{ mt: 3 }}>
          {steps[activeStep] || 'Done'}
        </Typography>

        <Box sx={{ mt: 2, display: 'flex', flexDirection: 'column', gap: 2 }}>
          {renderStepContent()}
          {activeStep < steps.length && (
            <Button variant="contained" onClick={handleNext}>
              {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
            </Button>
          )}
        </Box>
      </Card>

      <Snackbar
        open={open}
        autoHideDuration={3000}
        onClose={() => setOpen(false)}
        message={message}
      />
    </SignInContainer>
  );
};

export default App;
