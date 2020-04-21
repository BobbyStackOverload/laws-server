const db = require('./conn')
class lawsModel{
    constructor(id, author, blog_posts, title) {
      this.id = id;
      this.author = author;
      this.blog_posts = blog_posts;
      this.title = title;
    }

  static async getAllLaws() {
    try {
      const response = await db.any(`SELECT * FROM laws;`);
      return response;
    } catch (error) {
      console.error("ERROR: ", error);
      return error;
    }
  }   

  static async getLawsByTypeId(law_id) {
      try {
        const response = await db.any(
          `SELECT * FROM comments WHERE id = ${law_id};`
        );
        return response;
      } catch (error) {
        console.error("ERROR: ", error);
        return error;
    }
  }
}

module.exports = lawsModel;