import { MediaInfoService } from './mediaInfo.service.js';
import { MediaUserActionsService } from './userActions.service.js';

export const mediaServices = {
  info: new MediaInfoService(),
  actions: new MediaUserActionsService(),
};
