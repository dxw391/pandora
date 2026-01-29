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

export default defineConfig({
    root: 'content',
    output: {
        data: '.velite',
        assets: 'public/static',
        base: '/static/',
        name: '[name]-[hash].[ext]',
        clean: true
    },
    collections: { posts },
    mdx: {
        rehypePlugins: [],
        remarkPlugins: []
    }
})
