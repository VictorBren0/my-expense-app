import { useSQLiteContext } from "expo-sqlite/next";

export type UserCreateDatabase = {
    name: string;
    color: string;
};

export type UserResponseDatabase = {
    id: number;
    name: string;
    color: string;
    created_at: string;
};

export function useUsersRepository() {
    const db = useSQLiteContext();

    function create(user: UserCreateDatabase) {
        try {
            const statement = db.prepareSync(
                "INSERT INTO users (name, color, created_at) VALUES (?, ?, ?)"
            );

            statement.executeSync([user.name, user.color, new Date().toISOString()]);
        } catch (error) {
            throw error;
        }
    }

    function list() {
        try {
            return db.getAllSync<UserResponseDatabase[]>("SELECT * FROM users");
        } catch (error) {
            throw error;
        }
    }
    
    return {
        create,
        list,
    };
}
