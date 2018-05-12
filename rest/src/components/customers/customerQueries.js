const customers = require('../../config/database/models/customerModel');

module.exports.addCustomerQuery = (
  {
    name,
    phone,
    email,
    address,
    city,
    state,
    zip,
    contact
  }
) => {
  return customers.create(
    {
      name,
      phone,
      email,
      address,
      city,
      state,
      zip,
      contact
    }
  );
}

module.exports.fetchAllCustomersQuery = () => {
  return customers.findAll();
}

module.exports.fetchCustomerQuery = ({customerId}) => {
  return customers.findById(customerId);
}

module.exports.deleteCustomerQuery = ({customerId}) => {
  return customers.destroy({where: {id: customerId}});
}

module.exports.updateCustomerQuery = ({customerId}, data) => {
  console.log(customerId, data);
  return null;
}
