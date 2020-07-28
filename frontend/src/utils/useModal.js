import { useState } from 'react';

export default () => {
  const [isModalOpen, setModalOpen] = useState(false);

  const toggleModal = () => setModalOpen(!isModalOpen);

  return [isModalOpen, toggleModal];
};
