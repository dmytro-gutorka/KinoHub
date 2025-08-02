import { MediaType, WatchStatus } from '@shared/types/generalTypes';

export interface MediaInfoEntity {
  id: number;
  mediaId: number;
  mediaType: MediaType;
  posterPath: string;
  releaseDate: string;
  runtime: number;
  title: string;
  voteAverage: number;
}

export interface UserMediaActionEntity {
  id: number;
  isLiked: boolean;
  isWatched: boolean;
  mediaId: number;
  mediaInfoId: number;
  mediaType: MediaType;
  rating: number | null;
  userId: number;
  watchStatus: WatchStatus | null;
}
