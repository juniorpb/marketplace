const Vendor = require('../models/Vendor');

module.exports = {

    // create vendor
    async store(req, res) {

        // get request
        const { name, address } = req.body;
        const { idUser } = req.params;

        // get vendor exist
        const vendorExists = await Vendor.findOne({ name })
        if (vendorExists) {
            return res.json(userExists);
        }

        // create new vendor
        const newVendor = await Vendor.create({
            idUser,
            name,
            address,
        });

        return res.json(newVendor);
    },


    // get all vendors
    async allUsers(req, res) {

        const vendors = await Vendor.find({});

        if (vendors) {
            return res.json(vendors);
        }

        return res.json(200);
    },

    // get all vendors by cep
    async vendorByCity(req, res) {

        // get params in url
        const { cep } = req.params;

        const vendors = await Vendor.find({
            $and: [
                { "address.cep": cep }
            ],
        });

        if (vendors) {
            return res.json(vendors);
        }

        return res.json(200);
    },


    // get all vendors by ID
    async vendorById(req, res) {

        // get params in url
        const { _id } = req.params;

        const vendors = await Vendor.findById({ _id });

        if (vendors) {
            return res.json(vendors);
        }
        return res.json(200);
    },



}