import { MediaUserActionsService } from './userActions.service.js';
import { MediaInfoService } from './info.service.js';

export const mediaServices = {
  info: new MediaInfoService(),
  actions: new MediaUserActionsService(),
};
