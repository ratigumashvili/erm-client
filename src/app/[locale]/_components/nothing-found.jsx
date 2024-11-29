import { Link } from "@/i18n/routing"
import { useTranslations } from "next-intl"

import { TriangleAlert } from "lucide-react"

export default function NothingFound() {

    const t = useTranslations("NothingFound")

    return (
        <section className="flex flex-col items-center justify-center gap-4 pt-10">
            <div className="flex items-center gap-4">
                <TriangleAlert className="w-10 h-10" />
                <h1 className="text-4xl font-medium">{t("title")}</h1>
            </div>
            <h2 className="text-xl font-medium">{t("subtitle")}</h2>
            <Link href={'/'} className="bg-slate-900 text-white p-4 my-6 rounded-md hover:bg-slate-900/90 transition-all">{t("cta")}</Link>
        </section>
    )
}
