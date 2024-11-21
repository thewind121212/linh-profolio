

import type { GlobalConfig } from 'payload'

export const Header: GlobalConfig = {
    slug: 'Header',
    fields: [
        {
            name: 'title',
            type: 'text',
            required: true,
        },
        {
            name: 'headerMenu',
            type: 'blocks',
            blocks: [
                {
                    slug: 'headerMenuItem',
                    labels: {
                        singular: 'Text Hover',
                        plural: 'Text Hovers',
                    },
                    fields: [
                        {
                            name: 'title',
                            type: 'text',
                            required: true,
                        },
                        {
                            name: 'link',
                            type: 'text',
                        },
                        {
                            name: 'animationIcon',
                            type: 'text',
                        }
                    ]
                }
            ]
        },
        {
            name: 'headerMenuInfo',
            type: 'group',
            fields: [
                {
                    name: 'headerMenuInfoEmail',
                    type: 'text',
                    required: true,
                },
                {
                    name: 'headerMenuInfoPhone',
                    type: 'text',
                    required: true,
                },
                {
                    name: 'headerMenuInfoLocation',
                    type: 'text',
                    required: true,
                },
                {
                    name: 'headerMenuInfoTime',
                    type: 'text',
                    required: true,
                },
                {
                    name: 'headerMenuInfoHomeLab',
                    type: 'text',
                    required: true,
                },
                {
                    name: 'headerMenuInfoFacebook',
                    type: 'text',
                    required: true,
                },
                {
                    name: 'headerMenuInfoTele',
                    type: 'text',
                    required: true,
                },
                {
                    name: 'headerMenuInfoGithub',
                    type: 'text',
                    required: true,
                },
            ],
        }
    ]
}
