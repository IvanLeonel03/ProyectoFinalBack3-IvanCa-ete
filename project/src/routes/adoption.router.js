import { Router } from "express";

const router = Router();

let adoptions = [];

router.get("/", (req, res) => {
  res.status(200).json(adoptions);
});

router.post("/", (req, res) => {
  const { userId, petId } = req.body;

  if (!userId || !petId) {
    return res.status(400).json({ error: "Datos incompletos" });
  }

  const adoption = { id: adoptions.length + 1, userId, petId };
  adoptions.push(adoption);

  res.status(201).json(adoption);
});

export default router;
