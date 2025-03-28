import * as SQlite from 'expo-sqlite';

export const useDataBase = () => {
    // Abrir la base de datos
    const openDataBase = async () => {
        const db = await SQlite.openDatabaseAsync("sessions.db");
        return db;
    }
    //Inicializar la base de datos (Crear la tabla)
    const initDB = async () => {
        const db = await openDataBase();
        const sql = `CREATE TABLE IF NOT EXISTS sessions (localId TEXT PRIMARY KEY NOT NULL, email TEXT NOT NULL, token TEXT NOT NULL);`;
        const res = await db.execAsync(sql)
        return res;
      };

    const insertSession = async ({ email, localId, token }) => {
        const db = await openDataBase();
        const sql = `INSERT INTO sessions (localId, email, token) VALUES (?, ?, ?);`;
        const args = [localId, email, token];
        const res = await db.runAsync(sql, args);
        return res;
      };
      //Obtener una sesión
    const getSession = async () => {
        const db = await openDataBase();
        const sql = `SELECT * FROM sessions`
        const firstRow = await db.getFirstAsync(sql);
        return firstRow;
    }
    //Borrar todas las sesiones (Cerrar sesión)
    const truncateSessionTable = async () => {
        const db = await openDataBase();
        //borra todo
        const sql = `DELETE FROM sessions`
        const args = [];
        const res = await db.execAsync(sql);
        return res
    }

    return {
        initDB,
        insertSession,
        getSession,
        truncateSessionTable
    }
}