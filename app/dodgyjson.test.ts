import postgres from "postgres";

let sql: postgres.Sql;

describe("dodgy sql json 1", () => {
  beforeAll(async () => {
    sql = postgres(process.env.DATABASE_URL!, { ssl: true });
  });
  afterAll(async () => {
    sql.end();
  });

  for (let i = 0; i < 20; i++) {
    it("tests dodgy json", async () => {
      const jsonReady = {
        foo: "bar",
      };
      const obj =
        await sql`INSERT INTO dodgy_json(dodgy) VALUES (${jsonReady as any}) RETURNING id;`;
      const check =
        await sql`SELECT jsonb_typeof(dodgy) from dodgy_json WHERE id=${obj[0]!.id};`;
      expect(check[0]!.jsonb_typeof).toBe("object");
    });
  }
});