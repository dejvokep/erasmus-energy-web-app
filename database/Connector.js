const mysql = require('serverless-mysql')({
    config: {
        host     : process.env.DB_HOST,
        database : process.env.DB_DATABASE,
        user     : process.env.DB_USERNAME,
        password : process.env.DB_PASSWORD
    }
})

export async function getSchools() {
    const result = await mysql.query("SELECT schools.name, tasks.* FROM schools JOIN tasks ON schools.id = tasks.school_id")
    await mysql.end()
    return result
}