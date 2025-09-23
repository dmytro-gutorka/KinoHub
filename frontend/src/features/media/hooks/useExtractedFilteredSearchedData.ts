import useFilteredMedia from '@features/filters/hooks/useFilteredMedia';
import useSearchedMedia from '@features/filters/hooks/useSearchedMedia';
import {
  TmdbMediaListResults,
  TmdbMediaSearchedFilteredResponse,
} from '@entities/types/tmdbEntities';
import { MediaFiltersBase, MediaType } from '@shared/types/generalTypes';

export default function useExtractedFilteredSearchedData(
  filters: MediaFiltersBase & { searchQuery: string },
  mediaType: MediaType
) {
  const { page, minRating, searchQuery, genres, sortBy } = filters;

  const { filteredData, filterLoading } = useFilteredMedia({
    qrKey: mediaType,
    mediaType,
    minRating,
    genres,
    sortBy,
    page,
  });

  const { searchData, searchLoading } = useSearchedMedia({
    qrKey: mediaType,
    mediaType,
    searchQuery,
    page,
  });


  let limitedPage: number | undefined;
  const mediaList:
    | TmdbMediaListResults<Array<TmdbMediaSearchedFilteredResponse<typeof mediaType>>>
    | undefined = searchData?.results || filteredData?.results;
  const pages: number | undefined = searchData?.total_pages || filteredData?.total_pages;

  if (pages && pages > 500) limitedPage = 500;

  return {
    mediaList,
    pages: limitedPage || pages,
    isLoading: filterLoading || searchLoading,
  };
}
