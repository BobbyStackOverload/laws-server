const db = require('./conn')
class lawsModel{
    constructor(id, states) {
      this.id = id;
      this.states = states;
    }

  static async getAllLaws() {
    try {
      const response = await db.any(`SELECT * FROM laws`);
      return response;
    } catch (error) {
      console.error("ERROR: ", error);
      return error;
    }
  }   

  static async getLawsByTypeId(typesoflaws) {
      try {
        const response = await db.any(
          `SELECT * FROM laws WHERE type_of_laws_id = ${typesoflaws.id};`
        );
        return response;
      } catch (error) {
        console.error("ERROR: ", error);
        return error;
    }
  }
}

module.exports = lawsModel;