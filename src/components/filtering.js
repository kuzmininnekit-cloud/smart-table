export function initFiltering(elements) {
    // заполняет выпадающие списки опциями, вызывается один раз после загрузки индексов
    const updateIndexes = (elements, indexes) => {
        Object.keys(indexes).forEach((elementName) => {
            elements[elementName].append(
                ...Object.values(indexes[elementName]).map(name => {
                    const option = document.createElement('option');
                    option.value = name;
                    option.textContent = name;
                    return option;
                })
            );
        });
    }
const applyFiltering = (query, state, action) => {
        // @todo: #4.2 — обработать очистку поля
    if (action && action.name === 'clear') {
        const parent = action.parentElement;
        const input = parent.querySelector('input');
        input.value = '';
        state[action.dataset.field] = '';
    }

        // @todo: #4.5 — собрать параметры фильтра для запроса
const filter = {};
    Object.keys(elements).forEach(key => {
        if (elements[key]) {
                // берём поля ввода и списки с непустыми значениями
            if (['INPUT', 'SELECT'].includes(elements[key].tagName) && elements[key].value) {
                filter[`filter[${elements[key].name}]`] = elements[key].value; // вид filter[имя]=значение
            }
        }
    })
         return Object.keys(filter).length ? Object.assign({}, query, filter) : query;
    }                       // закрывает applyFiltering, без второй скобки и точки с запятой

    return {
        updateIndexes,
        applyFiltering
    };
}  