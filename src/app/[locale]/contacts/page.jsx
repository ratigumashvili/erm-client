import PageTitle from "../_components/page-title"
import NothingFound from "../_components/nothing-found"

import { getSinglePage } from "../_lib/apiCalls"
import MarkDownContent from "../_components/markdown-content"

export default async function Contacts({ params }) {

  const { locale } = await params

  const { data } = await getSinglePage('contact', locale)

  if (!data) return <NothingFound />

  return (
    <section>
      <PageTitle>{data.pageTitle}</PageTitle>
      <MarkDownContent markdown={data.content} />

      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2979.8096894235427!2d44.74951179999999!3d41.711991!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40447338ed66f4d3%3A0x5b9b92453af7eba0!2s3%20K.%20Cholokashvili%20Ave%2C%20T&#39;bilisi!5e0!3m2!1sen!2sge!4v1737620387270!5m2!1sen!2sge"
        width="100%"
        height="450"
        style={{ border: "0" }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"></iframe>
        
    </section>
  )
}
