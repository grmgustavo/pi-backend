import CompaniesService from "../services/companiesService.js";

export default class CompaniesController {
  static findAll = async (req, res) => {
    const companies = await CompaniesService.findAll();
    if (!companies) {
      res.status(400).json("No companies found");
    }
    res.status(200).json(companies);
  };
  static findById = async (req, res) => {
    const { id } = req.params;
    const company = await CompaniesService.findById(id);
    res.status(200).json(company);
  };
  static create = async (req, res) => {
    const company = await CompaniesService.create(req.body);
    res.status(201).json(company);
  };
  static update = async (req, res) => {
    const { id } = req.params;
    const company = req.body;
    res.status(200).send(await CompaniesService.update(id, company));
  };
  static remove = async (req, res) => {
    const { id } = req.params;

    res.status(200).json(await CompaniesService.remove(id));
  };
}
