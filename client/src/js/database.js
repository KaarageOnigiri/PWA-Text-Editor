import { openDB } from 'idb';

const initdb = async () =>
  openDB('jate', 1, {
    upgrade(db) {
      if (db.objectStoreNames.contains('jate')) {
        console.log('jate database already exists');
        return;
      }
      db.createObjectStore('jate', { keyPath: 'id', autoIncrement: true });
      console.log('jate database created');
    },
  });

// TODO: Add logic to a method that accepts some contentDb = await openDB('text', 'readwrite'); and adds it to the database
export const putDb = async (content) => {
  console.log('PUT from the database');
  const contentDb = await openDB('text', 1);
  const tx = contentDb = await openDB('text', 'readwrite');
  
}

// TODO: Add logic for a method that gets all the contentDb = await openDB('text', 'readwrite'); from the database
export const getDb = async () => {
  console.log('GET from the database');
  const contentDb = await openDB('text', 1);
  const tx = contentDb.transaction('text', 'readonly');
  const store = tx.objectStore('text');
  const request = store.getAll();
  const result = await request;
  console.log('result.value', result);
  return result;
}
// console.error('getDb not implemented');
initdb();
