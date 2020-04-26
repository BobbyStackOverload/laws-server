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

  // static async getLawsByTypeId(id) {
  //     try {
  //       const response = await db.any(
  //         `SELECT * FROM laws WHERE type_of_laws_id = ${id};`
  //       );
  //       return response;
  //     } catch (error) {
  //       console.error("ERROR: ", error);
  //       return error;
  //   }
  // }

//   static async getLawTypes(statesId) {
//     try {
//       const response = await db.any(
//         `SELECT lawsinfo FROM laws INNER JOIN states ON states.id = laws.states_id = ${id};`
//         );
//       return response;
//     } catch (error) {
//       console.error('ERROR: ', error);
//       return error;
//   }
// }
static async getLawTypes(statesId) {
  try {
    const response = await db.any(
      `SELECT * FROM laws WHERE states_id = ${statesId};`
      );
    return response;
  } catch (error) {
    console.error('ERROR: ', error);
    return error;
}
}
}



module.exports = lawsModel;