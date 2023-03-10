import  pkg  from "pg";

const { Client } = pkg;

export const client = new Client({
    // host: "localhost",
    user: "postgres",
    password: "kalimantan",
    database: "integer",
    // port: 5432

});

await client.connect();

