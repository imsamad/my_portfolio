import Skill from "../../../lib/models/Skill";
import dbConnect from "../../../lib/dbConnect";
const index = async (req, res) => {
  return res.status(304).send("Not Available");
  if (req.method === "POST")
    try {
      await dbConnect();
      const skills = req.body.skills;
      const result = await Skill.create(skills);
      return res.status(200).json({
        success: true,
        data: result,
      });
    } catch (err) {
      console.log("Error in seeding skills ur data");
      return res.status(400).json({ message: err.message });
    }
  else {
    return res.status(400).send("Not Found");
  }
};
export default index;
