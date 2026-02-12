/**
 * Функция нах-одит уникальные свойства каждогоиз объектов
 * Возвращает уникальные свойства и их значение как новый объект
 * @param {Object} a - первый объект
 * @param {Object} b - второй объект
 * @return {Object} - объект имеющий уникальные свойства и значения
*/
const findUniqueProperties = (a, b) => {
    const ans = {};
    for (const el in a) {
        if (!(el in b)) {
            ans[el] = a[el];
        }
    }
    for (const el in b) {
        if (!(el in a)) {
            ans[el] = b[el];
        }
    }
    return ans;
};