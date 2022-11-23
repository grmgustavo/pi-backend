import ClientsService from "../services/clientsService.js";

export default class ClientsController {
  static findAll = async (req, res) => {
    const clients = await ClientsService.findAll();
    if (!clients) {
      res.status(400).json("No clients found");
    }
    res.status(200).json(clients);
  };

  static findById = async (req, res) => {
    const { id } = req.params;
    const client = await ClientsService.findById(id);
    res.status(200).json(client);
  };

  static create = async (req, res) => {
    const client = await ClientsService.create(req.body);
    res.status(201).json(client);
  };
  static update = async (req, res) => {
    const { id } = req.params;
    const client = req.body;
    res.status(200).send(await ClientsService.update(id, client));
  };
  static remove = async (req, res) => {
    const { id } = req.params;

    res.status(200).json(await ClientsService.remove(id));
  };
}
