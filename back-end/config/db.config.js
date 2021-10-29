module.exports = {
    HOST: "localhost",
    USER: "postgres",
    PASSWORD: "rajawali19",
    DB: "etsdb",
    dialect: "postgres",
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
};