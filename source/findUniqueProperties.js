'use strict';

/**
 * Функция находит уникальные свойства каждого из объектов
 * Возвращает уникальные свойства и их значение как новый объект
 * @param {Object} obj1 - первый объект
 * @param {Object} obj2 - второй объект
 * @return {Object} - объект имеющий уникальные свойства и значения
*/
const findUniqueProperties = (obj1, obj2) => {
    if (typeof obj1 !== 'object' || typeof obj2 !== 'object' || obj1 === null || obj2 === null) {
        return {};
    }
    if (obj1 === obj2) {
        return {};
    }
    if (Object.keys(obj1).length === 0) {
        return { ...obj2 };
    }
    if (Object.keys(obj2).length === 0) {
        return { ...obj1 };
    }


    const ans = [...new Set([...Object.keys(obj1), ...Object.keys(obj2)])];

    return ans.reduce((result, key) => {
        const in_obj1 = key in obj1;
        const in_obj2 = key in obj2;

        if (in_obj1 && !in_obj2) {
            result[key] = obj1[key];
        } else if (!in_obj1 && in_obj2) {
            result[key] = obj2[key];
        }

        return result;
    }, {});
};