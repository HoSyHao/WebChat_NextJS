// next.config.js
import path from 'path';
import { fileURLToPath } from 'url';

// Get the directory name
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default {
  async rewrites() {
    return [
      {
        source: '/:path*',
        destination: `${process.env.NEXT_PUBLIC_SERVER_URL}/:path*`, // Sử dụng biến môi trường để lấy URL backend
      },
    ];
  },
  // env: {
  //   NEXT_PUBLIC_SERVER_URL: process.env.NEXT_PUBLIC_SERVER_URL, // Đảm bảo biến môi trường này đã được định nghĩa
  // },
  webpack: (config) => {
    config.resolve.alias['@'] = path.resolve(__dirname, 'src');
    return config;
  },
};