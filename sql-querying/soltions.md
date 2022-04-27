## Part 1

    Done

## Part 2
- SQL Basics: Simple WHERE and ORDER BY
```
SELECT id, name, age FROM people 
WHERE age > 50
ORDER by age DESC
```
- SQL Basics: Simple SUM
```
SELECT SUM(age) as age_sum
FROM people 
```
- SQL Basics: Simple MIN / MAX
```
SELECT MAX(age) as age_max, MIN(age) as age_min
FROM people
```
- Find all active students
```
SELECT *
FROM students
WHERE IsActive = 1
```
- SQL Basics: Simple GROUP BY
```
SELECT the.age, COUNT(name) as people_count
FROM people AS the
GROUP BY the.age 
```
- SQL Basics: Simple HAVING
```
SELECT age, COUNT(*) AS total_people
FROM people
GROUP BY age
HAVING COUNT(*) >= 10;
```
- Then, complete tutorial 5 (SUM_and_COUNT) on SQL Zoo.

    DONE