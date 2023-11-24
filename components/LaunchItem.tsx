import type { Launch } from '../types';

export function LaunchItem({ launch }: { launch: Launch }) {
  return (
    <div key={launch.id} className="block p-4 m-2 border rounded shadow">
      <h3 className="text-xl font-bold">{ launch.mission_name }</h3>
      <p><strong>Launch Date:</strong> { new Date(launch.launch_date_local).toLocaleDateString("en-US") }</p>
      <p><strong>Launch Site:</strong> { launch.launch_site ? launch.launch_site.site_name_long : 'N/A' }</p>
      <p><strong>Rocket Name:</strong> { launch.rocket.rocket_name }</p>
      <p><strong>Article Link:</strong> <a href={launch.links.article_link}>{launch.links.article_link}</a></p>
      <p><strong>Video Link:</strong> <a href={launch.links.video_link}>{launch.links.video_link}</a></p>
      {launch.links.flickr_images.map((image, index) => (
        <img key={index} src={image} alt={`Launch ${launch.mission_name} Image ${index + 1}`} />
      ))}
    </div>
  );
}
