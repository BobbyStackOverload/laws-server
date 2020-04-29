const db = require('./conn')
class lawsModel{
    constructor(id, states) {
      this.id = id;
      this.states = states;
    }

  static async getAllLaws() {
    try {
      const response = await db.any(`SELECT * FROM states ORDER BY id`);
      return response;
    } catch (error) {
      console.error("ERROR: ", error);
      return error;
    }
  }   

  static async getLawTypes(statesId) {
    try {
      const response = await db.any(
        `SELECT lawsinfo FROM laws WHERE states_id = ${statesId};`
        );
      return response;
    } catch (error) {
      console.error('ERROR: ', error);
      return error;
  }
}
}

module.exports = lawsModel;