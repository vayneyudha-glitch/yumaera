import { Router, type IRouter } from "express";
import {
  ListNotificationsResponse,
  MarkNotificationReadParams,
  MarkNotificationReadResponse,
} from "@workspace/api-zod";
import { notifications } from "./data";

const router: IRouter = Router();

router.get("/notifications", (_req, res) => {
  res.json(ListNotificationsResponse.parse(notifications));
});

router.patch("/notifications/:id/read", (req, res) => {
  const { id } = MarkNotificationReadParams.parse(req.params);
  const notification = notifications.find((item) => item.id === id);
  if (!notification) {
    res.status(404).json({ error: "Notifikasi tidak ditemukan" });
    return;
  }
  notification.isRead = true;
  res.json(MarkNotificationReadResponse.parse(notification));
});

export default router;