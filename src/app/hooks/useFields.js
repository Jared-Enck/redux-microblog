import { useState } from 'react';

export default function useFields(initialState) {
  const [formData, setFormData] = useState(initialState);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((fData) => ({
      ...fData,
      [name]: value,
    }));
  };

  return [formData, handleChange, setFormData];
}
