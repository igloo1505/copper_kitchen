const withPWA = require("next-pwa")({
	dest: "public",
	register: process.env.NODE_ENV !== "development",
	disable: process.env.NODE_ENV === "development",
	// Only useful in development mode, it's handled automatically on deploy
	// mode: "production",
});

const withBundleAnalyzer = require("@next/bundle-analyzer")({
	enabled: process.env.ANALYZE === "true",
	openAnalyzer: process.env.NODE_ENV === "development",
});

module.exports = withPWA(
	withBundleAnalyzer({
		reactStrictMode: true,
		poweredByHeader: false,
		distDir: "build",
		eslint: {
			// Warning: This allows production builds to successfully complete even if
			// your project has ESLint errors.
			// ignoreDuringBuilds: true,
		},
		experimental: {
			// outputStandalone: true,
		},
		compiler: {
			removeConsole: process.env.NODE_ENV !== "development",
		},
		webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
			// Important: return the modified config
			return config;
		},
	})
);
