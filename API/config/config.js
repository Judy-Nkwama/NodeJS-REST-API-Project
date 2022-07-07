// !!This is only for the a demo purpose. The privatekey can7t be hard coded it has to be store in an env variable!!
module.exports = {
    privateKey : "privateKey",
    sessionDuration : 5 * 60,// (60 secs * 5) yani 5 mins
    db_conection_options : {
        connectionLimit: 5,
        host: 'localhost',
        user: 'root',
        password: '1234', 
        database: 'storeDB'
    }
};