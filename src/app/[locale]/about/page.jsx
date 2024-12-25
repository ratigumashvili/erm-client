import PageTitle from "../_components/page-title"
import MarkDownContent from "../_components/markdown-content"
import NothingFound from "../_components/nothing-found"

import { getMetaData, getSinglePage } from "../_lib/apiCalls"

export async function generateMetadata ({params}) {
  const {locale} = await params
  const {data} = await getMetaData('about', locale)
  console.log("meta: ", data)
}

export default async function About({ params }) {

  const { locale } = await params

  const { data } = await getSinglePage('about', locale)

  if (!data) return <NothingFound />

  return (
    <section>
      <PageTitle>{data.pageTitle}</PageTitle>
      <h3 className="text-lg font-medium text-center mb-4">{data.subtitle}</h3>
      <MarkDownContent markdown={data.content} />
      <div className="my-12" />
      <MarkDownContent markdown={data.keywords} />
    </section>
  )
}
