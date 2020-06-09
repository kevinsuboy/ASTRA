export const OPEN_MODAL = 'OPEN_MODAL';
export const CLOSE_MODAL = 'CLOSE_MODAL';
export const CLOSE_AND_SAVE = 'CLOSE_AND_SAVE';

export const openModal = modal => {
  // debugger;
  console.log('modal:', modal)
  return {
    type: OPEN_MODAL,
    modal
  };
};

export const closeModal = () => {
  return {
    type: CLOSE_MODAL
  };
};

export const closeAndSaveModal = () => {
  return {
    type: CLOSE_AND_SAVE
  };
}