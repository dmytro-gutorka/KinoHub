export const SortByMovieSelectValues = {
  'Title (A-Z)': 'title.asc',
  'Title (Z-A)': 'title.desc',
  'Rating (Low to High)': 'vote_average.asc',
  'Rating (High to Low)': 'vote_average.desc',
  'Year (Old to New)': 'primary_release_date.asc',
  'Year (New to Old)': 'primary_release_date.desc',
} as const

export const SortByTvSelectValues = {
  'Title (A-Z)': 'name.asc',
  'Title (Z-A)': 'name.desc',
  'Rating (Low to High)': 'vote_average.asc',
  'Rating (High to Low)': 'vote_average.desc',
  'Year (Old to New)': 'first_air_date.asc',
  'Year (New to Old)': 'first_air_date.desc',
} as const

export const RatingsSelectValues = {
  '1': 1,
  '2': 2,
  '3': 3,
  '4': 4,
  '5': 5,
  '6': 6,
  '7': 7,
  '8': 8,
  '9': 9,
  '10': 10,
} as const