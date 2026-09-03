export const SITE_NAME = "DareTechX";
export const SITE_TAGLINE = "Build. Deploy. Secure.";
export const SITE_URL = "https://daretechx.com";
export const SITE_DESCRIPTION =
	"DareTechX builds, deploys, and secures AI and software for US businesses. Forward deployed engineering that gets AI into production. Based in Maryland, DC metro.";

export const PHONE_DISPLAY = "(240) 424-1444";
export const PHONE_TEL = "+12404241444";

export const EMAIL = "info@daretechx.com";

export const US_ADDRESS = {
	street: "7375 Executive Pl Suite 400",
	city: "Lanham",
	state: "MD",
	zip: "20706",
	country: "US",
	line: "7375 Executive Pl Suite 400, Lanham, MD 20706",
};

export const BUSINESS_HOURS = "Mon to Fri, plus global coverage across time zones.";

export const WEB3FORMS_ACCESS_KEY = "c341a5e4-b196-45cc-9910-ae9a0176ac39";

export type Service = {
	slug: string;
	href: string;
	title: string;
	shortTitle?: string;
	description: string;
	icon: string;
};

export const SERVICES: Service[] = [
	{
		slug: "forward-deployed-engineering",
		href: "/services/forward-deployed-engineering",
		title: "Forward Deployed AI Engineering",
		shortTitle: "Forward Deployed Engineering",
		description:
			"We embed with your team and ship working AI inside your real systems, not a sandbox.",
		icon: "rocket",
	},
	{
		slug: "ai-automation",
		href: "/services/ai-automation",
		title: "AI & Automation Solutions",
		shortTitle: "AI & Automation",
		description:
			"Chatbots, copilots, and workflow automation trained on your own data.",
		icon: "sparkles",
	},
	{
		slug: "custom-software-development",
		href: "/services/custom-software-development",
		title: "Custom Software Development",
		shortTitle: "Custom Software",
		description:
			"Web, mobile, and enterprise applications built around how you actually work.",
		icon: "code",
	},
	{
		slug: "cybersecurity",
		href: "/services/cybersecurity",
		title: "Cybersecurity Services",
		shortTitle: "Cybersecurity",
		description:
			"Find the gaps before attackers do. Assessments, penetration testing, hardening.",
		icon: "shield",
	},
	{
		slug: "cloud-devops",
		href: "/services/cloud-devops",
		title: "Cloud & DevOps",
		shortTitle: "Cloud & DevOps",
		description:
			"Migrate, scale, and automate your infrastructure without the downtime.",
		icon: "cloud",
	},
	{
		slug: "data-engineering",
		href: "/services/data-engineering",
		title: "Data Engineering & Analytics",
		shortTitle: "Data Engineering",
		description:
			"Clean pipelines and dashboards that turn scattered data into decisions.",
		icon: "chart",
	},
];

export type Industry = {
	slug: string;
	href: string;
	name: string;
	blurb: string;
};

export const INDUSTRIES: Industry[] = [
	{
		slug: "financial-services",
		href: "/industries/financial-services",
		name: "Financial Services & Fintech",
		blurb:
			"AI and software built for compliance-heavy, high-stakes environments.",
	},
	{
		slug: "healthcare",
		href: "/industries/healthcare",
		name: "Healthcare",
		blurb: "Secure, compliant systems that handle sensitive data properly.",
	},
	{
		slug: "government",
		href: "/industries/government",
		name: "Government & Public Sector",
		blurb:
			"Reliable delivery for regulated, accountable environments, from our DC-metro base.",
	},
	{
		slug: "retail-ecommerce",
		href: "/industries/retail-ecommerce",
		name: "Retail & E-commerce",
		blurb: "Commerce platforms and automation that scale with demand.",
	},
];

export const SERVICE_ICONS: Record<string, string> = {
	rocket:
		"M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z",
	sparkles:
		"M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z",
	code: "M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5",
	shield:
		"M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z",
	cloud: "M2.25 15a4.5 4.5 0 004.5 4.5H18a3.75 3.75 0 001.332-7.257 3 3 0 00-3.758-3.848 5.25 5.25 0 00-10.233 2.33A4.502 4.502 0 002.25 15z",
	chart: "M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z",
};
