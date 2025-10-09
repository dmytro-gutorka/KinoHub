import { useQuery } from '@tanstack/react-query';
import getActivityLogList from '@shared/api/activity/getActivityLogList';
import { ActivityFeedEntity } from '@entities/types/kinohubEntities';

export default function useActivityFeed(page: number) {
  const queryKey = ['activityFeed', page];

  return useQuery({
    queryFn: (): Promise<ActivityFeedEntity[]> => getActivityLogList(page),
    queryKey: [queryKey],
  });
}
