import { axiosWithAuth } from '@shared/api/kinohub-axios';
import { apiPath } from '@shared/api/api-paths';
import { MovieBoardItemData } from '@features/movie-board/types/movieBoardTypes';

const getMovieBoardItems = async () => {
  const url: string = apiPath.movieBoardItems.getList();
  const response = await axiosWithAuth.get<Array<MovieBoardItemData>>(url);

  return response?.data;
};

export default getMovieBoardItems;
