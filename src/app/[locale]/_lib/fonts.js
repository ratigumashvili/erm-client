import localFont from "next/font/local";

export const firaGo = localFont({
    src: [
        {
            path: "../../fonts/firago-300.ttf",
            weight: "300"
        },
        {
            path: "../../fonts/firago-400.ttf",
            weight: "400"
        },
        {
            path: "../../fonts/firago-500.ttf",
            weight: "500"
        },
        {
            path: "../../fonts/firago-700.ttf",
            weight: "700"
        },
    ],
    variable: "--font-firaGo"
})

export const bpg = localFont({
    src: [
        {
            path: '../../fonts/bpg-nino-mtavruli-webfont.ttf',
            weight: '400'
        },
        {
          path: '../../fonts/bpg_nino_mtavruli_bold.ttf',
          weight: '600'
        }
    ],
    variable: "--font-bpg"
  })