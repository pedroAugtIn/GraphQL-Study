let games = [
    {id: '1', title: 'The Legend of Zelda: Breath of the Wild', platform: ['Nintendo Switch']},
    {id: '2', title: 'Red Dead Redemption 2', platform: ['PlayStation 4', 'Xbox One', 'PC']},
    {id: '3', title: 'Super Mario Odyssey', platform: ['Nintendo Switch']},
    {id: '4', title: 'The Witcher 3: Wild Hunt', platform: ['PlayStation 4', 'Xbox One', 'PC']},
    {id: '5', title: 'Fortnite', platform: ['PlayStation 4', 'Xbox One', 'Nintendo Switch', 'PC', 'iOS', 'Android']}
]

let authors = [
    {id: '1', name:'mario', verified: true},
    {id: '2', name:'yoshi', verified: false},
    {id: '3', name:'peach', verified: true}
]

let reviews = [
    {id: '1', rating: 9, content: 'lorem ipsum', author_id: '1', game_id: '2'},
    {id: '2', rating: 10, content: 'lorem ipsum', author_id: '2', game_id: '1'},
    {id: '3', rating: 7, content: 'lorem ipsum', author_id: '3', game_id: '3'},
    {id: '4', rating: 5, content: 'lorem ipsum', author_id: '2', game_id: '4'},
    {id: '5', rating: 8, content: 'lorem ipsum', author_id: '2', game_id: '5'},
    {id: '6', rating: 7, content: 'lorem ipsum', author_id: '1', game_id: '2'},
    {id: '7', rating: 10, content: 'lorem ipsum', author_id: '3', game_id: '1'}
]

export default {games, authors, reviews}