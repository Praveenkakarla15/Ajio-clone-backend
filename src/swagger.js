import swaggerJsdoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Ajio Clone API",
      version: "1.0.0",
      description: "API documentation for Ajio Clone backend",
    },
    servers: [
      {
        url: process.env.BACKEND_URL || "https://ajio-clone-backend-6i71.onrender.com",
      },
    ],
  },
  apis: ["./routes/*.js"], // Scan route files for Swagger comments
};

const specs = swaggerJsdoc(options);

const swaggerDocs = (app) => {
  app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(specs));
};

export default swaggerDocs;
