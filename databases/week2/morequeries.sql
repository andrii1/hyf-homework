/*Get all the tasks assigned to users whose email ends in @spotify.com*/
SELECT * FROM task JOIN user_task ON user_task.task_id = task.id JOIN user ON user_task.user_id = user.id WHERE user.email LIKE '%@spotify.com%'

/*Get all the tasks for 'Donald Duck' with status 'Not started'*/
SELECT * FROM task JOIN user_task ON user_task.task_id = task.id JOIN user ON user_task.user_id = user.id JOIN status ON status.id=task.status_id WHERE user.name='Donald Duck' AND status.name="Not started"
/*Get all the tasks for 'Maryrose Meadows' that were created in september (hint: month(created)=month_number)*/
SELECT * FROM task JOIN user_task ON user_task.task_id = task.id JOIN user ON user_task.user_id = user.id WHERE user.name='Maryrose Meadows' AND MONTH(task.created)=10

/*Find how many tasks where created in each month, e.g. how many tasks were created in october, how many tasks were created in november, etc. (hint: use group by)*/
SELECT MONTH(task.created), COUNT(*) as number_of_tasks FROM task GROUP BY MONTH(task.created)
