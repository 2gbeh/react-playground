import { pg } from "@/lib/vercel/postgres.config";

export class ProductsService {
  // QUERY
  static async getAll() {
    // await pg.sql`UPDATE shopera_products SET deleted_at=null`;
    const { rows } =
      await pg.sql`SELECT * FROM shopera_products WHERE deleted_at IS NULL ORDER BY id DESC`;
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
  static async trash(id?: number) {
    let deleted_at = new Date().toJSON();
    const { rows } =
      id && id > 0
        ? await pg.sql`UPDATE shopera_products SET deleted_at=${deleted_at} WHERE id=${id}`
        : await pg.sql`UPDATE shopera_products SET deleted_at=${deleted_at}`;
    return JSON.stringify(rows || []);
  }
  static async restore(id?: number) {
    const { rows } =
      id && id > 0
        ? await pg.sql`UPDATE shopera_products SET deleted_at=null WHERE id=${id}`
        : await pg.sql`UPDATE shopera_products SET deleted_at=null`;
    return JSON.stringify(rows || []);
  }
}
