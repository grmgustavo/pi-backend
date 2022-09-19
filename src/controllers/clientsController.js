import clients from "../models/Client.js";

export default class ClientController {
  static getClients = (req, res, start) => {
    clients.find((err, clients) => {
      res.status(200).send(clients);
    });
  };
  static getClientById = (req, res, start) => {
    const id = req.params.id;

    clients.findById(id, (err, clients) => {
      if (err) {
        res.status(400).send({ message: `${err.message} - Id not found` });
      } else {
        res.status(200).send(clients);
      }
    });
  };

  static createClient = (req, res, start) => {
    let client = new clients(req.body);
    client.save((err) => {
      if (err) {
        res.status(500).send({
          message: `${err.message} - failed to create new Client`,
        });
      } else {
        res.status(201).send(client.toJSON());
      }
    });
  };

  static updateClient = (req, res, start) => {
    const id = req.params.id;

    clients.findByIdAndUpdate(id, { $set: req.body }, (err) => {
      if (!err) {
        res.status(200).send({ message: "Client updated" });
      } else {
        res.status(500).send({ message: err.message });
      }
    });
  };

  static deleteClient = (req, res, start) => {
    const id = req.params.id;

    clients.findByIdAndDelete(id, (err) => {
      if (!err) {
        res.status(200).send({ message: "Deleted" });
      } else {
        res.status(500).send({ message: err.message });
      }
    });
  };
}
