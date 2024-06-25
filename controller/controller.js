const Model = require("../model/model");
const getAllData = async (req, res) => {
    try {
        const allData = await Model.find({});
        res.status(200).json(allData);
    } catch (error) {
        console.log(error);
    }
};

const getSingleData = async (req, res) => {
    try {
        const name = req.params.name;
        const data = await Model.findOne({ name: name });
        if (!data) {
            // If no data is found, send a 404 response
            return res.status(404).json({ error: "Data not found" });
        }
        res.status(200).json(data);
    } catch (error) {
        console.log(error);
    }
};

module.exports = { getAllData, getSingleData };
