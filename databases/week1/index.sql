/*Find out how many tasks are in the task table*/
SELECT COUNT(id) FROM task LIMIT 100;
/*Find out how many tasks in the task table do not have a valid due date*/
SELECT COUNT(id) FROM task WHERE `due_date` IS NULL LIMIT 100;
Find all the tasks that are marked as done
Find all the tasks that are not marked as done
Get all the tasks, sorted with the most recently created first
Get the single most recently created task
Get the title and due date of all tasks where the title or description contains database
Get the title and status (as text) of all tasks
Get the name of each status, along with a count of how many tasks have that status
Get the names of all statuses, sorted by the status with most tasks first*/
