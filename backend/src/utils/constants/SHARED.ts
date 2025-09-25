export const MEDIA_ACTIONS = {
  IS_WATCHED: 'isWatched',
  IS_LIKED: 'isLiked',
  RATING: 'rating',
  WATCH_STATUS: 'watchStatus',
} as const;

export enum FORMATTED_ACTIVITY_TYPE {
  isWatched = 'watch',
  isLiked = 'like',
  rating = 'rate',
  comment = 'comment',
}

export type FormatedActivityKeys = keyof typeof FORMATTED_ACTIVITY_TYPE;
