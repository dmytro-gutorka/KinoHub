import { axiosWithAuth } from '@shared/api/kinohub/kinohubAxios';
import { getApiPaths } from '@shared/api/kinohub/apiPaths';
import { MovieBoardItemData } from '@features/movieBoard/model/types/movieBoardTypes';

const getMovieBoardItems = async () => {
  const url: string = getApiPaths.movieBoardItems.getList();
  const response = await axiosWithAuth.get<Array<MovieBoardItemData>>(url);

  return response?.data;
};

export default getMovieBoardItems;
