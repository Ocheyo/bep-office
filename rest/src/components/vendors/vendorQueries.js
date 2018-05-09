const vendors = require('../../config/database/models/vendorModel');

module.exports.addVendorQuery = (
  {
    name,
    salesRep,
    phone,
    email,
    city,
    state
  }
) => {
  return vendors.create(
    {
      name,
      salesRep,
      phone,
      email,
      city,
      state
    }
  );
}

module.exports.fetchAllVendorsQuery = () => {
  return vendors.findAll();
}

module.exports.fetchVendorQuery = ({vendorId}) => {
  return vendors.findById(vendorId);
}

module.exports.deleteVendorQuery = ({vendorId}) => {
  console.log(vendorId);
  return vendors.destroy({ where: { id: vendorId } });
}

module.exports.updateVendorQuery = ({vendorId}, data) => {
  console.log(vendorId, data);
  return null;
}
