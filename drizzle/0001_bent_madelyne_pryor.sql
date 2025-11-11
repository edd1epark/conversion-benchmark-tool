CREATE TABLE `user_responses` (
	`id` int AUTO_INCREMENT NOT NULL,
	`monthly_traffic` int NOT NULL,
	`monthly_conversions` int NOT NULL,
	`conversion_type` enum('demos','signups') NOT NULL,
	`conversion_value` int DEFAULT 0,
	`created_at` timestamp NOT NULL DEFAULT (now()),
	CONSTRAINT `user_responses_id` PRIMARY KEY(`id`)
);
