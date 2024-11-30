import { pg } from "@/lib/vercel/postgres.config";

export class ProductsService {
  // QUERY
  static async getAll() {
    const { rows } =
      await pg.sql`SELECT * FROM shopera_products ORDER BY id DESC`;
    return JSON.stringify(rows || []);
  }
  static async getById(id: number) {
    const { rows } =
      await pg.sql`SELECT * FROM shopera_products WHERE id=${id}`;
    return JSON.stringify(rows);
  }
  static async search() {}
  static async filter() {}
  static async paginate() {}

  // MUTATION
  static async create() {}
  static async update() {}
  static async delete() {}
  static async trash() {}
  static async restore() {}
}
