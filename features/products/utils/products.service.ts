import { sql } from "@vercel/postgres";

export class ProductsService {
  // QUERY
  static async getAll() {
    const likes = 100;
    const { rows } = await sql`SELECT * FROM posts WHERE likes > ${likes};`;
  }
  static async getById() {}
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
