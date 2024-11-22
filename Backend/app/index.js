const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv").config();

const usersRoutes = require("./Routes/users");
const analyticsRoutes = require("./Routes/Analytics");
const deliveryRoutes = require("./Routes/Delivery");
const orderRoutes = require("./Routes/Order");
const productRoutes = require("./Routes/Product");
const stockRoutes = require("./Routes/Stock");

const app = express();

app.use(cors());
app.use(bodyParser.json());

// Routes
app.use("/api/users", usersRoutes);
app.use("/api/analytics", analyticsRoutes);
app.use("/api/delivery", deliveryRoutes);
app.use("/api/orders", orderRoutes);
app.use("/api/products", productRoutes);
app.use("/api/stocks", stockRoutes);

// Démarrer le serveur
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Serveur démarré sur le port ${PORT}`);
});
