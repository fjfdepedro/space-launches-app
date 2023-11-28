import type { Launch } from '../types';

export function LaunchItem({ launch }: { launch: Launch }) {
  return (
    <div key={launch.id} className="block p-4 m-2 border rounded shadow">
      <div className="flex flex-col space-y-4">
        <h3 className="text-xl font-bold">{ launch.mission_name }</h3>
        <p><strong>Launch Date:</strong> { new Date(launch.launch_date_local).toLocaleDateString("es-ES", {weekday: 'long', day: '2-digit', month: '2-digit', year: 'numeric', timeZone: 'UTC'}) }, { new Date(launch.launch_date_local).toLocaleTimeString("es-ES", {hour: '2-digit', minute: '2-digit', second: '2-digit', timeZone: 'UTC'}) }</p>
        <p><strong>Details:</strong> { launch.details ? launch.details : 'N/A' }</p>
        <p><strong>Rocket Name:</strong> { launch.rocket.rocket_name }</p>
        <p><strong>Article Link:</strong> <a href={launch.links.article_link}>{launch.links.article_link}</a></p>
        <p><strong>Video Link:</strong> <a href={launch.links.video_link}>{launch.links.video_link}</a></p>
        <p><strong>Images:</strong>
        {launch.links.flickr_images.map((image, index) => (
          <img key={index} src={image} width="500px" alt={`Launch ${launch.mission_name} Image ${index + 1}`} />
        ))}
        </p>
      </div>
    </div>
  );
}
