CREATE DATABASE meals DEFAULT CHARACTER SET = 'utf8mb4';
CREATE TABLE `meal` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `title` varchar(255) NOT NULL,
  `description` TEXT NOT NULL,
  `location` varchar(255) NOT NULL,
  `when` DATETIME NOT NULL,
  `max_reservations` int(10) unsigned NOT NULL,
  `price` DECIMAL(5, 2) NOT NULL,
  `created_date` DATE NOT NULL
) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_unicode_ci;
CREATE TABLE `reservation` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `number_of_guests` int(10) unsigned NOT NULL,
  `meal_id` int(10) unsigned NOT NULL,
  `created_date` DATE NOT NULL,
  `contact_phonenumber` varchar(255) NOT NULL,
  `contact_name` varchar(255) NOT NULL,
  `contact_email` varchar(255) NOT NULL,
  CONSTRAINT `fk_consultations_meal` FOREIGN KEY (`meal_id`) REFERENCES `meal` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_unicode_ci;
