import React, { useState } from 'react';

const FoodItemForm = ({ addFoodItem }) => {
    const [name, setName] = useState('');
    const [expiryDate, setExpiryDate] = useState('')
  
    const handleSubmit = (e) => {
      e.preventDefault();
      if (name && expiryDate) {
        addFoodItem({ name, expiryDate, id: Date.now() });
        setName('');
        setExpiryDate('');
      }
    }}
  