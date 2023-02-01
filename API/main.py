import sqlite3

import pandas as pd
import uvicorn
from classes import CategoryEnum, Order, Review
from fastapi import FastAPI, HTTPException
from fastapi.responses import JSONResponse

app = FastAPI()


@app.get("/")
def home():
    return {"message": "Welcome to the API"}


@app.get("/orders/get")
def get_orders():
    # Connect to database
    conn = sqlite3.connect("../db/orders.db")
    # create a cursor
    curr = conn.cursor()
    # execute an SQL command
    curr.execute("SELECT * FROM orders")
    # fetch all the feedbacks
    orders = curr.fetchall()
    # close the connection
    conn.close()
    # return the feedbacks as JSON
    return orders


@app.get("/orders/get/{item}")
def get_orders_by_item(item: str):
    # Connect to database
    conn = sqlite3.connect("../db/orders.db")
    # create a cursor
    curr = conn.cursor()
    # execute an SQL command
    curr.execute("SELECT * FROM orders WHERE item=?", (item,))
    # fetch all the feedbacks
    orders = curr.fetchall()
    # close the connection
    conn.close()
    # return the feedbacks
    return orders


@app.get("/orders/get/{item}/{quantity}")
def get_orders_by_item_quantity(item: str, quantity: int):
    # Connect to database
    conn = sqlite3.connect("../db/orders.db")
    # create a cursor
    curr = conn.cursor()
    # execute an SQL command
    curr.execute("SELECT * FROM orders WHERE item=? AND quantity>=?", (item, quantity))
    # fetch all the feedbacks
    orders = curr.fetchall()
    # close the connection
    conn.close()
    # return the feedbacks
    return orders


@app.get("/orders/get/{id}")
def get_order_by_id(id: int):
    # Connect to database
    conn = sqlite3.connect("../db/orders.db")
    # create a cursor
    curr = conn.cursor()
    # execute an SQL command
    curr.execute("SELECT * FROM orders WHERE rowid=?", (id,))
    # fetch all the feedbacks
    order = curr.fetchone()
    # close the connection
    conn.close()
    # return the feedbacks
    return {
        "id": order[0],
        "name": order[1],
        "email": order[2],
        "item": order[3],
        "quantity": order[4],
        "timestamp": order[5],
        "delivery_date": order[6],
    }


@app.post("/orders/add")
async def add_order(order: Order):
    # Connect to database
    conn = sqlite3.connect("../db/orders.db")
    # create a cursor
    curr = conn.cursor()
    # create a table if it doesn't exist
    curr.execute(
        "CREATE TABLE IF NOT EXISTS orders (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT, email TEXT, item TEXT, quantity INTEGER, timestamp TEXT)"
    )
    # details
    details = {
        "name": order.name,
        "email": order.email,
        "item": order.item,
        "quantity": order.quantity,
        "timestamp": order.timestamp,
        "delivery_date": order.delivery_date,
    }
    # execute an SQL command
    curr.execute(
        "INSERT INTO orders (name, email, item, quantity, timestamp, delivery_date) VALUES (:name, :email, :item, :quantity, :timestamp, :delivery_date)",
        details,
    )
    # commit the changes
    conn.commit()
    # close the connection
    conn.close()


@app.get("/feedbacks/get")
def get_feedbacks():
    # Connect to database
    conn = sqlite3.connect("../db/feedbacks.db")
    # create a cursor
    curr = conn.cursor()
    # execute an SQL command
    curr.execute("SELECT * FROM feedbacks")
    # fetch all the feedbacks
    feedbacks = curr.fetchall()
    # close the connection
    conn.close()
    # return the feedbacks
    return feedbacks


@app.get("/feedbacks/get/{category}")
def get_feedbacks_by_category(category: CategoryEnum):
    # Connect to database
    conn = sqlite3.connect("../db/feedbacks.db")
    # create a cursor
    curr = conn.cursor()
    # execute an SQL command
    curr.execute(
        "SELECT * FROM feedbacks WHERE category = :category", {"category": category}
    )
    # fetch all the feedbacks
    feedbacks = curr.fetchall()
    # close the connection
    conn.close()
    # return the feedbacks
    return feedbacks


@app.post("/feedbacks/add")
async def add_review(review: Review):
    # Connect to database
    conn = sqlite3.connect("../db/feedbacks.db")
    # create a cursor
    curr = conn.cursor()
    # create a table if it doesn't exist
    curr.execute(
        "CREATE TABLE IF NOT EXISTS feedbacks (name TEXT, review TEXT, email TEXT, review_date TEXT, category TEXT)"
    )
    # details
    details = {
        "name": review.name,
        "review": review.review,
        "email": review.email,
        "review_date": review.review_date,
        "category": review.category,
    }
    # execute an SQL command
    curr.execute(
        "INSERT INTO feedbacks VALUES (:name, :review, :email, :review_date, :category)",
        details,
    )
    # commit the changes
    conn.commit()
    # close the connection
    conn.close()


@app.get("/predict")
def predict_order(month: int):
    if month in range(1, 13):
        from sklearn.linear_model import LinearRegression

        # Connect to the database
        conn = sqlite3.connect("../db/orders.db")
        c = conn.cursor()

        # Retrieve the order data
        c.execute("SELECT timestamp, quantity FROM orders")
        data = c.fetchall()

        # Convert the data to a Pandas DataFrame
        df = pd.DataFrame(data, columns=["timestamp", "quantity"])

        # Convert the timestamp column to datetime
        df["timestamp"] = pd.to_datetime(df["timestamp"])

        # Extract the month from the timestamp
        df["month"] = df["timestamp"].dt.month

        # Create a linear regression model
        reg = LinearRegression()

        # Fit the model using the month and quantity data
        X = df[["month"]]
        y = df["quantity"]
        reg.fit(X, y)

        # Use the model to predict the quantity of orders for the given month
        prediction = reg.predict([[month]])

        return {"prediction": prediction[0]}
    else:
        # Raise an HTTPException with a 422 status code
        raise HTTPException(status_code=422, detail="Invalid month")


# HTTP Exception
@app.exception_handler(HTTPException)
def http_exception_handler(request, exc):
    return JSONResponse(status_code=exc.status_code, content={"message": exc.detail})


if __name__ == "__main__":
    uvicorn.run(app, port=8000)
