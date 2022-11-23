import ContractsService from "../services/contractsService.js";

export default class ContractsController {
  static findAll = async (req, res) => {
    const contracts = await ContractsService.findAll();
  };
  static findByProfessionalId = async (req, res) => {};
  static findByCompanyId = async (req, res) => {};
  static create = async (req, res) => {};
  static remove = async (req, res) => {};
}
