export const NoticesAddModal = ({ handleBackdropClose }) => {
  return (
    <div
      style={{
        position: 'fixed',
        width: '100%',
        height: '100%',
        top: '0',
        left: '0',
      }}
      onClick={handleBackdropClose}
    >
      <div style={{ backgroundColor: 'grey' }}>MODAL FORM</div>
    </div>
  );
};
