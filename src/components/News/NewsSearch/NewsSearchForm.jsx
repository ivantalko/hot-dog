import { CloseBtn } from '../Buttons/CloseBtn';
import { SearchBtn } from '../Buttons/SearchBtn';
import { Button, Form, Input } from './NewsSearchForm.styled';

export const NewsSearchForm = ({
  value,
  handleSubmit,
  handeInputChange,
  handleSearch,
  closeBtn,
  removeValue,
}) => {
  return (
    <Form onSubmit={!closeBtn ? handleSubmit : removeValue}>
      <Input
        type="text"
        value={value}
        placeholder="Search"
        onChange={handeInputChange}
      />
      {closeBtn && value.length > 1 ? (
        <Button type="submit">
          <CloseBtn />
        </Button>
      ) : (
        <Button type="submit">
          <SearchBtn />
        </Button>
      )}
    </Form>
  );
};
