
import images from './projectImages'
const {
	startup,
	startup2,
	startup3,
	startup4
} = images;

export const projectData: {
	id: number;
	target: number;
	pledget: number;
	backers: number;
	image: string;
}[] = [
		{
			id: 1,
			target: 5000,
			pledget: 4500,
			backers: 50,
			image: startup
		},
		{
			id: 2,
			target: 5600,
			pledget: 500,
			backers: 5,
			image: startup2
		},
		{
			id: 3,
			target: 7500,
			pledget: 3500,
			backers: 43,
			image: startup3
		},
		{
			id: 4,
			target: 8000,
			pledget: 4500,
			backers: 41,
			image: startup4
		},
	];