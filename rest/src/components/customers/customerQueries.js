const customers = require('../../config/database/models/customerModel');

module.exports.fetchAllCustomersQuery = () => {
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

module.exports.fetchCustomerQuery = ({customer_id}) => {
  console.log(customer_id);
  return customers.findById(customer_id);
}

module.exports.deleteCustomerQuery = ({customer_id}) => {
  console.log(customer_id);
  return customers.destroy({where: {id: customer_id}});
}

module.exports.updateCustomerQuery = ({customer_id}, data) => {
  console.log(customer_id, data);
  return null;
}
