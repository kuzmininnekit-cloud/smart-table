export function initSearching(searchField) {
    return (query, state, action) => {                  // result заменили на query
        return state[searchField] ? Object.assign({}, query, { // в поле поиска что-то введено
            search: state[searchField]                  // добавляем параметр search
        }) : query;                                     // поле пустое, query без изменений
    }
}