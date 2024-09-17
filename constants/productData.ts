
import images from './projectImages'
const {
	startup,
	startup2,
	startup3,
	startup4
} = images;

export const projectData: {
	id: number;
	title: string;
	description: string;
	story: string;
	target: number;
	pledget: number;
	backers: number;
	image: string;
	gallery: string[];
}[] = [
		{
			id: 1,
			title:'Facebook',
		description: "Connect with friends, family, and communities. Share moments, stay informed, and engage with the world on a global social network.",
		story: "Created to connect people globally, Facebook fosters communication, expression, and social engagement in a dynamic and interactive platform.",
			target: 5000,
			pledget: 4500,
			backers: 50,
			image: startup,
			gallery: [startup, startup2, startup3, startup4]
		},
		{
			id: 2,
			title: 'Google',
			description: "Search the world’s information, explore knowledge, and access everything from web pages to apps with the most powerful search engine.",
			story: "Born from a mission to organize global information, Google evolved into a comprehensive platform that powers search, knowledge, and digital innovation.",
			target: 5600,
			pledget: 500,
			backers: 5,
			image: startup2,
			gallery: [startup, startup2, startup3, startup4]
		},
		{
			id: 3,
			title: 'Microsoft',
			description: "Empower productivity with cutting-edge software and hardware solutions, revolutionizing work, education, and personal computing.",
			story: "From personal computing to cloud solutions, Microsoft’s journey has focused on empowering every person and organization to achieve more through technology.",
			target: 7500,
			pledget: 3500,
			backers: 43,
			image: startup3,
			gallery: [startup, startup2, startup3, startup4]
		},
		{
			id: 4,
			title: 'Netflix',
			description: "Stream endless movies and shows. Watch anytime, anywhere. Entertainment tailored to your taste, for a new era of content consumption.",
			story: "From DVDs to global streaming, Netflix revolutionized how the world watches entertainment, offering personalized content and a vast library of films and series.",
			target: 8000,
			pledget: 4500,
			backers: 41,
			image: startup4,
			gallery: [startup, startup2, startup3, startup4]
		},
	];