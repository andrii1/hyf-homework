/*Find out how many tasks are in the task table*/
SELECT COUNT(id) FROM task LIMIT 100;
/*Find out how many tasks in the task table do not have a valid due date*/
SELECT COUNT(id) FROM task WHERE `due_date` IS NULL LIMIT 100;
/* Find all the tasks that are marked as done */
SELECT * FROM task JOIN status ON `status.id` = 'task.status_id' WHERE status.name = 'Done'

/*Find all the tasks that are not marked as done*/

SELECT * FROM task JOIN status ON status.id = task.status_id WHERE status.name != 'Done'
/*Get all the tasks, sorted with the most recently created first*/
SELECT * FROM task order by created desc
/*Get the single most recently created task*/
SELECT * FROM task order by created desc limit 1
/*Get the title and due date of all tasks where the title or description contains database*/
SELECT task.title, task.due_date FROM task WHERE description LIKE '%database%' OR title LIKE '%database%'
/*Get the title and status (as text) of all tasks*/
SELECT task.title, status.name FROM task JOIN status ON status.id = task.status_id
/*Get the name of each status, along with a count of how many tasks have that status*/
SELECT status.name, COUNT(*) as number FROM task JOIN status ON status.id = task.status_id GROUP BY status.name

/*Get the names of all statuses, sorted by the status with most tasks first*/

SELECT status.name, COUNT(*) as number FROM task JOIN status ON status.id = task.status_id GROUP BY status.name ORDER BY number DESC
