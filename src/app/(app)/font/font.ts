
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


export const AeoninkFont = localFont({
    src: [
        {
            path: './Aeonik-Light.otf',
            weight: '300',
            style: 'normal',
        },
        {
            path: './Aeonik-Regular.otf',
            weight: '400',
            style: 'normal',
        },
        {
            path: './Aeonik-Medium.otf',
            weight: '500',
            style: 'normal',
        },
        {
            path: './Aeonik-Bold.otf',
            weight: '600',
            style: 'normal',
        },
        {
            path: './Aeonik-LightItalic.otf',
            weight: '300',
            style: 'italic',
        },
        {
            path: './Aeonik-RegularItalic.otf',
            weight: '400',
            style: 'italic',
        },
        {
            path: './Aeonik-MediumItalic.otf',
            weight: '500',
            style: 'italic',
        },
        {
            path: './Aeonik-BoldItalic.otf',
            weight: '600',
            style: 'italic',
        },
    ]
})
