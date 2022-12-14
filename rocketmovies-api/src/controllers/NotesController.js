const knex = require("../database/knex")

class NotesController {
 async create(request, response) {
  const { title, userName, description, tags, rating } = request.body;
  const { user_id } = request.params
  
  const note_id = await knex("notes").insert({
    title,
    userName,
    description,
    user_id,
    rating
  })

  const tagsInsert = tags.map(name => {
    return {
      note_id,
      user_id,
      name
    }
  })
  await knex("tags").insert(tagsInsert)

  response.json(tagsInsert)
 }
}

module.exports = NotesController;