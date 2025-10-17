import { DateRangePresets, DateRange } from '../../types/types.js';
import { startOfWeek, startOfMonth, startOfYear } from 'date-fns';
import { fromZonedTime, toZonedTime } from 'date-fns-tz';

export default function rangePreset(
  preset: DateRangePresets,
  tz: string = 'UTC',
  now = new Date()
): DateRange {
  const nowZoned: Date = toZonedTime(now, tz);
  let fromZoned: Date;

  switch (preset) {
    case 'all':
      return {};

    case 'week':
      fromZoned = startOfWeek(nowZoned, { weekStartsOn: 1 });
      break;

    case 'month':
      fromZoned = startOfMonth(nowZoned);
      break;

    case 'year':
      fromZoned = startOfYear(nowZoned);
      break;
  }

  return {
    from: fromZonedTime(fromZoned, tz),
    to: new Date(now),
  };
}
