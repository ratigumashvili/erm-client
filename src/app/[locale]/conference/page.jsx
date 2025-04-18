import Image from "next/image"
import Link from "next/link"

import PageTitle from "../_components/page-title"
import NothingFound from "../_components/nothing-found"

import { getSinglePage } from "../_lib/apiCalls"

export async function generateMetadata({ params }) {

  const { locale } = await params

  const { data } = await getSinglePage('conference', locale)

  return {
    title: data?.pageTitle,
    description: "..."
  }
}

export default async function Conference({ params }) {

  const { locale } = await params

  const { data } = await getSinglePage('conference', locale, "populate[conference][populate][banner][fields][0]=url&populate[conference][populate][banner][fields][1]=alternativeText")

  if (!data) return <NothingFound />

  return (
    <section>
      <PageTitle>{data.pageTitle}</PageTitle>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {data.conference.map((item) => (
          <div key={item.id} className="">
            <h3 className="text-lg font-medium mb-2 text-center">
              {item.title}
              {item.subtitle && (
                <>
                  <br />
                  {item.subtitle}
                </>
              )}
            </h3>
            <h4 className="text-sm mb-4 text-center">{item.dates}</h4>
            {item.banner && (
              <Image
                src={item?.banner?.url}
                alt={item?.banner?.alternativeText}
                width={500}
                height={100}
                className="mb-3 w-full object-cover"
              />
            )}
            <Link href={item.url} target="blank" className="hover:underline">{item.urlTitle}</Link>
          </div>
        ))}
      </div>

    </section>
  )
}
