import {
  TmdbCast,
  TmdbMediaDetailsResponse,
  TmdbProductionCompanies,
  TmdbSeasonInfo,
} from '@entities/types/tmdbEntities';
import { ReactNode } from 'react';
import { MediaType, MediaUserActions } from '@shared/types/generalTypes';
import { UserMediaActionEntity } from '@entities/types/kinohubEntities';

export interface MediaHeaderProps<T extends MediaType> {
  tmdbMediaData: TmdbMediaDetailsResponse<T>;
  mediaAction: UserMediaActionEntity;
  mediaType: T;
}

export interface MediaPlotProps {
  overview: string;
}

export interface MediaProdCompaniesProps {
  companies: Array<TmdbProductionCompanies>;
}

export interface MediaActorProps {
  actor: TmdbCast;
}

export interface MediaCastAndCrewProps {
  cast: Array<TmdbCast>;
}

export interface MediaContentBlockProps {
  blockTitle: string;
  children: ReactNode;
  titleFontWeight?: number;
  titleSizeVariant?: string;
}

export interface MediaOverviewProps<T extends MediaType> {
  tmdbMediaData: TmdbMediaDetailsResponse<T>;
  mediaAction: MediaUserActions;
  mediaType: T;
  mediaId: number;
}

export interface MediaDetailsProps<T extends MediaType> {
  tmdbMediaData: TmdbMediaDetailsResponse<T>;
  mediaType: T;
}

export interface MediaRatingProps {
  mediaAction: Partial<UserMediaActionEntity>;
  mediaType: MediaType;
}

export interface SeasonsAndEpisodesProps {
  seasons: Array<TmdbSeasonInfo>;
}
