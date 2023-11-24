export interface Launch {
  id: string;
  mission_name: string;
  launch_date_local: string;
  links: {
    video_link: string;
  };
  // Add any other fields that are used in your component and returned by the query
}