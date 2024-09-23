import { useState } from 'react';



return (
    <div>
        <h2>{name}</h2>
        <p>Expiry Date: {expiryDate}</p>
        <button onClick={() => removeFoodItem(id)}>Remove Item</button>
    </div>
)