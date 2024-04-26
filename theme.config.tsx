import React from "react";
import { DocsThemeConfig } from "nextra-theme-docs";
import { useRouter } from "next/router";

const config: DocsThemeConfig = {
  //titleSuffix: ' – Lands of Ascension',
  useNextSeoProps() {
    const { asPath } = useRouter();
    if (asPath !== "/") {
      return {
        titleTemplate: "%s – NME Bot",
      };
    }
  },

  faviconGlyph: "⚔",
  logo: <span>NME Bot</span>,
  gitTimestamp: null,
  /*
  project: {
    link: "https://github.com/shuding/nextra-docs-template",
  },
  chat: {
    link: "https://discord.com",
  },
  docsRepositoryBase: "https://github.com/shuding/nextra-docs-template",
  */
  feedback: { content: null },
  editLink: { text: null },
  footer: {
    text: "NME Bot",
    component: undefined,
  },
};

export default config;
