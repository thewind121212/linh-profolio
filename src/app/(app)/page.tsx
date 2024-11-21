import Hero from "./components/layout/hero/Hero";
import config from '@payload-config'
import { getPayloadHMR } from '@payloadcms/next/utilities'
import Experiment from "./components/layout/experiment";



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
        <div className="bg-[#000014] w-svw h-auto min-h-[200svh]">
            <Hero heroData={heroData} />
            <Experiment />
            <div className="section-two relative z-[991] mt-[100svh] opacity-0">
                <div className="section-four w-full h-svh bg-[#FFCCEA]"></div>
            </div>
        </div >
    );
}