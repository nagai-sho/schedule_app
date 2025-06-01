import axios from 'axios';

const useDeleteUser = (
  id: number,
  onDeleted: () => void,
  onError: (error: Error) => void
) => {
  console.log('useDeleteUser に渡された id:', id);

  const deleteUserRequest = async () => {
    try {
      await axios.delete(`http://localhost:3000/users/${id}`);
      onDeleted();
    } catch (error) {
      if (error instanceof Error) {
        onError(error);
      } else {
        onError(new Error('Unknown error'));
      }
    }
  };
  return { deleteUserRequest };
};

export default useDeleteUser;
