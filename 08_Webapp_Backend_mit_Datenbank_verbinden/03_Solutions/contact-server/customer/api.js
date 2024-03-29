const customer = require("./controller.js");
module.exports = app => {
  const customer = require("./controller.js");

  // Create a new Customer
  app.post("/customer", customer.create);

  //M290-Aufgabe: REST-API, um alle Kunden auszugeben
  //--Begin
  // Retrieve all Customers
  app.get("/customers", customer.findAll);
  //--End

  //M290-Aufgabe: REST-API, um EINEN Kunden anhand der ID auszugeben
  //--Begin
  // Retrieve a single Customer with login id
  app.get("/customer/:id", customer.findOne);
  //--End

  // Update a Customer with customerId
  app.put("/customer/:id", customer.update);


  //M290-Aufgabe: REST-API, um EINEN Kunden anhand der ID zu löschen
  //--Begin
  // Delete a Customer with customerId
  app.delete("/customer/:id", customer.remove);
  //--End


  //M290-Aufgabe: REST-API, um alle Kunden zu löschen
  //--Begin
  // delete all customers
  app.delete("/customers", customer.removeAll);
  //--End

};
