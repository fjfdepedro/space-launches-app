import { gql } from '@apollo/client';

export const GET_LAUNCHES = gql`
  query GetLaunches {
    launchesPast(limit: 95, offset: 90) {
      id
      mission_name
      launch_date_local
      details
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
