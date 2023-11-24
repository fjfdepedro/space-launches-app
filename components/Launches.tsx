import type { Launch } from '../types';
import { LaunchItem } from './LaunchItem';

export function Launches({ launches }: { launches: Launch[] }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {launches.map(launch => <LaunchItem key={launch.id} launch={launch} />)}
    </div>
  );
}
