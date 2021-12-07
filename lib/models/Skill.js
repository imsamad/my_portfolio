import mongoose from "mongoose";
const reqString = { type: String, required: true };
const skill = new mongoose.Schema({
  name: reqString,
  list: [
    {
      name: reqString,
      percentage: Number,
    },
  ],
});

const skillsSchema = new mongoose.Schema(
  {
    subtitle: reqString,
    title: reqString,
    message: reqString,
    list: [skill],
  },
  {
    toObject: { virtuals: true },
    toJSON: { virtuals: true },
    timestamps: true,
  }
);
const Skill = mongoose?.models?.Skill || mongoose.model("Skill", skillsSchema);
export default Skill;
