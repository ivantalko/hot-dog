import {
  NewsTitle,
  ReadMoreLink,
  NewsText,
  Wrapper,
  NewsCard,
  OverLine,
  Time,
} from './NewsItem.styled';

export const NewsItem = ({ title, date, description, url }) => {
  return (
    <NewsCard>
      <OverLine />
      <NewsTitle>Обережно, кліщі! Як уберегти улюбленця </NewsTitle>
      <NewsText>
        Травневі прогулянки з улюбленцем не лише приємні, але й потребують
        пильності. З початком теплої пори року активізуються кліщі, і треба бути
        уважним, щоб уберегти свого песика чи котика від дуже серйозних
        неприємностей зі здоров`ям.
      </NewsText>
      <Wrapper>
        {/* {date ? <Time>{format(new Date(date), 'MM/dd/yyyy')}</Time> : <p></p>} */}
        <Time>44.44.4444</Time>
        <ReadMoreLink href={url} target="_blank">
          Read more
        </ReadMoreLink>
      </Wrapper>
    </NewsCard>
  );
};
