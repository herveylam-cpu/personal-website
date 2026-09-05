// About page work-experience timeline, newest first.
export interface Role {
  title: string;
  dateRange: string;
  tag?: string; // e.g. "On-site"
  description: string;
}

export interface Company {
  name: string;
  location: string;
  logoAlt: string;
  roles: Role[];
}

export const experience: Company[] = [
  {
    name: "SEA / Monee",
    location: "Singapore",
    logoAlt: "SEA / Monee logo",
    roles: [
      {
        title: "Design Manager | Monee",
        dateRange: "Dec 2021 – Present · 4 yrs 10 mos",
        description:
          "As the Head of Design, leading the design team of Monee, responsible for the design of over 20 financial products, including Maribank, ShopeePay, SPayLater, Shopee Credit, Insurance, and Investment. Established design principles and strategy, oversaw the team's delivery to meet both business needs and user behavior, managed the team and projects, and handled talent recruitment.",
      },
      {
        title: "Design Lead | MariBank",
        dateRange: "Jun 2019 – Dec 2021 · 2 yrs 7 mos",
        description:
          "Led the design team for MariBank, a digital bank under the SEA group, built from scratch. Defined design principles, design language, and components; designed new features and managed the team, including talent recruitment. MariBank launched in 3 countries and acquired over 20 million customers in the region.",
      },
    ],
  },
  {
    name: "JD.com",
    location: "Beijing, China",
    logoAlt: "JD.com logo",
    roles: [
      {
        title: "Lead Designer",
        dateRange: "Jun 2018 – Jun 2019 · 1 yr 1 mo",
        tag: "On-site",
        description:
          "As PIC and Lead Designer of the JD Plus membership project, led a team of 8 designers, focused on user-acquisition and GMV-conversion design — helping JD Plus acquire 10 million users and reach ¥10 billion in annual GMV within 1.5 years.",
      },
      {
        title: "Senior Designer",
        dateRange: "Jun 2017 – Jun 2018 · 1 yr 1 mo",
        description:
          "As an individual contributor, responsible for the JD.com seller center and several partner service platforms. Initiated the seller center's design-enhancement project, which received positive feedback from sellers; the seller center was later rebranded and productized as the LingLong (京东玲珑) SaaS platform.",
      },
    ],
  },
  {
    name: "Tencent",
    location: "Shenzhen, China",
    logoAlt: "Tencent logo",
    roles: [
      {
        title: "User Experience Designer",
        dateRange: "Sep 2016 – Jun 2017 · 10 mos",
        description:
          "Designer at Tencent Music, responsible for the live-streaming project — interface design for both the streamer and audience sides. Involved in daily product iteration and initiated design enhancements, balancing business needs with user experience.",
      },
      {
        title: "User Experience Designer",
        dateRange: "May 2014 – Sep 2016 · 2 yrs 5 mos",
        description:
          "Designer at Tencent QQ Browser, the most popular mobile browser in China at the time. Supported the PIC designer on in-app feature product design, including News, Novels, Weather, and Search & Recommendations.",
      },
    ],
  },
];
