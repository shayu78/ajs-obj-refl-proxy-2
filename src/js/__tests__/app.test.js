import getSpecialCharacterProps from '../app';

test('getSpecialCharacterProps - throw (object has no special property', () => {
  const data = Object.create({ proto: true });
  expect(() => {
    getSpecialCharacterProps(data);
  }).toThrowError(Error);
});

test('getSpecialCharacterProps - throw (incorrect function parameter)', () => {
  expect(() => {
    getSpecialCharacterProps(true);
  }).toThrowError(Error);
});

test('getSpecialCharacterProps - throw (incorrect object special property)', () => {
  expect(() => {
    getSpecialCharacterProps({
      name: 'Лучник',
      type: 'Bowman',
      health: 50,
      level: 3,
      attack: 40,
      defence: 10,
      special: true,
    });
  }).toThrowError(Error);
});

test('getSpecialCharacterProps', () => {
  expect(getSpecialCharacterProps({
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
        description: 'Тройной выстрел наносит тройной урон',
      },
    ],
  })).toEqual([
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
      description: 'Тройной выстрел наносит тройной урон',
    },
  ]);
});

test('getSpecialCharacterProps - no description property', () => {
  expect(getSpecialCharacterProps({
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
  })).toEqual([
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
      description: 'Описание недоступно',
    },
  ]);
});
