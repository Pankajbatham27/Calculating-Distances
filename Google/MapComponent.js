import React, { useState } from 'react';
import { geocodeByAddress, getLatLng } from 'react-places-autocomplete';
import Input from './Input';
import { Box, Typography } from '@mui/material';
import Button from '../Modules/buttonHover/Button';

function MyComponent({ setCoordinates, setToCoordinates, setShowMap }) {
  const [address, setAddress] = useState('');
  const [toAddress, setToAddress] = useState('');

  const [loader, setLoader] = useState(false);

  const handleChange = (newAddress) => {
    setAddress(newAddress);
  };

  const handleSelect = async (selectedAddress) => {
    const result = await geocodeByAddress(selectedAddress);
    const coordinatesResult = await getLatLng(result[0]);
    setAddress(selectedAddress);
    setCoordinates(coordinatesResult);
  };

  const handleChangeTo = (newAddress) => {
    setToAddress(newAddress);
  };

  const handleSelectTo = async (selectedAddress) => {
    const result = await geocodeByAddress(selectedAddress);
    const coordinatesResult = await getLatLng(result[0]);
    setToAddress(selectedAddress);
    setToCoordinates(coordinatesResult);
  };

  const submitHandler = () => {

    setLoader(true);

    if (address && toAddress) {
      setShowMap(true);
      setLoader(false)
    } else {
      setLoader(false)
      alert('Please enter both address')
    }

  }

  return (
    <>

      <Typography mb={0} variant='h5'><b>Calculating Distances:</b> Journey Between Latitude and Longitude Points</Typography>
      <Input address={address} handleSelect={handleSelect} handleChange={handleChange} title={'From'} />
      <Input address={toAddress} handleSelect={handleSelectTo} handleChange={handleChangeTo} title={'To'} />
      <Box mt={3}><Button text="Submit" submitHandler={submitHandler} loader={loader} /></Box>


    </>

  );
}

export default MyComponent;