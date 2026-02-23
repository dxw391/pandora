import { defineConfig, defineCollection, s } from 'velite'

const posts = defineCollection({
    name: 'Post',
    pattern: 'blog/**/*.md',
    schema: s
        .object({
            title: s.string().max(99),
            slug: s.path().transform(p => p.replace(/^blog\//, '')),
            date: s.isodate(),
            description: s.string().max(999).optional(),
            body: s.mdx(),
        })
        .transform(data => ({ ...data, permalink: `/blog/${data.slug}` }))
})

const themes = defineCollection({
    name: 'Theme',
    pattern: 'themes/**/*.md',
    schema: s
        .object({
            title: s.string().max(99),
            slug: s.path().transform(p => p.replace(/^themes\//, '')),
            icon: s.string().optional(),
            description: s.string().max(999).optional(),
            body: s.mdx(),
        })
        .transform(data => ({ ...data, permalink: `/temi/${data.slug}` }))
})

const proposals = defineCollection({
    name: 'Proposal',
    pattern: 'proposals/**/*.md',
    schema: s
        .object({
            title: s.string().max(99),
            slug: s.path().transform(p => p.replace(/^proposals\//, '')),
            theme: s.string(), // slug of the theme
            date: s.isodate(),
            description: s.string().max(999).optional(),
            status: s.enum(['idea', 'analisi', 'discussione', 'programma', 'realizzato']).default('idea'),
            supports: s.number().default(0),
            pros: s.array(s.string()).optional(),
            cons: s.array(s.string()).optional(),
            body: s.mdx(),
        })
        .transform(data => ({ ...data, permalink: `/temi/${data.theme}/${data.slug}` }))
})

const podcasts = defineCollection({
    name: 'Podcast',
    pattern: 'podcasts/**/*.md',
    schema: s
        .object({
            title: s.string().max(99),
            slug: s.path().transform(p => p.replace(/^podcasts\//, '')),
            date: s.isodate(),
            description: s.string().max(999).optional(),
            duration: s.string().optional(), // es. "45:30"
            audio_url: s.string().optional(), // URL del file audio
            cover: s.string().optional(), // URL immagine di copertina
            featured: s.boolean().default(false),
            body: s.mdx(),
        })
        .transform(data => ({ ...data, permalink: `/blog/podcast/${data.slug}` }))
})

export default defineConfig({
    root: 'content',
    output: {
        data: '.velite',
        assets: 'public/static',
        base: '/static/',
        name: '[name]-[hash].[ext]',
        clean: true
    },
    collections: { posts, themes, proposals, podcasts },
    mdx: {
        rehypePlugins: [],
        remarkPlugins: []
    }
})
