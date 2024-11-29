import PageTitle from "../_components/page-title"

import { getSinglePage } from "../_lib/apiCalls"

export default async function Contacts({ params }) {

  const { locale } = await params

  const { data } = await getSinglePage('contact', locale)

  if (!data) return "nothing found"

  return (
    <section>
      <PageTitle>{data.pageTitle}</PageTitle>
    </section>
  )
}
