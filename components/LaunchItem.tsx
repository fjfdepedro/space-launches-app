import type { Launch } from '../types';

export function LaunchItem({ launch }: { launch: Launch }) {
  return (
    <a key={launch.id} href={launch.links.video_link} className="block p-4 m-2 border rounded shadow">
      <h3 className="text-xl font-bold">{ launch.mission_name }</h3>
      <p><strong>Launch Date:</strong> { new Date(launch.launch_date_local).toLocaleDateString("en-US") }</p>
    </a>
  );
}
