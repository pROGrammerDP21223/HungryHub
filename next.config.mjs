/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'ap-south-1.graphassets.com',
                port: '',
                pathname: '/**',
            },
        ],
    },
};

export default nextConfig;
