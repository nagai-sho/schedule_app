import { useCallback, useState } from 'react';

const useDialog = () => {
  const [isOpen, setIsOpen] = useState(false);

  const showDialog = useCallback(() => {
    setIsOpen(true);
  }, []);

  const closeDialog = useCallback(() => {
    setIsOpen(false);
  }, []);

  return { isOpen, showDialog, closeDialog };
};

export default useDialog;
