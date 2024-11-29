import Link from "next/link"

import { useTranslations } from "next-intl"

export default function Footer() {

    const t = useTranslations("Footer")

    const currentYear = new Date().getFullYear()

    const getCurrentYear = currentYear > 2024 ? `2024 - ${currentYear},` : currentYear

    return (
        <footer className="h-10 py-6 md:py-3 mt-auto flex items-center justify-center bg-slate-900 text-white">
            <p className="flex flex-col md:flex-row items-center gap-1 text-xs">
                <span>&copy; {getCurrentYear}</span>
                <Link href={`${t("isu_url")}`} target="blank">{t("isu_title")}</Link>
            </p>
        </footer>
    )
}