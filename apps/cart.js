import {
    renderRow,
} from './utils.js';

import {
    gamesArray
} from './games-data.js'


export const cart = [

    {
        id: 'csgo',
        quantity: 5
    },

    {
        id: 'stardew-valley',
        quantity: 4
    },

    {
        id: 'for-the-king',
        quantity: 3
    }

];

const table = document.getElementById('cart-table')

for (const cartItem of cart) {
    const row = renderRow(cartItem);

    table.append(row);
}