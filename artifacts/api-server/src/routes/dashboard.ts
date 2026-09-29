import { Router, type IRouter } from "express";
import { GetDashboardSummaryResponse } from "@workspace/api-zod";
import { orders, products } from "./data";

const router: IRouter = Router();

router.get("/dashboard/summary", (_req, res) => {
  const data = {
    revenue: 18640000,
    revenueDelta: 12.8,
    orders: 284,
    ordersDelta: 8.4,
    products: products.length,
    lowStock: 3,
    weeklySales: [
      { day: "Sen", value: 2450000 },
      { day: "Sel", value: 3120000 },
      { day: "Rab", value: 2680000 },
      { day: "Kam", value: 3910000 },
      { day: "Jum", value: 3240000 },
      { day: "Sab", value: 4340000 },
      { day: "Min", value: 3820000 },
    ],
    recentOrders: orders.slice(0, 3),
  };
  res.json(GetDashboardSummaryResponse.parse(data));
});

export default router;