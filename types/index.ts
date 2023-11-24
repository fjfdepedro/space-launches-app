export interface Launch {
  id: string;
  mission_name: string;
  launch_date_local: string;
  details: string;
  links: {
    article_link: string;
    video_link: string;
    flickr_images: string[];
  };
  rocket: {
    rocket_name: string;
  };
}
