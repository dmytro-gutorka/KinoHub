import { MEDIA_ACTIONS } from '../../config/constants';

export function getActionForURL(actionData) {
  const actionKey = Object.keys(actionData)[0]
  return MEDIA_ACTIONS[actionKey]
}