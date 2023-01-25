from api import db
from api.models import Department, Employee

# This script was used to initialize database

db.create_all()

# Add initially three required department and one employee to db

sales = Department(department_name="Sales")
ops = Department(department_name="Ops")
it = Department(department_name="IT")
employee_one = Employee(first_name="Nikul", last_name="Pandya", department_id=3)


db.session.add(sales)
db.session.add(ops)
db.session.add(it)
db.session.add(employee_one)
db.session.commit()
db.session.close()

print("Database is created sucessfully")
