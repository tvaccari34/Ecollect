import Knex from 'knex';

export async function seed(knex: Knex) {
    
    await knex('items').insert([
        { title: 'Lamps & Bulbs', image: 'lampada.svg' },
        { title: 'Batteries', image: 'baterias.svg' },
        { title: 'Sheets & Cardboard', image: 'papeis-papelao.svg' },
        { title: 'Electronics', image: 'eletronicos.svg' },
        { title: 'Organics', image: 'organicos.svg' },
        { title: 'Oil', image: 'oleos.svg' },
    ]);
}