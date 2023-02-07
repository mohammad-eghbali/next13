partytown = {
  forward: ["dataLayer.push"],
  resolveUrl: (url) => {
    const siteUrl = "https://next13-blush.vercel.app/proxy";

    if (url.hostname === "www.clarity.ms") {
      const proxyUrl = new URL(`${siteUrl}/clarity/`);
      return proxyUrl;
    }

    return url;
  },
};
