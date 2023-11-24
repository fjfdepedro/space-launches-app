import type { Launch } from '../types';

export function LaunchItem({ launch }: { launch: Launch }) {
  return (
    <div key={launch.id} className="block p-4 m-2 border rounded shadow">
      <h3 className="text-xl font-bold">{ launch.mission_name }</h3>
      <p><strong>Launch Date:</strong> { new Date(launch.launch_date_local).toLocaleDateString("en-US") }</p>
      <p><strong>Launch Site:</strong> { launch.launch_site.site_name_long }</p>
      <p><strong>Rocket Name:</strong> { launch.rocket.rocket_name }</p>
      <p><strong>Article Link:</strong> <a href={launch.links.article_link}>{launch.links.article_link}</a></p>
      <p><strong>Video Link:</strong> <a href={launch.links.video_link}>{launch.links.video_link}</a></p>
      <p><strong>Mission Patch:</strong> <img src={launch.links.mission_patch} alt="Mission Patch" /></p>
    </div>
  );
}
