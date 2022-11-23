import contracts from "../models/Contract.js";

export default class ContractsService {
  static findAll = () => {
    return contracts.find({});
  };
  static findByProfessionalId = (id) => {
    contracts
      .findById(id)
      .populate("professionalId")
      .exec((err, contracts) => {
        if (err) {
          return `${err.message}`;
        } else {
          return contracts;
        }
      });
  };
  static findByCompanyId = (id) => {
    contracts
      .findById(id)
      .populate("companyId")
      .exec((err, contracts) => {
        if (err) {
          return `${err.message}`;
        } else {
          return contracts;
        }
      });
  };
  static create = (contract) => {
    const newContract = new contracts(contract);
    newContract.save((err) => {
      return `${err.message}`;
    });
    return newContract;
  };
  static remove = (id) => {
    contracts.findByIdAndDelete(id, (err) => {
      return `${err.message}`;
    });
    return "deleted";
  };
}
