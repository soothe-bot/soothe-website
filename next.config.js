// next.config.js
module.exports = {
  images: {
    domains: ['cdn.discordapp.com'],
  },
  async redirects() {
    return [
      {
        source: "/invite",
        destination: "https://discord.com/api/oauth2/authorize?client_id=1135657945653313566&permissions=826818161680&redirect_uri=https%3A%2F%2Fsoothe.is-a.fun%2Fthanks&response_type=code&scope=guilds.join%20bot%20applications.commands",
        permanent: false,
      },
      {
        source: "/discord",
        destination: "https://discord.gg/WFfjrQxnfH",
        permanent: false,
      },
      {
        source: "/vote",
        destination: "https://top.gg/user/361407102650109952",
        permanent: false,
      },
      {
        source: "/review",
        destination: "https://top.gg/user/361407102650109952",
        permanent: false,
      },
      {
        source: "/github",
        destination: "https://github.com/soothe-bot/soothe",
        permanent: false,
      },
      {
        source: "/docs",
        destination: "/docs/introduction/getting-started",
        permanent: false,
      },
      {
        source: "/terms",
        destination: "/docs/legal/terms",
        permanent: false,
      },
      {
        source: "/author",
        destination: "https://lrmn.is-a.dev/",
        permanent: false,
      },
      {
        source: "/privacy",
        destination: "/docs/legal/privacy",
        permanent: false,
      },
    ];
  },
};
