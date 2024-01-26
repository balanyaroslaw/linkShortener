import mysql, { Connection} from 'mysql2';
import config from '../config/database.config'
export const connection: Connection = mysql.createConnection({
    host     : config.HOST,
    user     : config.USER,
    password : config.PASSWORD,
    database : config.DB
  });
