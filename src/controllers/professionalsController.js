import professionals from "../models/Professional.js";

export default class ProfessionalController {
  static getProfessionals = (req, res, start) => {
    professionals.find((err, professionals) => {
      res.status(200).send(professionals);
    });
  };
  static getProfessionalById = (req, res, start) => {
    const id = req.params.id;

    professionals.findById(id, (err, professionals) => {
      if (err) {
        res.status(400).send({ message: `${err.message} - Id not found` });
      } else {
        res.status(200).send(professionals);
      }
    });
  };

  static createProfessional = (req, res, start) => {
    let professional = new professionals(req.body);
    professional.save((err) => {
      if (err) {
        res.status(500).send({
          message: `${err.message} - failed to create new professional`,
        });
      } else {
        res.status(201).send(professional.toJSON());
      }
    });
  };

  static updateProfessional = (req, res, start) => {
    const id = req.params.id;

    professionals.findByIdAndUpdate(id, { $set: req.body }, (err) => {
      if (!err) {
        res.status(200).send({ message: "Professional updated" });
      } else {
        res.status(500).send({ message: err.message });
      }
    });
  };

  static deleteProfessional = (req, res, start) => {
    const id = req.params.id;

    professionals.findByIdAndDelete(id, (err) => {
      if (!err) {
        res.status(200).send({ message: "Deleted" });
      } else {
        res.status(500).send({ message: err.message });
      }
    });
  };
}
