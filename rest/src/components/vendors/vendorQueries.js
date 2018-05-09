const vendors = require('../../config/database/models/vendorModel');

module.exports.addVendorQuery = (newVendor) => {
  console.log(newVendor);
  return vendors.create(
    {
      name: newVendor.name,
      sales_rep: newVendor.salesRep,
      phone: newVendor.phone,
      email: newVendor.email,
      city: newVendor.city,
      state: newVendor.state
    }
  );
}

module.exports.fetchAllVendorsQuery = () => {
  return vendors.findAll();
}

module.exports.fetchVendorQuery = (vendorId) => {
  console.log(vendorId);
  return vendors.findById(vendorId);
}

module.exports.deleteVendorQuery = (vendorId) => {
  console.log(vendorId);
  return vendors.destroy({ where: { id: vendorId } });
}

module.exports.updateVendorQuery = (vendorId, data) => {
  console.log(vendorId, data);
  return null;
}
