import { redirect } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ locals }) => {
	if (locals.userData) {
		throw redirect(303, `/profile/${locals.userData.id}`);
	}
};
