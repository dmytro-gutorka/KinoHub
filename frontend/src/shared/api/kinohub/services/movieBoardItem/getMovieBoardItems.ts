import { axiosWithAuth } from '@shared/api/kinohub/kinohubAxios';
import { getApiPaths } from '@shared/api/kinohub/apiPaths';
import { UserMediaActionEntity } from '@entities/types/kinohubEntities';

const getMovieBoardItems = async () => {
  const url: string = getApiPaths.movieBoardItems.getList();
  const response = await axiosWithAuth.get<Array<UserMediaActionEntity>>(url);

  return response?.data;
};

export default getMovieBoardItems;
