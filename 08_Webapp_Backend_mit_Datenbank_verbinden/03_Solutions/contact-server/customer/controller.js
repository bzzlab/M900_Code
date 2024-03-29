const Customer = require('./model.js');
const Validation = require('../ValidationService');
const HTTP_STATUS = require('../config/httpcodes.config');
// Create a Customer
const customerObj = new Customer();

// Create and Save a new Customer
function create(req, res) {
  // Validate request
  if (!req.body) {
    res.status(HTTP_STATUS.BAD_REQUEST).send({
      message: "Content can not be empty!"
    });
  }

  //Parse data out from request body
  //Aufgabe: lastName, subject, description, phone hinzufügen
  //--Begin
  let data = {
    "email": req.body.email,
    "firstName": req.body.firstName,
    "lastName": req.body.lastName,
    "subject": req.body.subject,
    "description": req.body.description,
    "phone": req.body.phone,
    "registered": (new Date())
  }
  //--End

  console.log(`Following data parsed from body ..`);
  console.log(data);

  let result = Validation.validateContact(data);
  if (result.isNotValid) {
    res.status(HTTP_STATUS.NOT_ACCEPTABLE).send(result.msg);
  } else {
    // Save Customer in the database
    customerObj.create(data, (err, result) => {
      if (err)
        res.status(HTTP_STATUS.SERVER_ERROR).send({
          message:
              err.message || "Some error occurred while creating the Customer."
        });
      else res.status(HTTP_STATUS.SUCCESSFUL_CREATED).send(result);
      //or
      //else res.status(201).send(`New Contact from ${data.email} has been inserted!`);
    });
  }
}


//Lesen Sie alle Kunden/Daten aus der Tabelle customer aus
function findAll(req, res){
  customerObj.getAll((err, result) => {
    if (err)
      res.status(HTTP_STATUS.SERVER_ERROR).send({
        message:
          err.message || "Some error occurred while retrieving customers."
      });
    else res.send(result);
  });
}

//Aufgabe: Lese einen einzelnen Kunden anhand der ID aus
//--Begin
function findOne(req, res){
  customerObj.findById(req.params.id, (err, result) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(HTTP_STATUS.NOT_FOUND).send({
          message: `Not found Customer with id ${req.params.id}.`
        });
      } else {
        res.status(HTTP_STATUS.SERVER_ERROR).send({
          message: "Error retrieving Customer with id " + req.params.id
        });
      }
    } else res.send(result);
  });
}
//--End

// Update a Customer identified by the customerId in the request
function update(req, res){
  // Validate Request
  if (!req.body) {
    res.status(HTTP_STATUS.BAD_REQUEST).send({
      message: "Content can not be empty!"
    });
  }

  console.log(req.body);

  customerObj.updateById(req.params.id, req.body,
    (err, result) => {
      if (err) {
        if (err.kind === "not_found") {
          res.status(HTTP_STATUS.NOT_FOUND).send({
            message: `Not found Customer with id ${req.params.id}.`
          });
        } else {
          res.status(HTTP_STATUS.SERVER_ERROR).send({
            message: "Error updating Customer with id " + req.params.id
          });
        }
      } else res.send(result);
    }
  );
}


//Aufgabe: Einzelnen Kunden anhand der ID löschen
//--Begin
function remove(req,res){
  customerObj.remove(req.params.id, (err, result) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(HTTP_STATUS.NOT_FOUND).send({
          message: `Not found Customer with id ${req.params.id}.`
        });
      } else {
        res.status(HTTP_STATUS.SERVER_ERROR).send({
          message: "Could not delete Customer with id " + req.params.id
        });
      }
    } else res.send({ message: `Customer was deleted successfully!` });
  });
}
//--End

//Aufgabe: Alle Kunden löschen
//--Begin
function removeAll(req, res){
  customerObj.removeAll((err, result) => {
    if (err)
      res.status(HTTP_STATUS.SERVER_ERROR).send({
        message:
          err.message || "Some error occurred while removing all customers."
      });
    else res.send({ message: `All Customers were deleted successfully!` });
  });
}
//--End


/**
 *  Export validation functions for further usage.
 *  function to export WITHOUT brackets!
 */
module.exports = {
  create,
  findAll,
  findOne,
  update,
  remove,
  removeAll
}
