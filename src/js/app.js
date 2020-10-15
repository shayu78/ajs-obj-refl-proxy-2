/* eslint-disable no-console */

export default function getSpecialCharacterProps(character) {
  if (Object.prototype.hasOwnProperty.call(character, 'special')) {
    const { special } = character;
    if (!Array.isArray(special)) throw new Error('Некорректный тип свойства вариантов специальных атак для персонажа');
    return special.map((value) => {
      const {
        id, name, icon, description = 'Описание недоступно',
      } = value;
      return {
        id, name, icon, description,
      };
    });
  } throw new Error('Отсутствуют варианты специальных атак для персонажа');
}

const character = {
  name: 'Лучник',
  type: 'Bowman',
  health: 50,
  level: 3,
  attack: 40,
  defence: 10,
  special: [
    {
      id: 8,
      name: 'Двойной выстрел',
      icon: 'http://...',
      description: 'Двойной выстрел наносит двойной урон',
    },
    {
      id: 9,
      name: 'Нокаутирующий удар',
      icon: 'http://...',
    },
  ],
};

try {
  const props = getSpecialCharacterProps(character);
  console.log(props);
  getSpecialCharacterProps('');
} catch (error) {
  console.error(error.message);
}
