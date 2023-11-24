import type { Launch } from '../types';
import { LaunchItem } from './LaunchItem';

export function Launches({ launches }: { launches: Launch[] }) {
  return (
    <div>
      {launches.map(launch => <LaunchItem key={launch.id} launch={launch} />)}
    </div>
  );
}
