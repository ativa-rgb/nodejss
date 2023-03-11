import pkg from "pg";

const { Client } = pkg;

export const client = new Client({
    host: "db.jfnbgkgxeprwphkcylcd.supabase.co",
    user: "postgres",
    password: "kalimantan28pub.",
    database: "postgres",
    // port: 5432

});

await client.connect();
console.log("database terhubung");

