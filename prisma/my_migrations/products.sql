-- Очистка существующих товаров (опционально)
TRUNCATE TABLE "Product" CASCADE;
ALTER SEQUENCE "Product_id_seq" RESTART WITH 1;

-- Вставка 50 товаров
INSERT INTO "Product" (name, description, price, quantity, "categoryId", "imageUrl", "isActive", "managerId", "createdAt", "updatedAt")
VALUES 
    -- Ноутбуки (25 записей)
    ('Ноутбук MacBook Pro M3 14"', 'Apple MacBook Pro с процессором M3, 14" дисплей, 16GB RAM, 512GB SSD', 1999.99, 15, 6, 'macbook_pro_m3_14.webp', true, 2, NOW(), NOW()),
    ('Ноутбук MacBook Pro M3 16"', 'Apple MacBook Pro с процессором M3, 16" дисплей, 32GB RAM, 1TB SSD', 2499.99, 10, 6, 'orig.webp', true, 2, NOW(), NOW()),
    ('Ноутбук MacBook Air M2', 'Apple MacBook Air с процессором M2, 13" дисплей, 8GB RAM, 256GB SSD', 1299.99, 20, 6, '102509267725_1_t87i-c5.jpg', true, 2, NOW(), NOW()),
    ('Ноутбук Dell XPS 13', 'Dell XPS 13 с процессором Intel Core i7, 13" 4K дисплей, 16GB RAM, 512GB SSD', 1499.99, 12, 6, 'i.webp', true, 2, NOW(), NOW()),
    ('Dell XPS 15', 'Dell XPS 15 с процессором Intel Core i9, 15" 4K дисплей, 32GB RAM, 1TB SSD', 1999.99, 8, 6, 'orig (1).webp', true, 2, NOW(), NOW()),
    ('Lenovo ThinkPad X1 Carbon', 'Lenovo ThinkPad X1 Carbon с процессором Intel Core i7, 14" дисплей, 16GB RAM, 512GB SSD', 1699.99, 15, 2, 'thinkpad_x1.png', true, 2, NOW(), NOW()),
    ('Lenovo ThinkPad P1', 'Lenovo ThinkPad P1 с процессором Intel Core i9, 15" дисплей, 32GB RAM, 1TB SSD', 2199.99, 10, 6, '100027434976b1.webp', true, 2, NOW(), NOW()),
    ('HP Spectre x360', 'HP Spectre x360 с процессором Intel Core i7, 13" дисплей, 16GB RAM, 512GB SSD', 1399.99, 18, 6, '100023638537b1.webp', true, 2, NOW(), NOW()),
    ('HP ZBook Studio', 'HP ZBook Studio с процессором Intel Core i9, 15" дисплей, 32GB RAM, 1TB SSD', 1899.99, 12, 6, 'hp_zbook_studio_g3_7__2_opt.jpg', true, 2, NOW(), NOW()),
    ('Ноутбук ASUS ROG Zephyrus G14', 'ASUS ROG Zephyrus G14 с процессором AMD Ryzen 9, 14" дисплей, 32GB RAM, 1TB SSD', 1799.99, 15, 6, 'orig (2).webp', true, 2, NOW(), NOW()),
    ('Ноутбук ASUS ROG Zephyrus G15', 'ASUS ROG Zephyrus G15 с процессором AMD Ryzen 9, 15" дисплей, 32GB RAM, 1TB SSD', 1999.99, 10, 6, '55691f8cb3b43ad4bc120768d49f7570.jpeg', true, 2, NOW(), NOW()),
    ('MSI GS66 Stealth', 'MSI GS66 Stealth с процессором Intel Core i9, 15" дисплей, 32GB RAM, 1TB SSD', 1899.99, 12, 6, '1012094846.jpg', true, 2, NOW(), NOW()),
    ('MSI GE76 Raider', 'MSI GE76 Raider с процессором Intel Core i9, 17" дисплей, 32GB RAM, 1TB SSD', 2199.99, 8, 6, 'orig (3).webp', true, 2, NOW(), NOW()),
    ('Razer Blade 14', 'Razer Blade 14 с процессором AMD Ryzen 9, 14" дисплей, 32GB RAM, 1TB SSD', 1999.99, 15, 6, 'i (1).webp', true, 2, NOW(), NOW()),
    ('Razer Blade 15', 'Razer Blade 15 с процессором Intel Core i9, 15" дисплей, 32GB RAM, 1TB SSD', 2299.99, 10, 6, 'orig (4).webp', true, 2, NOW(), NOW()),
    ('Acer Predator Helios 300', 'Acer Predator Helios 300 с процессором Intel Core i7, 15" дисплей, 16GB RAM, 512GB SSD', 1499.99, 18, 6, 'i (2).webp', true, 2, NOW(), NOW()),
    ('Acer Swift X', 'Acer Swift X с процессором AMD Ryzen 7, 14" дисплей, 16GB RAM, 512GB SSD', 1299.99, 20, 6, 'hugeX.webp', true, 2, NOW(), NOW()),
    ('Microsoft Surface Laptop 4', 'Microsoft Surface Laptop 4 с процессором Intel Core i7, 13" дисплей, 16GB RAM, 512GB SSD', 1599.99, 15, 6, 'i (3).webp', true, 2, NOW(), NOW()),
    ('Microsoft Surface Laptop Studio', 'Microsoft Surface Laptop Studio с процессором Intel Core i7, 14" дисплей, 32GB RAM, 1TB SSD', 1999.99, 12, 6, 'i (4).webp', true, 2, NOW(), NOW()),
    ('Alienware x15', 'Alienware x15 с процессором Intel Core i9, 15" дисплей, 32GB RAM, 1TB SSD', 2499.99, 8, 6, 'orig (5).webp', true, 2, NOW(), NOW()),
    ('Alienware x17', 'Alienware x17 с процессором Intel Core i9, 17" дисплей, 32GB RAM, 1TB SSD', 2799.99, 6, 6, 'i (5).webp', true, 2, NOW(), NOW()),
    ('Gigabyte Aero 15', 'Gigabyte Aero 15 с процессором Intel Core i9, 15" дисплей, 32GB RAM, 1TB SSD', 1999.99, 10, 6, 'orig (6).webp', true, 2, NOW(), NOW()),
    ('Gigabyte Aorus 17', 'Gigabyte Aorus 17 с процессором Intel Core i9, 17" дисплей, 32GB RAM, 1TB SSD', 2299.99, 8, 6, 'orig (8).webp', true, 2, NOW(), NOW()),
    ('ASUS ProArt StudioBook', 'ASUS ProArt StudioBook с процессором Intel Core i9, 15" дисплей, 32GB RAM, 1TB SSD', 2499.99, 5, 6, '5b9ce9c0c15ae397e856fe12.jpg', true, 2, NOW(), NOW()),
    ('ASUS ZenBook Pro Duo', 'ASUS ZenBook Pro Duo с процессором Intel Core i9, 15" дисплей, 32GB RAM, 1TB SSD', 2299.99, 7, 6, 'i (6).webp', true, 2, NOW(), NOW()),

    -- Смартфоны (10 записей)
    ('iPhone 15 Pro Max', 'Apple iPhone 15 Pro Max с процессором A17 Pro, 6.7" дисплей, 256GB', 1199.99, 30, 1, 'iphone_15_pro_max.png', true, 2, NOW(), NOW()),
    ('Samsung Galaxy S24 Ultra', 'Samsung Galaxy S24 Ultra с процессором Snapdragon 8 Gen 3, 6.8" дисплей, 256GB', 1199.99, 25, 1, 'galaxy_s24_ultra.png', true, 2, NOW(), NOW()),
    ('Google Pixel 8 Pro', 'Google Pixel 8 Pro с процессором Tensor G3, 6.7" дисплей, 256GB', 999.99, 20, 1, 'pixel_8_pro.png', true, 2, NOW(), NOW()),
    ('OnePlus 12', 'OnePlus 12 с процессором Snapdragon 8 Gen 3, 6.7" дисплей, 256GB', 899.99, 15, 1, 'oneplus_12.png', true, 2, NOW(), NOW()),
    ('Xiaomi 14 Pro', 'Xiaomi 14 Pro с процессором Snapdragon 8 Gen 3, 6.7" дисплей, 256GB', 899.99, 18, 1, 'xiaomi_14_pro.png', true, 2, NOW(), NOW()),
    ('Sony Xperia 1 VI', 'Sony Xperia 1 VI с процессором Snapdragon 8 Gen 3, 6.5" дисплей, 256GB', 999.99, 12, 1, 'sony_xperia_1.png', true, 2, NOW(), NOW()),
    ('Nothing Phone 2', 'Nothing Phone 2 с процессором Snapdragon 8+ Gen 1, 6.7" дисплей, 256GB', 699.99, 20, 1, 'nothing_phone_2.png', true, 2, NOW(), NOW()),
    ('ASUS ROG Phone 8', 'ASUS ROG Phone 8 с процессором Snapdragon 8 Gen 3, 6.8" дисплей, 256GB', 999.99, 15, 1, 'asus_rog_phone.png', true, 2, NOW(), NOW()),
    ('Motorola Edge 40 Pro', 'Motorola Edge 40 Pro с процессором Snapdragon 8 Gen 2, 6.7" дисплей, 256GB', 799.99, 18, 1, 'motorola_edge_40.png', true, 2, NOW(), NOW()),
    ('Honor Magic 6 Pro', 'Honor Magic 6 Pro с процессором Snapdragon 8 Gen 3, 6.8" дисплей, 256GB', 899.99, 15, 1, 'honor_magic_6.png', true, 2, NOW(), NOW()),

    -- Планшеты (5 записей)
    ('iPad Pro 12.9" M2', 'Apple iPad Pro 12.9" с процессором M2, 256GB', 1099.99, 20, 3, 'ipad_pro_12.png', true, 2, NOW(), NOW()),
    ('Samsung Galaxy Tab S9 Ultra', 'Samsung Galaxy Tab S9 Ultra с процессором Snapdragon 8 Gen 2, 14.6" дисплей, 256GB', 999.99, 15, 3, 'galaxy_tab_s9.png', true, 2, NOW(), NOW()),
    ('Microsoft Surface Pro 9', 'Microsoft Surface Pro 9 с процессором Intel Core i7, 13" дисплей, 256GB', 1299.99, 12, 3, 'surface_pro_9.png', true, 2, NOW(), NOW()),
    ('Lenovo Tab P12 Pro', 'Lenovo Tab P12 Pro с процессором Snapdragon 870, 12.6" дисплей, 256GB', 799.99, 18, 3, 'lenovo_tab_p12.png', true, 2, NOW(), NOW()),
    ('Xiaomi Pad 6 Pro', 'Xiaomi Pad 6 Pro с процессором Snapdragon 8+ Gen 1, 11" дисплей, 256GB', 599.99, 20, 3, 'xiaomi_pad_6.png', true, 2, NOW(), NOW()),

    -- Умные часы (5 записей)
    ('Apple Watch Series 9', 'Apple Watch Series 9 с процессором S9, 45mm', 399.99, 30, 4, 'apple_watch_9.png', true, 2, NOW(), NOW()),
    ('Samsung Galaxy Watch 6 Pro', 'Samsung Galaxy Watch 6 Pro с процессором Exynos W930, 47mm', 449.99, 25, 4, 'galaxy_watch_6.png', true, 2, NOW(), NOW()),
    ('Google Pixel Watch 2', 'Google Pixel Watch 2 с процессором Snapdragon W5, 41mm', 349.99, 20, 4, 'pixel_watch_2.png', true, 2, NOW(), NOW()),
    ('Garmin Fenix 7 Pro', 'Garmin Fenix 7 Pro с процессором Garmin, 47mm', 699.99, 15, 4, 'garmin_fenix_7.png', true, 2, NOW(), NOW()),
    ('Amazfit GTR 4', 'Amazfit GTR 4 с процессором Snapdragon W5, 46mm', 199.99, 25, 4, 'amazfit_gtr_4.png', true, 2, NOW(), NOW()),

    -- Аудио устройства (5 записей)
    ('Sony WH-1000XM5', 'Sony WH-1000XM5 беспроводные наушники с шумоподавлением', 399.99, 20, 5, 'sony_wh1000xm5.png', true, 2, NOW(), NOW()),
    ('Apple AirPods Pro 2', 'Apple AirPods Pro 2 беспроводные наушники с шумоподавлением', 249.99, 30, 5, 'airpods_pro_2.png', true, 2, NOW(), NOW()),
    ('Samsung Galaxy Buds2 Pro', 'Samsung Galaxy Buds2 Pro беспроводные наушники с шумоподавлением', 229.99, 25, 5, 'galaxy_buds2_pro.png', true, 2, NOW(), NOW()),
    ('Bose QuietComfort 45', 'Bose QuietComfort 45 беспроводные наушники с шумоподавлением', 329.99, 15, 5, 'bose_qc45.png', true, 2, NOW(), NOW()),
    ('Sennheiser Momentum 4', 'Sennheiser Momentum 4 беспроводные наушники с шумоподавлением', 349.99, 18, 5, 'sennheiser_momentum_4.png', true, 2, NOW(), NOW());