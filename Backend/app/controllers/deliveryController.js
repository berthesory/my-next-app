// Récupérer toutes les livraisons
const getDeliveries = (req, res) => {
    const deliveries = [
      { id: 1, client: 'Client A', status: 'Livré', address: '123 rue Commerce' },
      { id: 2, client: 'Client B', status: 'En cours', address: '456 avenue Centrale' },
    ];
    res.status(200).json(deliveries);
  };
  
  // Ajouter une nouvelle livraison
  const createDelivery = (req, res) => {
    const { client, address, status } = req.body;
    const newDelivery = { id: Date.now(), client, address, status };
    res.status(201).json(newDelivery);
  };
  
  // Mettre à jour le statut d'une livraison
  const updateDeliveryStatus = (req, res) => {
    const { id } = req.params;
    const { status } = req.body;
    res.status(200).json({ id, updatedStatus: status });
  };
  
  module.exports = { getDeliveries, createDelivery, updateDeliveryStatus };
  