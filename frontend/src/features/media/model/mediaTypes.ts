import {
  TmdbCast,
  TmdbMediaDetailsResponse,
  TmdbProductionCompanies,
  TmdbSeasonBriefInfo,
} from '@shared/types/tmdbEntities';
import { ReactNode } from 'react';
import { MediaType, MediaUserActions } from '@shared/types/generalTypes';
import { UserMediaActionEntity } from '@shared/types/kinohubEntities';

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
}

export interface MediaOverviewProps<T extends MediaType> {
  tmdbMediaData: TmdbMediaDetailsResponse<T>;
  mediaAction: MediaUserActions;
  mediaType: T;
}

export interface MediaDetailsProps<T extends MediaType> {
  tmdbMediaData: TmdbMediaDetailsResponse<T>;
  mediaType: T;
}

export interface MediaRatingProps {
  mediaAction: UserMediaActionEntity;
  mediaType: MediaType;
}

export interface SeasonsAndEpisodesProps {
  seasons: Array<TmdbSeasonBriefInfo>;
}
