import { tariffs } from "../../data/tariffs";
import { Pet } from "../../types/Pet";

export const pets: Pet[] = [
  {
    "id": 1,
    "userId": 1,
    "name": "Мороз",
    "type": "кіт",
    "breed": "Свійський",
    "intolerableFoods": "молоко",
    "favoriteDelicacy": "м'ясо теляче",
    "favoriteToy": "канатик",
    "tariff": tariffs[0].name
  },
  {
    "id": 2,
    "userId": 1,
    "name": "Зефир",
    "type": "кіт",
    "breed": "Сиамський",
    "intolerableFoods": "молоко",
    "favoriteDelicacy": "м'ясо куряче",
    "favoriteToy": "кігтеточка",
    "tariff": tariffs[1].name
  },
  {
    "id": 3,
    "userId": 2,
    "name": "Шарік",
    "type": "собака",
    "breed": "Свійський",
    "intolerableFoods": "риба",
    "favoriteDelicacy": "м'ясо ягня",
    "favoriteToy": "м'яч",
    "tariff": tariffs[2].name
  },
  {
    "id": 4,
    "userId": 3,
    "name": "Бетті",
    "type": "собака",
    "breed": "Йоркширський терьер",
    "intolerableFoods": "картопля",
    "favoriteDelicacy": "м'ясо кроля",
    "favoriteToy": "м'яч",
    "tariff": tariffs[3].name
  },
]
