import PageTitle from "../_components/page-title"
import MarkDownContent from "../_components/markdown-content"

import { getSinglePage } from "../_lib/apiCalls"

export default async function Publications({ params }) {

  const { locale } = await params

  const { data } = await getSinglePage('publication', locale)

  if (!data) return "nothing found"

  return (
    <section>
      <PageTitle>{data.pageTitle}</PageTitle>
      <MarkDownContent markdown={data.content} />
    </section>
  )
}