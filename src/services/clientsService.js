import clients from "../models/Client.js";

export default class ClientsService {
  static findAll = async () => {
    return await clients.find({});
  };
  static findById = async (id) => {
    const client = await clients.findById(id);
    if (!client) {
      return "Not found";
    }
    return client;
  };
  static create = async (clientName) => {
    let client = new clients(clientName);
    client.save((err) => {
      if (err) {
        return { message: `Error - ${err.message}` };
      }
    });
    return client;
  };
  static update = (id, clientNameUpdated) => {
    clients.findByIdAndUpdate(id, clientNameUpdated, (err) => {
      if (err) {
        return { message: `Error - ${err.message}` };
      }
    });
    return ClientsService.findById(id);
  };

  static remove = (id) => {
    clients.findByIdAndRemove(id, (err) => {
      if (err) {
        return `Error - ${err.message}`;
      }
    });
    return "Deleted";
  };
}
