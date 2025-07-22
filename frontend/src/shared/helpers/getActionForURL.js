import { MEDIA_ACTIONS } from '@app/constants';

// action should always be the first
export function getActionForURL(actionData) {
  const actionKey = Object.keys(actionData)[0];
  return MEDIA_ACTIONS[actionKey];
}
