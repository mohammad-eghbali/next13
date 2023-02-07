partytown = {
  forward: ["dataLayer.push"],
  resolveUrl: (url) => {
    const siteUrl = "https://next13-blush.vercel.app/proxy";
    if (url.hostname === "www.googletagmanager.com") {
      const proxyUrl = new URL(`${siteUrl}/gtm`);
      const gtmId = new URL(url).searchParams.get("id");
      gtmId && proxyUrl.searchParams.append("id", gtmId);
      return proxyUrl;
    } else if (url.hostname === "www.clarity.ms") {
      const proxyUrl = new URL(`${siteUrl}/clarity/`);
      return proxyUrl;
    } else if (url.hostname === "www.google-analytics.com") {
      const proxyUrl = new URL(`${siteUrl}/analytics/`);
      return proxyUrl;
    } else if (url.hostname === "apis.google.com") {
      const proxyUrl = new URL(`${siteUrl}/google-api/`);
      return proxyUrl;
    } else if (url.hostname === "www.googleoptimize.com") {
      const proxyUrl = new URL(`${siteUrl}/optimize/`);
      return proxyUrl;
    }

    return url;
  },
};
