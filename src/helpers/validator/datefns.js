import { parse, isDate } from 'date-fns';

export function parseDateString(_, originalValue) {
  const parsedDate = isDate(originalValue)
    ? originalValue
    : parse(originalValue, 'dd.MM.yyyy', new Date());

  return parsedDate;
}
