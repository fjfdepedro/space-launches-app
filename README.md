# SpaceX Launches Application

This application is built using Next.js and Apollo Client. It fetches data from the SpaceX API and displays a list of past SpaceX launches.

## Directory Structure

- `lib/`: Contains utility functions and configurations. Currently, it contains the Apollo Client setup.
- `graphql/`: Contains GraphQL queries used in the application.
- `types/`: Contains TypeScript interfaces used in the application.
- `components/`: Contains React components used in the application.
- `pages/`: Contains the pages of the application. In Next.js, each file in this directory becomes a route automatically.

## Key Files

- `lib/apolloClient.ts`: Sets up Apollo Client and exports a `fetchData` function that fetches data from the SpaceX API.
- `graphql/getLaunches.ts`: Contains the GraphQL query to fetch past SpaceX launches.
- `types/index.ts`: Contains the TypeScript interface for a launch.
- `components/Launches.tsx`: A component that receives an array of launches as a prop and maps over them to render each `LaunchItem`.
- `components/LaunchItem.tsx`: A component that receives a launch as a prop and renders it.
- `pages/index.tsx`: The home page of the application. It fetches the launches data and passes it to the `Launches` component.

## How It Works

When you run `next build`, the `getStaticProps` function in `pages/index.tsx` is called at build time. This function calls `fetchData` with the `GET_LAUNCHES` query, which fetches the past SpaceX launches data from the SpaceX API. The fetched data is serialized to JSON and included in the HTML of the page. This data is then used to pre-render the page.

When a user visits the home page, the server responds with the pre-rendered page. Any additional client-side navigation to this page will use the pre-rendered HTML and run the page's JavaScript, which can then load any additional data using client-side fetches.

The `Home` component receives the launches data and passes it to the `Launches` component. The `Launches` component maps over the launches and renders each one using the `LaunchItem` component.

Each `LaunchItem` component displays the mission name and launch date of a launch. The mission name is a link to the video of the launch.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
