import mysql from "mysql2/promise";

let pool: mysql.Pool | null = null;

export async function getDb() {
  if (!pool) {
    pool = mysql.createPool({
      host: process.env.DATABASE_HOST,
      port: parseInt(process.env.DATABASE_PORT || "4000"),
      user: process.env.DATABASE_USERNAME,
      password: process.env.DATABASE_PASSWORD,
      database: process.env.DATABASE_NAME,
      ssl: {
        rejectUnauthorized: true,
      },
      waitForConnections: true,
      connectionLimit: 10,
      queueLimit: 0,
    });
  }
  return pool;
}

export async function saveUserResponse(data: {
  monthlyTraffic: number;
  monthlyConversions: number;
  conversionType: "demos" | "signups";
  conversionValue: number;
}) {
  const db = await getDb();
  const [result] = await db.execute(
    `INSERT INTO user_responses (monthly_traffic, monthly_conversions, conversion_type, conversion_value) 
     VALUES (?, ?, ?, ?)`,
    [
      data.monthlyTraffic,
      data.monthlyConversions,
      data.conversionType,
      data.conversionValue,
    ]
  );
  return result;
}
