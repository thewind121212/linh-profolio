
import localFont from 'next/font/local'



export const PPFragment = localFont({
    src: [
        {
            path: './PPFragment-SerifLight.otf',
            weight: '300',
            style: 'normal',
        },
        {
            path: './PPFragment-SerifRegular.otf',
            weight: '400',
            style: 'normal',
        },
        {
            path: './PPFragment-SerifExtraBold.otf',
            weight: '600',
            style: 'normal',
        },
    ],
})
