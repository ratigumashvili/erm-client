"use client"

import { useRouter, usePathname } from "@/i18n/routing"
import { useSearchParams } from "next/navigation"

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

export default function Header({ locale }) {
    return (
        <div className="mb-8">
            <LanguageSwitcher locale={locale} />
        </div>
    )
}
