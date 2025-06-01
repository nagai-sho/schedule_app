import { useState } from 'react';
import axios from 'axios';
import { FormValues } from '../formValue/FormValues';

const useUpdateUser = (
  id: number,
  onCreated: () => void,
  onError: (error: Error) => void
) => {
  console.log('useUpdateUser に渡された id:', id);
  const [submitting, setSubmitting] = useState(false);

  const updateUserRequest = async (data: FormValues) => {
    setSubmitting(true);

    const requestBody = {
      name: data.name,
      email: data.email,
      phoneNumber: data.phoneNumber,
      hashedPassword: data.hashedPassword,
      company: data.company,
      postalCode: data.postalCode,
      address: data.address,
    };

    try {
      await axios.put(`http://localhost:3000/users/${id}`, requestBody);
      setSubmitting(false);
      onCreated();
    } catch (error) {
      setSubmitting(false);
      if (error instanceof Error) {
        onError(error);
      } else {
        onError(new Error('Unknown error'));
      }
    }
  };
  return { submitting, updateUserRequest };
};

export default useUpdateUser;
