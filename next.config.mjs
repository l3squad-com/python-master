/** @type {import('next').NextConfig} */

const isDev = process.env.NODE_ENV === 'development';

const nextConfig = {
    output: isDev ? 'standalone' : 'export',
    basePath: isDev ? '' : '/<python-master>',
    assetPrefix: isDev ? '' : '/<python-master>',
};

export default nextConfig;