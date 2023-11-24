import { gql } from '@apollo/client';

export const GET_LAUNCHES = gql`
  query GetLaunches {
    launchesPast(limit: 10, sort: "launch_date_local", order: "desc") {
      id
      mission_name
      launch_date_local
      launch_site {
        site_name_long
      }
      links {
        article_link
        video_link
        flickr_images
      }
      rocket {
        rocket_name
      }
    }
  }
`;
