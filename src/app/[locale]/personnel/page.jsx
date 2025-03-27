import PageTitle from "../_components/page-title"
import NothingFound from "../_components/nothing-found"

import { getSinglePage } from "../_lib/apiCalls"

export default async function Personnel({ params }) {

  const { locale } = await params

  const { data } = await getSinglePage('employee', locale, 'populate=employee&populate=employee.person')

  if (!data) return <NothingFound />

  return (
    <section>
      <PageTitle>{data.pageTitle}</PageTitle>

      {data.employee.map((stuff) => (
        <div key={stuff.id}>
          <h3 className="font-medium text-lg my-4">{stuff.blockTitle}</h3>
          {stuff.person.map((member) => (
            <div key={member.id} className="mb-2">
              <p>
                {member.fullName}
                {member?.position && (
                  <>
                  <br />
                  <span className="italic">{member.position}</span>
                  </>
                )}
              </p>
            </div>
          ))}
        </div>
      ))}

    </section>
  )
}
