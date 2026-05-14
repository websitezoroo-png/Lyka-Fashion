import pool from './db.js';

async function migrate() {
  const connection = await pool.getConnection();
  try {
    console.log('Starting migration...');

    // Create products table
    await connection.query(`
      CREATE TABLE IF NOT EXISTS products (
        id INT AUTO_INCREMENT PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        description TEXT,
        price DECIMAL(10, 2) NOT NULL,
        originalPrice DECIMAL(10, 2),
        category VARCHAR(100),
        imageUrl TEXT,
        stock INT DEFAULT 0,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `);

    // Create settings table
    await connection.query(`
      CREATE TABLE IF NOT EXISTS settings (
        id INT AUTO_INCREMENT PRIMARY KEY,
        websiteName VARCHAR(255),
        heroTitle VARCHAR(255),
        heroSubtitle VARCHAR(255),
        heroDescription TEXT,
        backgroundVideoUrl TEXT
      )
    `);

    // Check if products exist
    const [rows]: any = await connection.query('SELECT COUNT(*) as count FROM products');
    if (rows[0].count === 0) {
      console.log('Inserting initial products...');
      const initialProducts = [
        ['Embroidered Suit', 'Traditional embroidered suit with modern cut. Features intricate Aari work with contemporary silhouette.', 15000, 20000, 'Suits', 'https://images.unsplash.com/photo-1591195853828-11db59a44f6b?w=500&h=500&fit=crop', 5],
        ['Bridal Lehenga', 'Stunning bridal lehenga with intricate details. Perfect for your special day with luxurious fabrics.', 50000, null, 'Bridals', 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=500&h=500&fit=crop', 3],
        ['Black Abaya', 'Elegant black abaya with gold embroidery. Timeless elegance meets modern comfort.', 8000, null, 'Abayas', 'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=500&h=500&fit=crop', 10],
        ['Kashmiri Saree', 'Traditional Kashmiri saree with hand-embroidered patterns. A timeless classic.', 12000, 16000, 'Sarees', 'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=500&h=500&fit=crop', 7],
        ['Silk Dupatta', 'Luxurious silk dupatta with traditional embroidery. Perfect accessory for any outfit.', 3500, 5000, 'Accessories', 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=500&h=500&fit=crop', 15],
        ['Formal Suit', 'Sophisticated formal suit with subtle embroidery details. Perfect for special occasions.', 18000, null, 'Suits', 'https://images.unsplash.com/photo-1591195853828-11db59a44f6b?w=500&h=500&fit=crop', 4]
      ];
      
      for (const p of initialProducts) {
        await connection.query(
          'INSERT INTO products (name, description, price, originalPrice, category, imageUrl, stock) VALUES (?, ?, ?, ?, ?, ?, ?)',
          p
        );
      }
    }

    // Check if settings exist
    const [settingsRows]: any = await connection.query('SELECT COUNT(*) as count FROM settings');
    if (settingsRows[0].count === 0) {
      console.log('Inserting initial settings...');
      await connection.query(
        'INSERT INTO settings (websiteName, heroTitle, heroSubtitle, heroDescription, backgroundVideoUrl) VALUES (?, ?, ?, ?, ?)',
        ['LYKA', 'ELEGANT ATTIRE', 'Bandipora, J&K — Since 2014', 'TRADITIONAL AARI WORK MEETS MODERN SILHOUETTES FOR THE CONTEMPORARY WOMAN.', '/videos/background.mp4']
      );
    }

    console.log('Migration completed successfully!');
  } catch (error) {
    console.error('Migration failed:', error);
  } finally {
    connection.release();
    process.exit();
  }
}

migrate();
