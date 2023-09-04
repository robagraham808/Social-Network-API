const { User, Thought } = require("../models");

getAllThoughts,
  getThought,
  createThought,
  updateThought,
  deleteThought,
  createReaction,
  deleteReaction,
  (module.exports = {
    // Get all thoughts
    getAllThoughts(req, res) {
      Thought.find()
        .then((thoughts) => res.json(thoughts))
        .catch((err) => res.status(500).json(err));
    },
    // Get a thought
    getThought(req, res) {
      Thought.findOne({ _id: req.params.thoughtId })
        .select("-__v")
        .then((thoughts) =>
          !thought
            ? res.status(404).json({ message: "No course with that ID" })
            : res.json(course)
        )
        .catch((err) => res.status(500).json(err));
    },
    // Create a thought
    createThought(req, res) {
      Thought.create(req.body)
        .then((thought) => res.json(thought))
        .catch((err) => res.status(500).json(err));
    },
    // Delete a thought
    deleteThought(req, res) {
      thought
        .findOneAndDelete({ _id: req.params.thoughtId })
        .then((thought) =>
          !thought
            ? res.status(404).json({ message: "No course with that ID" })
            : user.deleteMany({ _id: { $in: thought.user } })
        )
        .then(() => res.json({ message: "Course and students deleted!" }))
        .catch((err) => res.status(500).json(err));
    },
    // Update a thought
    updateThought(req, res) {
      thought
        .findOneAndUpdate(
          { _id: req.params.thoughtId },
          { $set: req.body },
          { runValidators: true, new: true }
        )
        .then((thought) =>
          !thought
            ? res.status(404).json({ message: "No course with this id!" })
            : res.json(thought)
        )
        .catch((err) => res.status(500).json(err));
    },
    // Create a reaction
    createReaction(req, res) {
      thought
        .create(req.body)
        .then((thought) => res.json(thought))
        .catch((err) => {
          console.log(err);
          return res.status(500).json(err);
        });
    },
    // Delete a reaction
    deleteReaction(req, res) {
      thought
        .findOneAndDelete({ _id: req.params.thoughtId })
        .then((thought) =>
          !thought
            ? res.status(404).json({ message: "No course with that ID" })
            : thought.deleteMany({ _id: { $in: thought.user } })
        )
        .then(() => res.json({ message: "Course and students deleted!" }))
        .catch((err) => res.status(500).json(err));
    },
  });
