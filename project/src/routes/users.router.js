import { Router } from "express";

const router = Router();

/**
 * @swagger
 * tags:
 *   name: Users
 *   description: Gestión de usuarios
 */

/**
 * @swagger
 * /api/users:
 *   get:
 *     summary: Obtener todos los usuarios
 *     tags: [Users]
 *     responses:
 *       200:
 *         description: OK
 */
router.get("/", (req, res) => {
  res.status(200).json([]);
});

/**
 * @swagger
 * /api/users:
 *   post:
 *     summary: Crear usuario
 *     tags: [Users]
 *     responses:
 *       201:
 *         description: Usuario creado
 */
router.post("/", (req, res) => {
  res.status(201).json({ message: "Usuario creado" });
});

export default router;
