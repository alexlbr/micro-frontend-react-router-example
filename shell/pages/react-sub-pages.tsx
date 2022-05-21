import type { NextPage } from "next";
import { Host } from "@leanjs/next";
import { useRouter } from "next/router";

const React: NextPage = () => {
  const {
    query: { id },
  } = useRouter();
  const pathname = Array.isArray(id) ? id[0] : id;

  return (
    <>
      <h1>Hosting multiple pages</h1>
      <Host
        pathname={pathname}
        remote={{
          packageName: "@micro-frontend-react-router-example/remote",
        }}
      />
    </>
  );
};

/*
👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇
For this page to work we need to add the following in next.config.js:
async rewrites() {
  return [
    {
      source: '/react-sub-pages/:id',
      destination: '/react-sub-pages?id=:id',
    },
  ];
},
*/

export default React;
