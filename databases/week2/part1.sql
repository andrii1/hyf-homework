/*Add a task with these attributes: title, description, created, updated, due_date, status_id, user_id*/
insert into task (title, description, created, updated, due_date, status_id, user_id
) values ('Wash shorts', 'Do it quick', '2022-10-25 06:54:16', '2022-10-25 06:55:16', '2022-10-28 06:55:16', 1, 7);
/*Change the title of a task*/
UPDATE task SET title = "Wash pants" WHERE id = 36
/*Change a task due date*/
UPDATE task SET due_date = '2022-10-29 06:55:16' WHERE id = 36
/*Change a task status*/
UPDATE task SET status_id = '2' WHERE id = 36
/*Mark a task as complete*/
UPDATE task SET status_id = '3' WHERE id = 36
/*Delete a task*/
DELETE FROM task WHERE id = 36
