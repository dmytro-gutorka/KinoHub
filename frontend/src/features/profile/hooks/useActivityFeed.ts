import { useQuery } from '@tanstack/react-query';
import getActivityLogList from '@shared/api/kinohub/services/activity/getActivityLogList';
import { ActivityFeedEntity } from '@entities/types/kinohubEntities';

export default function useActivityFeed(page: number = 1) {
  const queryKey = ['activityFeed', page];

  return useQuery({
    queryFn: (): Promise<ActivityFeedEntity[]> => getActivityLogList(page),
    queryKey: [queryKey],
  });
}
