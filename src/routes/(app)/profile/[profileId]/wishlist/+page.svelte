<script lang="ts">
    import BookList from "$components/Profile/Proposals/BookList.svelte";
	import type { Book } from "$lib/server/types";

      const books: Book[] = [
    { id: 6, author: 'Михаил Булгаков', title: 'Мастер и Маргарита', data: '...' },
    { id: 7, author: 'Николай Гоголь', title: 'Мертвые души', data: '...' },
    { id: 8, author: 'Иван Тургенев', title: 'Отцы и дети', data: '...' },
    { id: 9, author: 'Владимир Набоков', title: 'Лолита', data: '...' },
    { id: 10, author: 'Борис Пастернак', title: 'Доктор Живаго', data: '...' },
    { id: 1, author: 'Анна Ахматова', title: 'Реквием', data: '...' },
    { id: 2, author: 'Лев Толстой', title: 'Война и мир', data: '...' },
    { id: 3, author: 'Федор Достоевский', title: 'Преступление и наказание', data: '...' },
    { id: 4, author: 'Антон Чехов', title: 'Палата №6', data: '...' },
    { id: 5, author: 'Александр Пушкин', title: 'Евгений Онегин', data: '...' },
];
</script>


<BookList Books = {books}/>