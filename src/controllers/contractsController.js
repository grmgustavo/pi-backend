import contracts from "../models/Contract.js";

export default class ContractController {
  static getAllContracts = (req, res, start) => {
    contracts.find((err, contracts) => {
      if (err) {
        res.status(400).send({ message: `${err.message}` });
      } else {
        res.status(200).send(contracts);
      }
    });
  };

  static getContractByProfessionalId = (req, res, start) => {
    const id = req.params.id;

    contracts
      .findById(id)
      .populate("professionalId")
      .exec((err, contracts) => {
        if (err) {
          res.status(400).send({ message: `${err.message}` });
        } else {
          res.status(200).send(contracts);
        }
      });
  };

  static getContractByCompanyId = (req, res, start) => {
    const id = req.params.id;
    contracts
      .findById(id)
      .populate("companyId")
      .exec((err, contracts) => {
        if (err) {
          res.status(400).send({ message: `${err.message}` });
        } else {
          res.status(200).send(contracts);
        }
      });
  };

  static createContract = (req, res, send) => {
    let contract = new contracts(req.body);
    contract.save((err) => {
      if (err) {
        res.status(500).send(`${err.message} - Failed to creaste new contract`);
      } else {
        res.status(201).send(contract.toJSON());
      }
    });
  };

  static deleteContract = (req, res, send) => {
    const id = req.params.id;
    contracts.findByIdAndDelete(id, (err) => {
      if (!err) {
        res.status(200).send({ message: "Deleted" });
      } else {
        res.status(500).send({ message: err.message });
      }
    });
  };
}
