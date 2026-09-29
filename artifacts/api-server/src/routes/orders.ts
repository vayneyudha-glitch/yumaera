import { Router, type IRouter } from "express";
import {
  CreateOrderBody,
  CreateOrderResponse,
  GetOrderParams,
  GetOrderResponse,
  ListOrdersResponse,
  UpdateOrderStatusBody,
  UpdateOrderStatusParams,
  UpdateOrderStatusResponse,
} from "@workspace/api-zod";
import { makeTracking, orderStatusDetails, orders, products } from "./data";

const router: IRouter = Router();

router.get("/orders", (_req, res) => {
  res.json(ListOrdersResponse.parse(orders));
});

router.post("/orders", (req, res) => {
  const body = CreateOrderBody.parse(req.body);
  const product = products.find((item) => item.id === body.productId);
  if (!product) {
    res.status(404).json({ error: "Produk tidak ditemukan" });
    return;
  }

  const sequence = orders.length + 82;
  const order = {
    id: `order-${String(sequence).padStart(3, "0")}`,
    invoiceNo: `INV-20260929-${String(sequence).padStart(4, "0")}`,
    store: product.store,
    total: product.price * body.qty,
    status: "diproses",
    statusLabel: orderStatusDetails.diproses.label,
    statusTone: orderStatusDetails.diproses.tone,
    createdAt: "29 Sep 2026, sekarang",
    eta: "2-4 hari kerja",
    trackingNo: null,
    items: [{ id: product.id, name: product.name, qty: body.qty, price: product.price, image: product.image }],
    tracking: makeTracking("diproses", null),
  };
  orders.unshift(order);
  res.status(201).json(CreateOrderResponse.parse(order));
});

router.get("/orders/:id", (req, res) => {
  const { id } = GetOrderParams.parse(req.params);
  const order = orders.find((item) => item.id === id);
  if (!order) {
    res.status(404).json({ error: "Pesanan tidak ditemukan" });
    return;
  }
  res.json(GetOrderResponse.parse(order));
});

router.patch("/orders/:id/status", (req, res) => {
  const { id } = UpdateOrderStatusParams.parse(req.params);
  const body = UpdateOrderStatusBody.parse(req.body);
  const order = orders.find((item) => item.id === id);
  if (!order) {
    res.status(404).json({ error: "Pesanan tidak ditemukan" });
    return;
  }
  const details = orderStatusDetails[body.status];
  order.status = body.status;
  order.statusLabel = details.label;
  order.statusTone = details.tone;
  order.trackingNo = body.trackingNo ?? order.trackingNo;
  order.tracking = makeTracking(body.status, order.trackingNo);
  res.json(UpdateOrderStatusResponse.parse(order));
});

export default router;