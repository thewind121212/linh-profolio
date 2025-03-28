import Hero from "./components/layout/hero/Hero";
import config from '@payload-config'
import { getPayloadHMR } from '@payloadcms/next/utilities'
import AboutMeRenderPort from "./components/layout/about-me/AboutMeRenderPoint";



export interface HeroDataType {
    title: string;
    subtitle: string;
    button: string;
}


export default async function Page() {

    const payload = await getPayloadHMR({
        config,
    })


    const heroPayload = await payload.findGlobal({
        slug: 'Hero',
        depth: 5,
    })

    const heroData: HeroDataType = {
        title: 'Linh Dev',
        subtitle: heroPayload.title,
        button: heroPayload.buttonText,
    }







    return (
        <div className="bg-[#000014] w-svw h-auto min-h-[500svh] max-w-svh overflow-hidden main-section">
            <Hero heroData={heroData} />
            <AboutMeRenderPort />
        </div >
    );
}