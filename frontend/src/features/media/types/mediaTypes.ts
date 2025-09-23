import {
  TmdbCast,
  TmdbMediaDetailsResponse,
  TmdbProductionCompanies,
} from '@entities/types/tmdbEntities';
import { MediaType, MediaUserActions } from '@shared/types/generalTypes';
import { UserMediaActionEntity } from '@entities/types/kinohubEntities';
import { ReactElement } from 'react';

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

export interface MediaCastAndCrewProps {
  cast: Array<TmdbCast>;
}

export interface MediaOverviewProps<T extends MediaType> {
  tmdbMediaData: TmdbMediaDetailsResponse<T>;
  mediaAction: MediaUserActions;
  mediaType: T;
  mediaId: number;
}

export interface MediaPrimaryDetailsItem {
  label: string;
  data: string | number | undefined;
  icon: ReactElement;
}

export interface MediaRatingProps {
  mediaAction: Partial<UserMediaActionEntity>;
  mediaType: MediaType;
}
