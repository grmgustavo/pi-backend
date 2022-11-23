import companies from "../models/Company.js";

export default class CompaniesService {
  static findAll = async () => {
    return await companies.find({});
  };
  static findById = async (id) => {
    const company = await companies.findById(id);
    if (!company) {
      return { message: `${id} - not found` };
    }
    return company;
  };
  static create = async (company) => {
    const newCompany = await new companies(company);
    newCompany.save((err) => {
      if (err) {
        return `Error - ${err.message}`;
      }
    });
    return "Created new company";
  };
  static update = async (id, companyNameUpdated) => {
    await companies.findByIdAndUpdate(id, companyNameUpdated, (err) => {
      if (err) {
        return `Error - ${err.message}`;
      }
    });
    return "updated";
  };
  static remove = async (id) => {
    await companies.findByIdAndDelete(id, (err) => {
      if (err) {
        return `Error - ${err.message}`;
      }
    });
    return "deleted";
  };
}
