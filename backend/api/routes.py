import logging
from flask import jsonify, request
from flask_cors import CORS
from api import app, db
from api.models import Employee, Department


# To enables CORS support on all routes
# This is necessary otherwise request from client might be blocked by backend
CORS(app, resources={r"/*": {"origins": "*"}})

# Endpoints
@app.route("/", methods=["GET"])
def default_route():
    return jsonify({"Message": "Backend is up and running"}), 200


@app.route("/employee", methods=["GET"])
def get_employee():
    """
    Get request to this endpoint gives list of existing employees
    """
    try:
        employee_list = []
        # Use Employee class to query all employees in db
        all_employee = Employee.query.all()

        for employee in all_employee:
            # Use Department class to get department
            # using department_id ForeignKey assigned to Employee class
            department = Department.query.get(employee.department_id)
            employee_item = {
                "emploeeId": employee.id,
                "firstName": employee.first_name,
                "lastName": employee.last_name,
                "departmentName": department.department_name,
            }
            employee_list.append(employee_item)
        return jsonify({"Employees": employee_list}), 200

    except Exception:
        logging.exception("Could not get employees due to following error:")
        return jsonify({"Message": "Server Error!"}), 500


@app.route("/employee", methods=["POST"])
def add_employee():
    """
    This endpoit respond to a post request from client and
    insert provided employee data to the database
    """
    try:
        # Consume post request data comming from frontend
        first_name = request.json.get("firstName", "")
        last_name = request.json.get("lastName", "")
        department_id = request.json.get("departmentId", "")

        new_employee = Employee(
            first_name=first_name, last_name=last_name, department_id=department_id
        )
        # Use db session to add employee data to db
        db.session.add(new_employee)
        db.session.commit()
        logging.info("New employee is added successfully")
        return jsonify({"Message": "New employee is added successfully"}), 200

    except Exception:
        logging.exception("Could not create employee due to following error:")
        return jsonify({"Message": "Employee Creation Error!"}), 500
