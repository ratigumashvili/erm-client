"use client"

import { useState } from "react"

import Image from "next/image"
import { useSearchParams } from "next/navigation"
import { useRouter, usePathname, Link } from "@/i18n/routing"

import { useTranslations } from "next-intl"
import { AlignJustify, ChevronsRight, X } from "lucide-react"

import { NAVIGATION } from "../_lib/constants"
import { setActive } from "../_lib/helpers"
import { cn } from "../_lib/utlis"

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

function DesktopNavigation() {

    const t = useTranslations("Navbar")

    const pathname = usePathname()

    return (
        <div className="hidden md:flex items-center gap-4">
            <Image src="/iliauni-logo.png" width={80} height={80} alt="ISU" />
            <ul className="flex gap-4 font-bpg font-normal uppercase">
                {NAVIGATION.map((item) => (
                    <li key={item.id} className={setActive(pathname, item.path)}>
                        <Link href={`${item.path}`}>{t(item.title)}</Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}

function MobileNavigation() {

    const [open, setIsOpen] = useState(true)

    const router = useRouter()
    const pathname = usePathname()

    const handleNavigation = (path) => {
        router.replace(path)
        setIsOpen(false)
    }

    const t = useTranslations("Navbar")

    return (
        <div className="md:hidden w-full flex items-center justify-between">

            <Image src="/iliauni-logo.png" width={80} height={80} alt="ISU" />

            <button onClick={() => setIsOpen((prev) => !prev)}>
                {open ? <X /> : <AlignJustify />}
            </button>

            <div className={cn(
                "bg-slate-100 h-[calc(100vh-160px)] w-full absolute top-[160px] transition-all ease-in-out",
                open ? "-right-0" : "-right-[100%]"
            )}>
                <div className="container flex flex-col gap-4 items-start py-8">
                    {NAVIGATION.map((item) => (
                        <button
                            key={item.id}
                            onClick={() => handleNavigation(item.path)}
                            className={`font-bpg ${setActive(pathname, item.path)}`}
                        >
                            {t(item.title)}
                        </button>
                    ))}
                </div>
            </div>

        </div>
    )
}

export default function Header({ locale }) {

    const t = useTranslations("Header")

    return (
        <header className="bg-slate-100 shadow-md relative">
            <div className="bg-slate-900 text-white">
                <div className="container h-[30px] flex items-center justify-between text-sm">
                    <Link
                        href={`${t("isu_url")}`}
                        target="blank"
                        className="flex items-center gap-2"
                    >
                        {t("isu_title")}
                        <ChevronsRight className="w-3 h-3" />
                    </Link>
                    <LanguageSwitcher locale={locale} />
                </div>
            </div>
            <div className="container h-[130px] flex items-center">
                <DesktopNavigation />
                <MobileNavigation />
            </div>
        </header>
    )
}
