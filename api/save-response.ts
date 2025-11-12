import type { VercelRequest, VercelResponse } from '@vercel/node';
import mysql from 'mysql2/promise';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    // Create database connection
    const connection = await mysql.createConnection({
      host: process.env.DATABASE_HOST,
      port: parseInt(process.env.DATABASE_PORT || '4000'),
      user: process.env.DATABASE_USERNAME,
      password: process.env.DATABASE_PASSWORD,
      database: process.env.DATABASE_NAME,
      ssl: {
        rejectUnauthorized: true,
      },
    });

    const { monthlyTraffic, monthlyConversions, conversionType, conversionValue } = req.body;

    // Insert into database
    await connection.execute(
      `INSERT INTO user_responses (monthly_traffic, monthly_conversions, conversion_type, conversion_value) 
       VALUES (?, ?, ?, ?)`,
      [monthlyTraffic, monthlyConversions, conversionType, conversionValue || null]
    );

    await connection.end();

    return res.status(200).json({ success: true });
  } catch (error) {
    console.error('Error saving response:', error);
    return res.status(500).json({ 
      success: false, 
      error: 'Failed to save response',
      details: error instanceof Error ? error.message : 'Unknown error'
    });
  }
}
