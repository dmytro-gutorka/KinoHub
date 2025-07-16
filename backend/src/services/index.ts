import { MediaService } from './media.service';
import { MediaUserActionsService } from './actions.service';

export const mediaServices = {
  info: new MediaService(),
  actions: new MediaUserActionsService(),
};
