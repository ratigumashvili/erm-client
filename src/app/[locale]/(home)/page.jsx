import PageTitle from "../_components/page-title";
import NothingFound from "../_components/nothing-found";

import { getSinglePage } from "../_lib/apiCalls";

export default async function Home({ params }) {

  const { locale } = await params

  const { data } = await getSinglePage('home', locale)

  if(!data) return <NothingFound />

  return (
    <section>
      <PageTitle>{data.pageTitle}</PageTitle>
    </section>
  );
}
