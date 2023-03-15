import CardComponent from "comonents/ReuseableComponents/CardComponent";
import Layout from "comonents/layout";
import type { ReactElement } from "react";
import * as React from "react";

import type { NextPageWithLayout } from "./_app";
import HomeCard from "comonents/HomeCard";
const Page: NextPageWithLayout = () => {
  // return <FormsDetails />;
  return <HomeCard />;
};
Page.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default Page;
