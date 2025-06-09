TRUNCATE TABLE "Category" CASCADE;

ALTER SEQUENCE "Category_id_seq" RESTART WITH 1;

INSERT INTO
    "Category" (
        "name",
        "description",
        "createdAt",
        "updatedAt",
        "managerId"
    )
VALUES
    (
        'Смартфоны',
        'Мобильные телефоны и смартфоны',
        '2025-05-12 00:14:37.147',
        '2025-05-12 00:14:37.147',
        16
    ),
    (
        'Ноутбуки',
        'Портативные компьютеры',
        '2025-05-12 00:14:37.147',
        '2025-05-12 00:14:37.147',
        2
    ),
    (
        'Планшеты',
        'Планшетные компьютеры',
        '2025-05-12 00:14:37.147',
        '2025-05-12 00:14:37.147',
        16
    ),
    (
        'Наушники',
        'Беспроводные и проводные наушники',
        '2025-05-12 00:14:37.147',
        '2025-05-12 00:14:37.147',
        2
    ),
    (
        'Умные часы',
        'Смарт-часы и фитнес-трекеры',
        '2025-05-12 00:14:37.147',
        '2025-05-12 00:14:37.147',
        16
    ),
    (
        'Камеры',
        'Фото и видео камеры',
        '2025-05-12 00:14:37.147',
        '2025-05-12 00:14:37.147',
        2
    ),
    (
        'Телевизоры',
        'Умные телевизоры и мониторы',
        '2025-05-12 00:14:37.147',
        '2025-05-12 00:14:37.147',
        16
    ),
    (
        'Аудио',
        'Акустические системы и колонки',
        '2025-05-12 00:14:37.147',
        '2025-05-12 00:14:37.147',
        2
    ),
    (
        'Игровые консоли',
        'Игровые приставки и аксессуары',
        '2025-05-12 00:14:37.147',
        '2025-05-12 00:14:37.147',
        16
    ),
    (
        'Принтеры',
        'Принтеры и МФУ',
        '2025-05-12 00:14:37.147',
        '2025-05-12 00:14:37.147',
        2
    ),
    (
        'Сетевое оборудование',
        'Роутеры и сетевое оборудование',
        '2025-05-12 00:14:37.147',
        '2025-05-12 00:14:37.147',
        16
    ),
    (
        'Компьютерные комплектующие',
        'Комплектующие для ПК',
        '2025-05-12 00:14:37.147',
        '2025-05-12 00:14:37.147',
        2
    ),
    (
        'Периферия',
        'Клавиатуры, мыши и другие устройства',
        '2025-05-12 00:14:37.147',
        '2025-05-12 00:14:37.147',
        16
    ),
    (
        'Накопители',
        'SSD, HDD и USB накопители',
        '2025-05-12 00:14:37.147',
        '2025-05-12 00:14:37.147',
        2
    ),
    (
        'Аксессуары',
        'Чехлы, зарядные устройства и другие аксессуары',
        '2025-05-12 00:14:37.147',
        '2025-05-12 00:14:37.147',
        16
    );

TRUNCATE TABLE "Product" CASCADE;

ALTER SEQUENCE "Product_id_seq" RESTART WITH 1;

INSERT INTO
    "Product" (
        name,
        description,
        price,
        quantity,
        "categoryId",
        "imageUrl",
        "isActive",
        "managerId",
        "createdAt",
        "updatedAt"
    )
VALUES
    -- Ноутбуки (25 записей)
    (
        'Ноутбук MacBook Pro M3 14"',
        'Apple MacBook Pro с процессором M3, 14" дисплей, 16GB RAM, 512GB SSD',
        1999.99,
        15,
        2,
        'macbook_pro_m3_14.webp',
        true,
        2,
        NOW (),
        NOW ()
    ),
    (
        'Ноутбук MacBook Pro M3 16"',
        'Apple MacBook Pro с процессором M3, 16" дисплей, 32GB RAM, 1TB SSD',
        2499.99,
        10,
        2,
        'orig.webp',
        true,
        2,
        NOW (),
        NOW ()
    ),
    (
        'Ноутбук MacBook Air M2',
        'Apple MacBook Air с процессором M2, 13" дисплей, 8GB RAM, 256GB SSD',
        1299.99,
        20,
        2,
        '102509267725_1_t87i-c5.jpg',
        true,
        2,
        NOW (),
        NOW ()
    ),
    (
        'Ноутбук Dell XPS 13',
        'Dell XPS 13 с процессором Intel Core i7, 13" 4K дисплей, 16GB RAM, 512GB SSD',
        1499.99,
        12,
        2,
        'i.webp',
        true,
        2,
        NOW (),
        NOW ()
    ),
    (
        'Dell XPS 15',
        'Dell XPS 15 с процессором Intel Core i9, 15" 4K дисплей, 32GB RAM, 1TB SSD',
        1999.99,
        8,
        2,
        'orig (1).webp',
        true,
        2,
        NOW (),
        NOW ()
    ),
    (
        'Lenovo ThinkPad X1 Carbon',
        'Lenovo ThinkPad X1 Carbon с процессором Intel Core i7, 14" дисплей, 16GB RAM, 512GB SSD',
        1699.99,
        15,
        2,
        'Lenovo-ThinkPad-X1-Tablet-Gen-2-i7-7Y75-16GB-256GB-SSD-Windows-10-Home.jpg',
        true,
        2,
        NOW (),
        NOW ()
    ),
    (
        'Lenovo ThinkPad P1',
        'Lenovo ThinkPad P1 с процессором Intel Core i9, 15" дисплей, 32GB RAM, 1TB SSD',
        2199.99,
        10,
        2,
        '100027434976b1.webp',
        true,
        2,
        NOW (),
        NOW ()
    ),
    (
        'HP Spectre x360',
        'HP Spectre x360 с процессором Intel Core i7, 13" дисплей, 16GB RAM, 512GB SSD',
        1399.99,
        18,
        2,
        '100023638537b1.webp',
        true,
        2,
        NOW (),
        NOW ()
    ),
    (
        'HP ZBook Studio',
        'HP ZBook Studio с процессором Intel Core i9, 15" дисплей, 32GB RAM, 1TB SSD',
        1899.99,
        12,
        2,
        'hp_zbook_studio_g3_7__2_opt.jpg',
        true,
        2,
        NOW (),
        NOW ()
    ),
    (
        'Ноутбук ASUS ROG Zephyrus G14',
        'ASUS ROG Zephyrus G14 с процессором AMD Ryzen 9, 14" дисплей, 32GB RAM, 1TB SSD',
        1799.99,
        15,
        2,
        'orig (2).webp',
        true,
        2,
        NOW (),
        NOW ()
    ),
    (
        'Ноутбук ASUS ROG Zephyrus G15',
        'ASUS ROG Zephyrus G15 с процессором AMD Ryzen 9, 15" дисплей, 32GB RAM, 1TB SSD',
        1999.99,
        10,
        2,
        '55691f8cb3b43ad4bc120768d49f7570.jpeg',
        true,
        2,
        NOW (),
        NOW ()
    ),
    (
        'MSI GS66 Stealth',
        'MSI GS66 Stealth с процессором Intel Core i9, 15" дисплей, 32GB RAM, 1TB SSD',
        1899.99,
        12,
        2,
        '1012094846.jpg',
        true,
        2,
        NOW (),
        NOW ()
    ),
    (
        'MSI GE76 Raider',
        'MSI GE76 Raider с процессором Intel Core i9, 17" дисплей, 32GB RAM, 1TB SSD',
        2199.99,
        8,
        2,
        'orig (3).webp',
        true,
        2,
        NOW (),
        NOW ()
    ),
    (
        'Razer Blade 14',
        'Razer Blade 14 с процессором AMD Ryzen 9, 14" дисплей, 32GB RAM, 1TB SSD',
        1999.99,
        15,
        2,
        'i (1).webp',
        true,
        2,
        NOW (),
        NOW ()
    ),
    (
        'Razer Blade 15',
        'Razer Blade 15 с процессором Intel Core i9, 15" дисплей, 32GB RAM, 1TB SSD',
        2299.99,
        10,
        2,
        'orig (4).webp',
        true,
        2,
        NOW (),
        NOW ()
    ),
    (
        'Acer Predator Helios 300',
        'Acer Predator Helios 300 с процессором Intel Core i7, 15" дисплей, 16GB RAM, 512GB SSD',
        1499.99,
        18,
        2,
        'i (2).webp',
        true,
        2,
        NOW (),
        NOW ()
    ),
    (
        'Acer Swift X',
        'Acer Swift X с процессором AMD Ryzen 7, 14" дисплей, 16GB RAM, 512GB SSD',
        1299.99,
        20,
        2,
        'hugeX.webp',
        true,
        2,
        NOW (),
        NOW ()
    ),
    (
        'Microsoft Surface Laptop 4',
        'Microsoft Surface Laptop 4 с процессором Intel Core i7, 13" дисплей, 16GB RAM, 512GB SSD',
        1599.99,
        15,
        2,
        'i (3).webp',
        true,
        2,
        NOW (),
        NOW ()
    ),
    (
        'Microsoft Surface Laptop Studio',
        'Microsoft Surface Laptop Studio с процессором Intel Core i7, 14" дисплей, 32GB RAM, 1TB SSD',
        1999.99,
        12,
        2,
        'i (4).webp',
        true,
        2,
        NOW (),
        NOW ()
    ),
    (
        'Alienware x15',
        'Alienware x15 с процессором Intel Core i9, 15" дисплей, 32GB RAM, 1TB SSD',
        2499.99,
        8,
        2,
        'orig (5).webp',
        true,
        2,
        NOW (),
        NOW ()
    ),
    (
        'Alienware x17',
        'Alienware x17 с процессором Intel Core i9, 17" дисплей, 32GB RAM, 1TB SSD',
        2799.99,
        2,
        2,
        'i (5).webp',
        true,
        2,
        NOW (),
        NOW ()
    ),
    (
        'Gigabyte Aero 15',
        'Gigabyte Aero 15 с процессором Intel Core i9, 15" дисплей, 32GB RAM, 1TB SSD',
        1999.99,
        10,
        2,
        'orig (6).webp',
        true,
        2,
        NOW (),
        NOW ()
    ),
    (
        'Gigabyte Aorus 17',
        'Gigabyte Aorus 17 с процессором Intel Core i9, 17" дисплей, 32GB RAM, 1TB SSD',
        2299.99,
        8,
        2,
        'orig (8).webp',
        true,
        2,
        NOW (),
        NOW ()
    ),
    (
        'ASUS ProArt StudioBook',
        'ASUS ProArt StudioBook с процессором Intel Core i9, 15" дисплей, 32GB RAM, 1TB SSD',
        2499.99,
        5,
        2,
        '5b9ce9c0c15ae397e856fe12.jpg',
        true,
        2,
        NOW (),
        NOW ()
    ),
    (
        'ASUS ZenBook Pro Duo',
        'ASUS ZenBook Pro Duo с процессором Intel Core i9, 15" дисплей, 32GB RAM, 1TB SSD',
        2299.99,
        7,
        2,
        'i (6).webp',
        true,
        2,
        NOW (),
        NOW ()
    ),
    -- Смартфоны (10 записей)
    (
        'iPhone 15 Pro Max',
        'Apple iPhone 15 Pro Max с процессором A17 Pro, 6.7" дисплей, 256GB',
        1199.99,
        30,
        1,
        'iphone_15_pro_max.png',
        true,
        2,
        NOW (),
        NOW ()
    ),
    (
        'Samsung Galaxy S24 Ultra',
        'Samsung Galaxy S24 Ultra с процессором Snapdragon 8 Gen 3, 6.8" дисплей, 256GB',
        1199.99,
        25,
        1,
        'galaxy_s24_ultra.png',
        true,
        2,
        NOW (),
        NOW ()
    ),
    (
        'Google Pixel 8 Pro',
        'Google Pixel 8 Pro с процессором Tensor G3, 6.7" дисплей, 256GB',
        999.99,
        20,
        1,
        'pixel_8_pro.png',
        true,
        2,
        NOW (),
        NOW ()
    ),
    (
        'OnePlus 12',
        'OnePlus 12 с процессором Snapdragon 8 Gen 3, 6.7" дисплей, 256GB',
        899.99,
        15,
        1,
        'oneplus_12.png',
        true,
        2,
        NOW (),
        NOW ()
    ),
    (
        'Xiaomi 14 Pro',
        'Xiaomi 14 Pro с процессором Snapdragon 8 Gen 3, 6.7" дисплей, 256GB',
        899.99,
        18,
        1,
        'xiaomi_14_pro.png',
        true,
        2,
        NOW (),
        NOW ()
    ),
    (
        'Sony Xperia 1 VI',
        'Sony Xperia 1 VI с процессором Snapdragon 8 Gen 3, 6.5" дисплей, 256GB',
        999.99,
        12,
        1,
        'sony_xperia_1.png',
        true,
        2,
        NOW (),
        NOW ()
    ),
    (
        'Nothing Phone 2',
        'Nothing Phone 2 с процессором Snapdragon 8+ Gen 1, 6.7" дисплей, 256GB',
        699.99,
        20,
        1,
        'nothing_phone_2.png',
        true,
        2,
        NOW (),
        NOW ()
    ),
    (
        'ASUS ROG Phone 8',
        'ASUS ROG Phone 8 с процессором Snapdragon 8 Gen 3, 6.8" дисплей, 256GB',
        999.99,
        15,
        1,
        'asus_rog_phone.png',
        true,
        2,
        NOW (),
        NOW ()
    ),
    (
        'Motorola Edge 40 Pro',
        'Motorola Edge 40 Pro с процессором Snapdragon 8 Gen 2, 6.7" дисплей, 256GB',
        799.99,
        18,
        1,
        'motorola_edge_40.png',
        true,
        2,
        NOW (),
        NOW ()
    ),
    (
        'Honor Magic 6 Pro',
        'Honor Magic 6 Pro с процессором Snapdragon 8 Gen 3, 6.8" дисплей, 256GB',
        899.99,
        15,
        1,
        'honor_magic_6.png',
        true,
        2,
        NOW (),
        NOW ()
    ),
    -- Планшеты (5 записей)
    (
        'iPad Pro 12.9" M2',
        'Apple iPad Pro 12.9" с процессором M2, 256GB',
        1099.99,
        20,
        3,
        'ipad_pro_12.png',
        true,
        2,
        NOW (),
        NOW ()
    ),
    (
        'Samsung Galaxy Tab S9 Ultra',
        'Samsung Galaxy Tab S9 Ultra с процессором Snapdragon 8 Gen 2, 14.6" дисплей, 256GB',
        999.99,
        15,
        3,
        'galaxy_tab_s9.png',
        true,
        2,
        NOW (),
        NOW ()
    ),
    (
        'Microsoft Surface Pro 9',
        'Microsoft Surface Pro 9 с процессором Intel Core i7, 13" дисплей, 256GB',
        1299.99,
        12,
        3,
        'surface_pro_9.png',
        true,
        2,
        NOW (),
        NOW ()
    ),
    (
        'Lenovo Tab P12 Pro',
        'Lenovo Tab P12 Pro с процессором Snapdragon 870, 12.6" дисплей, 256GB',
        799.99,
        18,
        3,
        'lenovo_tab_p12.png',
        true,
        2,
        NOW (),
        NOW ()
    ),
    (
        'Xiaomi Pad 6 Pro',
        'Xiaomi Pad 6 Pro с процессором Snapdragon 8+ Gen 1, 11" дисплей, 256GB',
        599.99,
        20,
        3,
        'xiaomi_pad_6.png',
        true,
        2,
        NOW (),
        NOW ()
    ),
    -- Умные часы (5 записей)
    (
        'Apple Watch Series 9',
        'Apple Watch Series 9 с процессором S9, 45mm',
        399.99,
        30,
        4,
        'apple_watch_9.png',
        true,
        2,
        NOW (),
        NOW ()
    ),
    (
        'Samsung Galaxy Watch 6 Pro',
        'Samsung Galaxy Watch 6 Pro с процессором Exynos W930, 47mm',
        449.99,
        25,
        4,
        'galaxy_watch_6.png',
        true,
        2,
        NOW (),
        NOW ()
    ),
    (
        'Google Pixel Watch 2',
        'Google Pixel Watch 2 с процессором Snapdragon W5, 41mm',
        349.99,
        20,
        4,
        'pixel_watch_2.png',
        true,
        2,
        NOW (),
        NOW ()
    ),
    (
        'Garmin Fenix 7 Pro',
        'Garmin Fenix 7 Pro с процессором Garmin, 47mm',
        699.99,
        15,
        4,
        'garmin_fenix_7.png',
        true,
        2,
        NOW (),
        NOW ()
    ),
    (
        'Amazfit GTR 4',
        'Amazfit GTR 4 с процессором Snapdragon W5, 46mm',
        199.99,
        25,
        4,
        'amazfit_gtr_4.png',
        true,
        2,
        NOW (),
        NOW ()
    ),
    -- Аудио устройства (5 записей)
    (
        'Sony WH-1000XM5',
        'Sony WH-1000XM5 беспроводные наушники с шумоподавлением',
        399.99,
        20,
        5,
        'sony_wh1000xm5.png',
        true,
        2,
        NOW (),
        NOW ()
    ),
    (
        'Apple AirPods Pro 2',
        'Apple AirPods Pro 2 беспроводные наушники с шумоподавлением',
        249.99,
        30,
        5,
        'airpods_pro_2.png',
        true,
        2,
        NOW (),
        NOW ()
    ),
    (
        'Samsung Galaxy Buds2 Pro',
        'Samsung Galaxy Buds2 Pro беспроводные наушники с шумоподавлением',
        229.99,
        25,
        5,
        'galaxy_buds2_pro.png',
        true,
        2,
        NOW (),
        NOW ()
    ),
    (
        'Bose QuietComfort 45',
        'Bose QuietComfort 45 беспроводные наушники с шумоподавлением',
        329.99,
        15,
        5,
        'bose_qc45.png',
        true,
        2,
        NOW (),
        NOW ()
    ),
    (
        'Sennheiser Momentum 4',
        'Sennheiser Momentum 4 беспроводные наушники с шумоподавлением',
        349.99,
        18,
        5,
        'sennheiser_momentum_4.png',
        true,
        2,
        NOW (),
        NOW ()
    );

TRUNCATE TABLE "FilterDescription" CASCADE;

ALTER SEQUENCE "FilterDescription_id_seq" RESTART WITH 1;

INSERT INTO
    "FilterDescription"(
        "name",
        "description",
        "categoryId"
    )
VALUES
    ('Процессор', 'Тип процессора', 2),
    ('RAM', 'Объем оперативной памяти', 2),
    ('SSD', 'Объем накопителя', 2),
    ('Видеокарта', 'Тип видеокарты', 2),
    ('ОС', 'Операционная система', 2),
    ('Цвет', 'Цвет корпуса', 2),
    ('Порты', 'Типы портов', 2);

INSERT INTO
    "FilterDescription"(
        "name",
        "description",
        "categoryId",
        "measureName"
    )
VALUES
    (
        'Размер экрана',
        'Диагональ экрана в дюймах',
        2,
        '"'
    ),
    ('Вес', 'Вес в кг', 2, 'кг'),
    (
        'Батарея',
        'Время работы от батареи в часах',
        2,
        'ч'
    );

TRUNCATE TABLE "Filter" CASCADE;

ALTER SEQUENCE "Filter_id_seq" RESTART WITH 1;

-- Создание фильтров для ноутбуков
INSERT INTO
    "Filter" (
        "descriptionId",
        "possibleValue"
    )
VALUES
    -- Процессоры
    (1, 'Intel Core i5'),
    (1, 'Intel Core i7'),
    (1, 'Intel Core i9'),
    (1, 'AMD Ryzen 5'),
    (1, 'AMD Ryzen 7'),
    (1, 'AMD Ryzen 9'),
    (1, 'Apple M1'),
    (1, 'Apple M2'),
    (1, 'Apple M3'),
    -- RAM
    (2, '8GB'),
    (2, '16GB'),
    (2, '32GB'),
    (2, '64GB'),
    -- SSD
    (3, '256GB'),
    (3, '512GB'),
    (3, '1TB'),
    (3, '2TB'),
    (3, '4TB'),
    -- Видеокарты
    (4, 'Intel Iris Xe'),
    (4, 'NVIDIA RTX 3050'),
    (4, 'NVIDIA RTX 3060'),
    (4, 'NVIDIA RTX 3070'),
    (4, 'NVIDIA RTX 3080'),
    (4, 'NVIDIA RTX 3090'),
    (4, 'AMD Radeon 6600M'),
    (4, 'AMD Radeon 6800M'),
    (4, 'Apple M1 GPU'),
    (4, 'Apple M2 GPU'),
    (4, 'Apple M3 GPU'),
    -- Операционные системы
    (5, 'Windows 11'),
    (5, 'Windows 10'),
    (5, 'macOS'),
    (5, 'Linux'),
    -- Цвета
    (6, 'Серебристый'),
    (6, 'Серый'),
    (6, 'Черный'),
    (6, 'Белый'),
    (6, 'Синий'),
    -- Порты
    (7, 'USB-A'),
    (7, 'USB-C'),
    (7, 'Thunderbolt'),
    (7, 'HDMI'),
    (7, 'SD Card'),
    (7, '3.5mm'),
    (
        7,
        'USB-C Power Delivery'
    ),
    (8, ''),
    (9, ''),
    (10, '');

-- Очистка существующих связей
TRUNCATE TABLE "Filter_Product" CASCADE;

ALTER SEQUENCE "Filter_Product_id_seq" RESTART WITH 1;

-- Связывание фильтров с ноутбуками
INSERT INTO
    "Filter_Product" ("productId", "filterId", "value")
VALUES
    -- Продукт 1
    (1, 1, 0),
    -- Intel Core i5
    (1, 10, 0),
    -- 8GB RAM
    (1, 13, 0),
    -- 256GB SSD
    (1, 19, 0),
    -- 15" экран
    (1, 20, 0),
    -- Intel Iris Xe
    -- Продукт 2
    (2, 2, 0),
    -- Intel Core i7
    (2, 11, 0),
    -- 16GB RAM
    (2, 14, 0),
    -- 512GB SSD
    (2, 30, 0),
    -- Windows 11
    (2, 31, 0),
    -- Серебристый
    -- Продукт 3 
    (3, 4, 0),
    -- AMD Ryzen 5
    (3, 12, 0),
    -- 32GB RAM
    (3, 15, 0),
    -- 1TB SSD
    (3, 32, 0),
    -- macOS
    (3, 33, 0),
    -- Серый
    -- Продукт 4
    (4, 3, 0),
    -- Intel Core i9
    (4, 13, 0),
    -- 64GB RAM
    (4, 16, 0),
    -- 2TB SSD
    (4, 21, 0),
    -- NVIDIA RTX 3050
    (4, 34, 0),
    -- Черный
    -- Продукт 5
    (5, 7, 0),
    -- Apple M1
    (5, 10, 0),
    -- 8GB RAM
    (5, 13, 0),
    -- 256GB SSD
    (5, 28, 0),
    -- Apple M1 GPU
    (5, 32, 0),
    -- macOS
    -- Продукт 6
    (6, 6, 0),
    -- AMD Ryzen 9
    (6, 12, 0),
    -- 32GB RAM
    (6, 17, 0),
    -- 4TB SSD
    (6, 23, 0),
    -- NVIDIA RTX 3080
    (6, 35, 0),
    -- Белый
    -- Продукт 7
    (7, 2, 0),
    -- Intel Core i7
    (7, 10, 0),
    -- 8GB RAM
    (7, 14, 0),
    -- 512GB SSD
    (7, 19, 0),
    -- 15" экран
    (7, 36, 0),
    -- Синий
    -- Продукт 8 
    (8, 9, 0),
    -- Apple M3
    (8, 11, 0),
    -- 16GB RAM
    (8, 15, 0),
    -- 1TB SSD
    (8, 29, 0),
    -- Apple M3 GPU
    (8, 37, 0),
    -- USB-C Power Delivery
    -- Продукт 9 
    (9, 1, 0),
    -- Intel Core i5
    (9, 10, 0),
    -- 8GB RAM
    (9, 13, 0),
    -- 256GB SSD
    (9, 20, 0),
    -- Intel Iris Xe
    (9, 31, 0),
    -- Серебристый
    -- Продукт 10 
    (10, 3, 0),
    -- Intel Core i9
    (10, 12, 0),
    -- 32GB RAM
    (10, 17, 0),
    -- 4TB SSD
    (10, 24, 0),
    -- NVIDIA RTX 3090
    (10, 30, 0),
    -- Windows 11
    -- Продукт 11
    (11, 4, 0),
    -- AMD Ryzen 5
    (11, 11, 0),
    -- 16GB RAM
    (11, 16, 0),
    -- 2TB SSD
    (11, 22, 0),
    -- AMD Radeon 6800M
    (11, 33, 0),
    -- Серый
    -- Продукт 12
    (12, 5, 0),
    -- AMD Ryzen 7
    (12, 12, 0),
    -- 32GB RAM
    (12, 15, 0),
    -- 1TB SSD
    (12, 25, 0),
    -- NVIDIA RTX 3050
    (12, 34, 0),
    -- Черный
    -- Продукт 13
    (13, 8, 0),
    -- Apple M2
    (13, 11, 0),
    -- 16GB RAM
    (13, 14, 0),
    -- 512GB SSD
    (13, 27, 0),
    -- Apple M2 GPU
    (13, 32, 0),
    -- macOS
    -- Продукт 14
    (14, 6, 0),
    -- AMD Ryzen 9
    (14, 13, 0),
    -- 64GB RAM
    (14, 17, 0),
    -- 4TB SSD
    (14, 23, 0),
    -- NVIDIA RTX 3080
    (14, 31, 0),
    -- Серебристый
    -- Продукт 15
    (15, 2, 0),
    -- Intel Core i7
    (15, 10, 0),
    -- 8GB RAM
    (15, 13, 0),
    -- 256GB SSD
    (15, 21, 0),
    -- NVIDIA RTX 3050
    (15, 30, 0),
    -- Windows 11
    -- Продукт 16
    (16, 3, 0),
    -- Intel Core i9
    (16, 12, 0),
    -- 32GB RAM
    (16, 16, 0),
    -- 2TB SSD
    (16, 26, 0),
    -- NVIDIA RTX 3070
    (16, 35, 0),
    -- Белый
    -- Продукт 17
    (17, 7, 0),
    -- Apple M1
    (17, 11, 0),
    -- 16GB RAM
    (17, 15, 0),
    -- 1TB SSD
    (17, 28, 0),
    -- Apple M1 GPU
    (17, 36, 0),
    -- Синий
    -- Продукт 18
    (18, 4, 0),
    -- AMD Ryzen 5
    (18, 10, 0),
    -- 8GB RAM
    (18, 14, 0),
    -- 512GB SSD
    (18, 22, 0),
    -- AMD Radeon 6800M
    (18, 33, 0),
    -- Серый
    -- Продукт 19
    (19, 1, 0),
    -- Intel Core i5
    (19, 11, 0),
    -- 16GB RAM
    (19, 13, 0),
    -- 256GB SSD
    (19, 20, 0),
    -- Intel Iris Xe
    (19, 31, 0),
    -- Серебристый
    -- Продукт 20
    (20, 5, 0),
    -- AMD Ryzen 7
    (20, 12, 0),
    -- 32GB RAM
    (20, 15, 0),
    -- 1TB SSD
    (20, 24, 0),
    -- NVIDIA RTX 3090
    (20, 34, 0),
    -- Черный
    -- Продукт 21
    (21, 9, 0),
    -- Apple M3
    (21, 13, 0),
    -- 64GB RAM
    (21, 17, 0),
    -- 4TB SSD
    (21, 29, 0),
    -- Apple M3 GPU
    (21, 32, 0),
    -- macOS
    -- Продукт 22
    (22, 2, 0),
    -- Intel Core i7
    (22, 10, 0),
    -- 8GB RAM
    (22, 14, 0),
    -- 512GB SSD
    (22, 23, 0),
    -- NVIDIA RTX 3080
    (22, 35, 0),
    -- Белый
    -- Продукт 23
    (23, 6, 0),
    -- AMD Ryzen 9
    (23, 12, 0),
    -- 32GB RAM
    (23, 16, 0),
    -- 2TB SSD
    (23, 25, 0),
    -- NVIDIA RTX 3050
    (23, 36, 0),
    -- Синий
    -- Продукт 24
    (24, 8, 0),
    -- Apple M2
    (24, 11, 0),
    -- 16GB RAM
    (24, 15, 0),
    -- 1TB SSD
    (24, 27, 0),
    -- Apple M2 GPU
    (24, 33, 0),
    -- Серый
    -- Продукт 25
    (25, 3, 0),
    -- Intel Core i9
    (25, 13, 0),
    -- 64GB RAM
    (25, 17, 0),
    -- 4TB SSD
    (25, 26, 0),
    -- NVIDIA RTX 3070
    (25, 37, 0),
    -- Ноутбук 2 (14", 1.5кг, 12ч работы)
    (2, 19, 14.0),
    (2, 8, 1.500),
    (2, 9, 12),
    -- Ноутбук 3 (17.3", 2.5кг, 6ч работы)
    (3, 19, 17.3),
    (3, 8, 2.500),
    (3, 9, 6),
    -- Ноутбук 4 (13.3", 1.2кг, 15ч работы)
    (4, 19, 13.3),
    (4, 8, 1.200),
    (4, 9, 15),
    -- Ноутбук 5 (15.6", 2.1кг, 10ч работы)
    (5, 19, 15.6),
    (5, 8, 2.100),
    (5, 9, 10),
    -- Ноутбук 6 (16", 1.9кг, 18ч работы)
    (6, 19, 16.0),
    (6, 8, 1.900),
    (6, 9, 18),
    -- Ноутбук 7 (14", 1.4кг, 20ч работы)
    (7, 19, 14.0),
    (7, 8, 1.400),
    (7, 9, 20),
    -- Ноутбук 8 (17.3", 2.7кг, 5ч работы)
    (8, 19, 17.3),
    (8, 8, 2.700),
    (8, 9, 5),
    -- Ноутбук 9 (15.6", 2.0кг, 9ч работы)
    (9, 19, 15.6),
    (9, 8, 2.000),
    (9, 9, 9),
    -- Ноутбук 10 (13.3", 1.1кг, 14ч работы)
    (10, 19, 13.3),
    (10, 8, 1.100),
    (10, 9, 14),
    -- Ноутбук 11 (14", 1.3кг, 16ч работы)
    (11, 19, 14.0),
    (11, 8, 1.300),
    (11, 9, 16),
    -- Ноутбук 12 (15.6", 1.7кг, 7ч работы)
    (12, 19, 15.6),
    (12, 8, 1.700),
    (12, 9, 7),
    -- Ноутбук 13 (16", 2.2кг, 11ч работы)
    (13, 19, 16.0),
    (13, 8, 2.200),
    (13, 9, 11),
    -- Ноутбук 14 (17.3", 3.0кг, 4ч работы)
    (14, 19, 17.3),
    (14, 8, 3.000),
    (14, 9, 4),
    -- Ноутбук 15 (14", 1.6кг, 13ч работы)
    (15, 19, 14.0),
    (15, 8, 1.600),
    (15, 9, 13);