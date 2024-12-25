import PageTitle from "../_components/page-title";
import NothingFound from "../_components/nothing-found";

import { getSinglePage } from "../_lib/apiCalls";
import Image from "next/image";

export default async function Home({ params }) {

  const { locale } = await params

  const { data } = await getSinglePage('home', locale, 'populate[homepage_banner][fields][0]=url')

  if (!data) return <NothingFound />

  return (
    <section>
      <PageTitle>{data.pageTitle}</PageTitle>
      <Image
        src={data.homepage_banner.url}
        alt="Banner"
        width={1000}
        height={1000}
        className="w-full"
      />
    </section>
  );
}
