import Data from "../modal/data.modal.js";

export const getData = async(req,res) => {
  try {
    const data = await Data.find();
    res.status(200).json(data)
  } catch (error) {
    console.log(error);
    res.status(500).json("Enternal Server Error")
  }
};

