import dotenv from 'dotenv'

dotenv.config()

export default {
    PORT : process.env.PORT || 8080,
    TIPO_DE_PERSISTENCIA: 'MONGODB',    // 'MEM', 'FILE', 'MONGODB'
    STR_CNX: process.env.CNX || null
}

