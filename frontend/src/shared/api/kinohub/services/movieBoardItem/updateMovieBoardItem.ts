import { axiosWithAuth } from '@shared/api/kinohub/kinohub-axios';
import { apiPath } from '@shared/api/kinohub/api-paths';
import { UserMediaActionEntity } from '@entities/types/kinohubEntities';

const getMovieBoardItems = async () => {
  const url: string = apiPath.movieBoardItems.getList();
  const response = await axiosWithAuth.get<Array<UserMediaActionEntity>>(url);

  return response?.data;
};

export default getMovieBoardItems;
