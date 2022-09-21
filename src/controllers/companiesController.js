import companies from "../models/Company.js";

export default class CompanyController {
  static getCompanies = (req, res, start) => {
    companies
      .find()
      .populate("clientId", "name")
      .exec((err, companies) => {
        res.status(200).json(companies);
      });
  };
  static getCompanyById = (req, res, start) => {
    const id = req.params.id;

    companies
      .findById(id)
      .populate("clientId", "name")
      .exec((err, companies) => {
        if (err) {
          res.status(400).send({ message: `${err.message} - Id not found` });
        } else {
          res.status(200).send(companies);
        }
      });
  };

  static createCompany = (req, res, start) => {
    let company = new companies(req.body);
    company.save((err) => {
      if (err) {
        res.status(500).send({
          message: `${err.message} - failed to create new company`,
        });
      } else {
        res.status(201).send(company.toJSON());
      }
    });
  };

  static updateCompany = (req, res, start) => {
    const id = req.params.id;

    Companies.findByIdAndUpdate(id, { $set: req.body }, (err) => {
      if (!err) {
        res.status(200).send({ message: "Company updated" });
      } else {
        res.status(500).send({ message: err.message });
      }
    });
  };

  static deleteCompany = (req, res, start) => {
    const id = req.params.id;

    companies.findByIdAndDelete(id, (err) => {
      if (!err) {
        res.status(200).send({ message: "Deleted" });
      } else {
        res.status(500).send({ message: err.message });
      }
    });
  };
}
