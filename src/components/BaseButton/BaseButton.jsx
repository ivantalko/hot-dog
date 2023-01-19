import { BaseButtons } from './BaseButton.styled';

const BaseButton = ({
  children,
  type = 'button',
  disabled = false,
  onClick = null,
}) => {
  return (
    <BaseButtons type={type} disabled={disabled} onClick={onClick}>
      {children}{' '}
    </BaseButtons>
  );
};
export default BaseButton;
