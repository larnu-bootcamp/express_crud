import db from "../config/database.js"

after(async () => {  
  await db.close();
})