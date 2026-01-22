import swaggerJsdoc from "swagger-jsdoc";

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Adoptme API",
      version: "1.0.0",
    },
  },
  apis: ["./src/routes/users.router.js"],
};

export const swaggerSpecs = swaggerJsdoc(options);
