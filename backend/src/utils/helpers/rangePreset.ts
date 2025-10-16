import { DataRangePresets, DateRange } from '../../types/types.js';
import { startOfWeek, startOfMonth, startOfYear } from 'date-fns';
import { fromZonedTime, toZonedTime } from 'date-fns-tz';

export default function rangePreset(
  preset: DataRangePresets,
  now = new Date(),
  tz: string = 'Europe/Kyiv'
): DateRange {
  const nowZoned = toZonedTime(now, tz);
  let fromZoned;

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
