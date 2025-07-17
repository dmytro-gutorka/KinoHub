import { MediaService } from './media.service.js';
import { MediaUserActionsService } from './actions.service.js';

export const mediaServices = {
  info: new MediaService(),
  actions: new MediaUserActionsService(),
};
