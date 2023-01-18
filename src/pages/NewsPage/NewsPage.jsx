import { Container } from 'components/Container/Container';
import { Title } from './NewsPage.styled';
import { NewsSearchForm } from '../../components/News/NewsSearch/NewsSearchForm';
import { NewsList } from 'components/News/NewsList/NewsList';

export const NewsPage = () => {
  return (
    // <Section>
    <Container>
      <Title>News</Title>
      <NewsSearchForm />
      <NewsList />
    </Container>
    // </Section>
  );
};
