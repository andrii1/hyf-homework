/*Additional queries*/
/*Get meals that has a price smaller than a specific price fx 90*/
SELECT
  *
FROM
  meal
WHERE
  price < 120
LIMIT
  100;
  /*Get meals that still has available reservations*/
SELECT
  *
FROM
  meal
  JOIN reservation ON reservation.meal_id = meal.id
LIMIT
  100;
  /*Get meals that partially match a title. Rød grød med will match the meal with the title Rød grød med fløde*/
SELECT
  *
FROM
  meal
WHERE
  title like '%fri%'
  /*Get meals that has been created between two dates*/
SELECT
  *
FROM
  meal
WHERE
  created_date BETWEEN '2021-08-10'
  AND '2022-10-01';
  /*Get only specific number of meals fx return only 5 meals*/
SELECT
  *
FROM
  meal
LIMIT
  5;
  /*Get the meals that have good reviews*/
SELECT
  *
FROM
  meal
  JOIN review ON review.meal_id = meal.id
WHERE
  stars > 4
LIMIT
  100;
  /*Get reservations for a specific meal sorted by created_date*/
SELECT
  *
FROM
  reservation
  JOIN meal ON reservation.meal_id = meal.id
WHERE
  meal.id = 1
ORDER BY
  meal.created_date ASC
  /*Sort all meals by average number of stars in the reviews*/
SELECT
  meal.title,
  AVG(review.stars)
FROM
  meal
  JOIN review ON review.meal_id = meal.id
GROUP BY
  meal.title
ORDER by
  AVG(review.stars) ASC
