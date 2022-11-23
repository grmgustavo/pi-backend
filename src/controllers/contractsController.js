import ContractsService from "../services/contractsService.js";

export default class ContractsController {
  static findAll = async (req, res) => {
    const contracts = await ContractsService.findAll();
    res.status(200).json(contracts)
  };
  static findByProfessionalId = async (req, res) => {
    const {id} = req.params
    const contract = await ContractsService.findByProfessionalId(id)
    res.status.json(contract)
  };
  static findByCompanyId = async (req, res) => {
    const {id} = req.params
    const contract = await ContractsService.findByCompanyId(id)
    res.status(200).json(contract)
  };
  static create = async (req, res) => {
    const contract = req.body;
    const newContract = await ContractsService.create(contract)
    res.status(201).json(newContract)
  };
  static remove = async (req, res) => {
    const {id} = req.params;
    res.status(200).json(await ContractsService.remove(id))
  };
}
