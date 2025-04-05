<script lang="ts">
    import ReviewsBlock from "$components/Reviews/ReviewsBlock.svelte";

    import type {Book, Review, User} from "$lib/server/types";
    
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

    
    const testUser2: User = {
        id: 2,
        email: 'example@mail.com',
        username: 'test_user2',
        firstName: 'Пётр',
        lastName: 'Петров',
        secondName: 'Петрович',
        avatar: '/path/to/image.jpg',
        rating: 4.4,
        city: 'Самара',
    };

    const reviews: Review[] = [
        {
            text: 'Отличный продавец, всё пришло вовремя!',
            user: testUser,
            date: new Date('2024-02-28')
        },
        {
            text: 'Качество товара превзошло ожидания, спасибо!',
            user: testUser,
            date: new Date('2024-02-28')
        },
        {
            text: 'Быстрая доставка и вежливое обслуживание, рекомендую!',
            user: testUser,
            date: new Date('2023-08-15')
        },
        {
            text: 'Продукт пришёл в отличном состоянии, буду заказывать ещё!',
            user: testUser2,
            date: new Date('2023-11-20')
        },
        {
            text: 'Всё отлично, продавец профессионал своего дела!',
            user: testUser2,
            date: new Date('2024-01-10')
        },
    ];
    const book: Book = { id: 1, author: 'Анна Ахматова', title: 'Реквием', data: '...' };
    
</script>

<div>
<ReviewsBlock Reviews={reviews}, Book={book}/>
</div>


