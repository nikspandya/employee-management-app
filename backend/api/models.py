from api import db


class Department(db.Model):
    """
    database model class for Department
    Department class has relationship with Employee using backref
    """

    __tablename__ = "department"
    id = db.Column(db.Integer, primary_key=True)
    department_name = db.Column(db.String(25), unique=True, nullable=False)
    employees = db.relationship("Employee", backref="department")


class Employee(db.Model):
    """
    database model class for employee
    Employee class has relationship to Department class
    using ForeignKey department_id
    """

    __tablename__ = "employee"
    id = db.Column(db.Integer, primary_key=True)
    first_name = db.Column(db.String(25), unique=False, nullable=False)
    last_name = db.Column(db.String(25), unique=False, nullable=False)
    department_id = db.Column(db.Integer, db.ForeignKey("department.id"))
