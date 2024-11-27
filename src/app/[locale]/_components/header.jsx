"use client"

import { useRouter, usePathname, Link } from "@/i18n/routing"
import { useSearchParams } from "next/navigation"

import { NAVIGATION } from "../_lib/constants"
import { useTranslations } from "next-intl"

function LanguageSwitcher({ locale }) {

    const router = useRouter()
    const pathname = usePathname()
    
    const searchParams = useSearchParams()

    const handleLanguageChange = (lang) => {
        lang === 'ka' ? router.replace(pathname + '?' + searchParams, { locale: 'ka' }) : router.replace(pathname + '?' + searchParams, { locale: 'en' })
    }

    return (
        <div>
            {locale === 'ka' ? (
                <button onClick={() => handleLanguageChange("en")}>English</button>
            ) : (
                <button onClick={() => handleLanguageChange("ka")}>ქართული</button>
            )}
        </div>
    )
}

function DesktopNavigation () {
    
    const t = useTranslations("Navbar")

    return (
        <ul className="flex gap-4">
            {NAVIGATION.map((item) => (
                <li key={item.id} className="font-firaGo">
                    <Link href={`${item.path}`}>{t(item.title)}</Link>
                </li>
            ))}
        </ul>
    )
}

export default function Header({ locale }) {
    return (
        <header className="mb-8 flex items-center justify-between">
            <DesktopNavigation />
            <LanguageSwitcher locale={locale} />
        </header>
    )
}
