import {
  NewsTitle,
  ReadMoreLink,
  NewsText,
  Wrapper,
  NewsCard,
  OverLine,
  Time,
  EmptyTime,
} from './NewsItem.styled';

export const NewsItem = ({ title, date, description, url }) => {
  return (
    <NewsCard>
      <OverLine />
      <NewsTitle>{title}</NewsTitle>
      <NewsText>{description}</NewsText>
      <Wrapper>
        {date ? <Time>{date}</Time> : <EmptyTime>--/--/--</EmptyTime>}

        <ReadMoreLink href={url} target="_blank">
          Read more
        </ReadMoreLink>
      </Wrapper>
    </NewsCard>
  );
};
