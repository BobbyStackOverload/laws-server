const db = require('./conn')
class lawsModel{
    constructor(id, states) {
      this.id = id;
      this.states = states;
    }

  static async getAllLaws() {
    try {
      const response = await db.any(`SELECT * from states`);
      return response;
    } catch (error) {
      console.error("ERROR: ", error);
      return error;
    }
  }   

  static async getLawsByTypeId(law_id) {
      try {
        const response = await db.any(
          `SELECT * FROM laws WHERE id = ${law_id};`
        );
        return response;
      } catch (error) {
        console.error("ERROR: ", error);
        return error;
    }
  }
}

module.exports = lawsModel;