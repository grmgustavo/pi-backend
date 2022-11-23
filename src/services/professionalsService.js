import professionals from "../models/Professional.js";

export default class ProfessionalsService {
  static findAll = async () => {
    return await professionals.find({});
  };
  static findById = async (id) => {
    const professional = await professionals.findById(id);
    if (!professional) {
      return "Professional not found";
    }
    return professional;
  };
  static create = async (professional) => {
    const newProfessional = await new professionals(professional);
    newProfessional.save((err) => {
      if (err) {
        return `Error - ${err.message}`;
      }
    });
    return newProfessional;
  };
  static update = async (id, updatedProfessional) => {
    await professionals.findByIdAndUpdate(id, updatedProfessional, (err) => {
      if (err) {
        return `Error - ${err.message}`;
      }
    });
  };
  static remove = async (id) => {
    await professionals.findByIdAndDelete(id, (err) => {
      if (err) {
        return `Error - ${err.message}`;
      }
    });
    return "Deleted";
  };
}
