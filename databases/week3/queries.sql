/*Meal*/
/*Get all meals*/
SELECT
  *
FROM
  meal
LIMIT
  100;
  /*Add new meal*/
INSERT INTO
  meal(
    id,
    title,
    description,
    location,
    `when`,
    max_reservations,
    price,
    created_date
  )
VALUES(
    2,
    'steak',
    'Steak meal',
    'Copenhagen',
    '2022-09-14 00:00:00',
    3,
    100,
    '2022-09-03'
  )
  /*Get a meal with any id,
                fx 1*/
SELECT
  *
FROM
  meal
where
  id = 1
  /*Update
            a meal with any id,
            fx 1.
          Update
            any attribute fx the title
            or multiple attributes*/
UPDATE
  meal
SET
  description = "tasty belgium fries"
WHERE
  id = 1
  /*Delete a meal with any id,
      fx 1*/
DELETE FROM
  meal
WHERE
  id = 2
  /*Get all reservations*/
  /*Add
      a new reservation Get a reservation with any id,
      fx 1*/
  /*Update
      a reservation with any id,
      fx 1.*/
  /*Update
      any attribute fx the title
      or multiple attributes Delete a reservation with any id,
      fx 1*/
