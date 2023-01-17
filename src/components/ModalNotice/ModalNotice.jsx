export const ModalNotice = ({ handleBackdropClose }) => {
  return (
    <div handleBackdropClose onClick={handleBackdropClose}>
      <button>X</button>
      <span>In good hands</span>
      <img src="" alt="" />
      <h3>title</h3>
      <ul>
        <li>
          <p>
            <span></span>
          </p>
        </li>
      </ul>
    </div>
  );
};
