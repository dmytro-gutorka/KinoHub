import { MediaInfoEntity } from '@entities/types/kinohubEntities';
import { WatchStatus } from '@shared/types/generalTypes';
import { JSX } from 'react';

export interface MovieBoardItemData {
  mediaId: number;
  watchStatus: WatchStatus;
  mediaInfo: MediaInfoEntity;
}

export interface MovieBoardColumnData {
  id: WatchStatus;
  icon: JSX.Element;
  label: string;
  bgColor: string;
}

export interface MovieBoardColumnListProps {
  movieBoardItems: Array<MovieBoardItemData>;
}

export interface MovieBoardColumnProps {
  movieBoardItems: Array<MovieBoardItemData>;
  columnData: MovieBoardColumnData;
  children: JSX.Element;
}
