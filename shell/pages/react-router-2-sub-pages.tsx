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
      <h1>React Router app 2</h1>
      <Host
        pathname={pathname}
        remote={{
          packageName: "@micro-frontend-react-router-example/react-router-2",
        }}
      />
    </>
  );
};

export default React;
