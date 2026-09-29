import { Router, type IRouter } from "express";
import {
  GetProductParams,
  GetProductResponse,
  ListCategoriesResponse,
  ListProductsQueryParams,
  ListProductsResponse,
  ListStoresResponse,
} from "@workspace/api-zod";
import { categories, products, stores } from "./data";

const router: IRouter = Router();

router.get("/products", (req, res) => {
  const query = ListProductsQueryParams.parse(req.query);
  const search = query.search?.toLowerCase();
  const filtered = products
    .filter((product) => !search || `${product.name} ${product.category} ${product.store}`.toLowerCase().includes(search))
    .filter((product) => !query.category || product.category.toLowerCase() === query.category.toLowerCase())
    .slice(0, query.limit);
  res.json(ListProductsResponse.parse(filtered));
});

router.get("/products/:slug", (req, res) => {
  const { slug } = GetProductParams.parse(req.params);
  const product = products.find((item) => item.slug === slug);
  if (!product) {
    res.status(404).json({ error: "Produk tidak ditemukan" });
    return;
  }
  res.json(GetProductResponse.parse(product));
});

router.get("/categories", (_req, res) => {
  res.json(ListCategoriesResponse.parse(categories));
});

router.get("/stores", (_req, res) => {
  res.json(ListStoresResponse.parse(stores));
});

export default router;