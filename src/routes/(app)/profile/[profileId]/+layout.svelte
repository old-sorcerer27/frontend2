<script lang="ts">
	import ProfileInfo from '$lib/components/ProfileInfo.svelte';
	import type { User } from '$lib/server/types';

	const { children } = $props();
	const pages = [
		{ href: 'proposed_exchanges', text: 'Предложения для обмена' },
		{ href: 'proposals', text: 'Хочу обменять' },
        { href: 'wishlist', text: 'Хочу получить' },
        { href: 'active_exchanges', text: 'Активные обмены' },
        { href: 'reviews', text: 'Мои отзывы' },
        { href: 'messages', text: 'Сообщения' },
        { href: 'archive_exchanges', text: 'Архив' },
        { href: 'settings', text: 'Настройки' },
		{ href: 'exchange', text: 'bla' },
		// { href: '', text: 'Профиль' },
		// { href: '', text: 'Выход' },
	];

    const testUser: User = {
		id: 1,
		email: 'example@mail.com',
		username: 'test_user',
		firstName: 'Иван',
		lastName: 'Иванов',
		secondName: 'Иванович',
		avatar: '/avatar.jpg',
		rating: 4.8,
		city: ''
	};
    
</script>

<div class="bg-gray-333 flex grow flex-row font-bold bg-white">
        <div class="flex flex-col gap-2 px-3 pt-6 md:h-screen overflow-y-auto bg-walnut-muted sticky top-0 left-0 z-10 md:block">
		<ProfileInfo user={testUser} />
		<nav class="border-walnut-light border-t">
			<ul>
				{#each pages as { href, text }}
					<li class="mt-3">
						<a
							{href}
                            class="text-walnut-light font-medium transition-colors block p-2 hover:text-blue-700 hover:underline " 
						>
							{text}
						</a>
					</li>
				{/each}
			</ul>
		</nav>
	</div>
    
    <main class="flex-1 p-4 md:p-8">
        {@render children()}
    </main>
</div>

