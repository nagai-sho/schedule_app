import { useState } from 'react';
import axios from 'axios';
import { FormValues } from '../formValue/FormValues';

const useCreateUser = (
  onCreated: () => void,
  onError: (error: Error) => void
) => {
  const [submitting, setSubmitting] = useState(false);

  const createUserRequest = async (data: FormValues) => {
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
      await axios.post('http://localhost:3000/users', requestBody);
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
  return { submitting, createUserRequest };
};

export default useCreateUser;
