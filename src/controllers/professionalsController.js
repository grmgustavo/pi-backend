import ProfessionalsService from "../services/professionalsService.js";

export default class ProfessionalsController {
  static findAll = async (req, res) => {
    const professionals = await ProfessionalsService.findAll();
    res.status(200).json(professionals);
  };
  static findById = async (req, res) => {
    const { id } = req.params;
    const professional = await ProfessionalsService.findById(id);
    res.status(200).json(professional);
  };
  static create = async (req, res) => {
    const professional = await ProfessionalsService.create(req.body);
    res.status(201).json(professional);
  };
  static update = async (req, res) => {
    const { id } = req.params;
    const professional = req.body;
    res.status(200).send(await ProfessionalsService.update(id, professional));
  };
  static remove = async (req, res) => {
    const { id } = req.params;

    res.status(200).json(await ProfessionalsService.remove(id));
  };
}
