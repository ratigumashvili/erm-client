import PageTitle from "../_components/page-title"

import { getSinglePage } from "../_lib/apiCalls"

export default async function Personnel({ params }) {

  const { locale } = await params

  const { data } = await getSinglePage('employee', locale, 'populate=employee&populate=employee.person')

  if (!data) return "nothing found"

  return (
    <section>
      <PageTitle>{data.pageTitle}</PageTitle>

      {data.employee.map((stuff) => (
        <div key={stuff.id}>
          <h3 className="font-medium text-lg my-4">{stuff.blockTitle}</h3>
          {stuff.person.map((employee) => (
            <div key={employee.id} className="mb-2">
              <p>
                {employee.fullName}
                {employee?.position && <span className="italic"> - {employee.position}</span>}
              </p>
            </div>
          ))}
        </div>
      ))}

    </section>
  )
}
