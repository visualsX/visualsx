export default function robots() {
    return {
        rules: {
            userAgent: '*',
            allow: '/',
        },
        sitemap: 'https://visualsx.vercel.app/sitemap.xml',
    };
}
