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

module.exports.fetchVendorQuery = ({vendor_id}) => {
  console.log(vendor_id);
  return vendors.findById(vendor_id);
}

module.exports.deleteVendorQuery = ({vendor_id}) => {
  console.log(vendor_id);
  return vendors.destroy({ where: { id: vendor_id } });
}

module.exports.updateVendorQuery = ({vendor_id}, data) => {
  console.log(vendor_id, data);
  return null;
}
