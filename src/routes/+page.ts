import supabase from '$lib/supabase';

export async function load() {
	const { data, error } = await supabase.from('members').select();
	if (error) {
		console.error('Error while fetching members:', error);
	}
	return {
		props: { members: data ?? [] }
	};
}
