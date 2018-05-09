const customers = require('../../config/database/models/customerModel');

module.exports.fetchAllCustomersQuery = () {
  return customers.findAll();
}

module.exports.addCustomerQuery = (newCustomer) => {
  console.log(newCustomer);
  return customers.create(
    {
      name: newCustomer.name,
      phone: newCustomer.phone,
      email: newCustomer.email,
      address: newCustomer.address,
      city: newCustomer.city,
      state: newCustomer.state,
      zip: newCustomer.zip,
      contact: newCustomer.contact
    }
  );
}

module.exports.fetchCustomerQuery = (customerId) => {
  console.log(customerId);
  return customers.findById(customerId);
}

module.exports.deleteCustomerQuery = (customerId) => {
  console.log(customerId);
  return customers.destroy({where: {id: customerId}});
}

module.exports.updateCustomerQuery = (customerId, data) => {
  console.log(customerId, data);
  return null;
}
