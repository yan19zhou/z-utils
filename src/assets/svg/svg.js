const svgs = require.context("./", false, /\.svg$/i);

svgs.keys().map(svgs);