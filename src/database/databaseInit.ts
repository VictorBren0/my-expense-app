import { SQLiteDatabase } from "expo-sqlite/next";

export async function databaseInit(db: SQLiteDatabase) {
    await db.execAsync(`
        CREATE TABLE IF NOT EXISTS users (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT NOT NULL,
            color TEXT NOT NULL,
            created_at TEXT NOT NULL
        );
    
        CREATE TABLE IF NOT EXISTS expenses (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            user_id INTEGER NOT NULL,
            total REAL NOT NULL,
            created_at TEXT NOT NULL,
            FOREIGN KEY (user_id) REFERENCES users (id)
        );

        CREATE TABLE IF NOT EXISTS transactions (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            expense_id INTEGER NOT NULL,
            description TEXT NOT NULL,
            value REAL NOT NULL,
            date TEXT NOT NULL,
            created_at TEXT NOT NULL,
            image BLOB,
            FOREIGN KEY (expense_id) REFERENCES expenses (id)
        );
    `);
}
