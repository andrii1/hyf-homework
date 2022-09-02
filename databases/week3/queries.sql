/*MEAL*/
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
  /*Get a meal with any id, fx 1*/
SELECT
  *
FROM
  meal
where
  id = 1
  /*Update a meal with any id, fx 1.*/
UPDATE
  meal
SET
  description = "tasty belgium fries"
WHERE
  id = 1
  /*Update any attribute fx the title or multiple attributes*/
UPDATE
  meal
SET
  location = "London",
  max_reservations = 7
WHERE
  id = 2
  /*Delete a meal with any id, fx 1*/
DELETE FROM
  meal
WHERE
  id = 2
  /*RESERVATION*/
  /*Get all reservations*/
SELECT
  *
FROM
  reservation
LIMIT
  100;
  /*Add a new reservation*/
INSERT INTO
  reservation(
    id,
    number_of_guests,
    meal_id,
    created_date,
    contact_phonenumber,
    contact_name,
    contact_email
  )
VALUES(
    1,
    3,
    1,
    '2022-09-07',
    '12345678',
    'Andrew',
    'test@gmail.com'
  )
  /*Get a reservation with any id, fx 1*/
SELECT
  *
FROM
  reservation
WHERE
  id = 1
  /*Update a reservation with any id, fx 1.*/
UPDATE
  reservation
SET
  number_of_guests = 5
WHERE
  id = 1
  /*Update any attribute fx the title or multiple attributes*/
UPDATE
  reservation
SET
  contact_phonenumber = 09876543,
  contact_name = "Andrii"
WHERE
  id = 1
  /*Delete a reservation with any id, fx 1*/
DELETE FROM
  reservation
WHERE
  id = 1
  /*REVIEW*/
  /*Get all reviews*/
SELECT
  *
FROM
  review
LIMIT
  100;
  /*Add a new review*/
INSERT INTO
  review(
    id,
    title,
    description,
    meal_id,
    stars,
    created_date
  )
VALUES(
    1,
    'Great meal!',
    'Enjoyed it!',
    1,
    5,
    '2022-09-05'
  )
  /*Get a review with any id, fx 1*/
SELECT
  *
FROM
  review
WHERE
  id = 1
  /*Update a review with any id, fx 1.*/
UPDATE
  review
SET
  created_date = 2022 -09 -07
WHERE
  id = 1
  /*Update any attribute fx the title or multiple attributes*/
UPDATE
  review
SET
  title = "Nice taste!",
  description = "Great taste with wine!"
WHERE
  id = 1
  /*Delete a review with any id, fx 1*/
DELETE FROM
  review
WHERE
  id = 1
