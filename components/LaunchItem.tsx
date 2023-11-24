import type { Launch } from '../types';

export function LaunchItem({ launch }: { launch: Launch }) {
  return (
    <a key={launch.id} href={launch.links.video_link}>
      <h3>{ launch.mission_name }</h3>
      <p><strong>Launch Date:</strong> { new Date(launch.launch_date_local).toLocaleDateString("en-US") }</p>
    </a>
  );
}
