import { TmdbCast, TmdbProductionCompanies } from '@shared/types/tmdbResponces';
import { ReactNode } from 'react';

export interface MediaDetailsProps {
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

export interface MediaDetailsProps {
  tmdbMediaData: '';
}
