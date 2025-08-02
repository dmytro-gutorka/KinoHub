import { axiosWithAuth } from '@shared/api/kinohub/kinohubAxios';
import { getApiPaths } from '@shared/api/kinohub/apiPaths';
import { UserMediaActionEntity } from '@shared/types/kinohubEntities';

const getUserMediaActionListByUserId = async () => {
  const url: string = getApiPaths.userMediaActions.getListBy();
  const response = await axiosWithAuth.get<Array<UserMediaActionEntity>>(url);

  return response?.data;
};

export default getUserMediaActionListByUserId;
