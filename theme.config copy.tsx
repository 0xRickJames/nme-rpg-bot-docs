import React from "react";
import { DocsThemeConfig } from "nextra-theme-docs";

const config: DocsThemeConfig = {
  //titleSuffix: ' – Lands of Ascension',
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
