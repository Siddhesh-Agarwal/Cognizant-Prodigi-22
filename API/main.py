import sqlite3

import uvicorn
from fastapi import FastAPI, HTTPException
from fastapi.responses import JSONResponse

from API.classes import CategoryEnum, Order, Review

app = FastAPI()


@app.get("/orders/get")
async def get_orders():
    # Connect to database
    conn = sqlite3.connect("./db/orders.db")
    # create a cursor
    c = conn.cursor()
    # execute an SQL command
    c.execute("SELECT * FROM orders")
    # fetch all the feedbacks
    orders = c.fetchall()
    # close the connection
    conn.close()
    # return the feedbacks
    return orders


@app.post("/orders/add")
async def add_order(order: Order):
    # Connect to database
    conn = sqlite3.connect("./db/orders.db")
    # create a cursor
    c = conn.cursor()
    # details
    details = {
        "name": order.name,
        "email": order.email,
        "item": order.item,
        "quantity": order.quantity,
        "order_date": order.order_date,
        "order_time": order.order_time,
    }
    # execute an SQL command
    c.execute(
        "INSERT INTO orders VALUES (:name, :email, :item, :quantity, :order_date)",
        details,
    )
    # commit the changes
    conn.commit()
    # close the connection
    conn.close()
    # return back the details
    return details


@app.get("/feedbacks/get")
async def get_feedbacks():
    """
    Get all the feedbacks from the databases
    """
    # Connect to database
    conn = sqlite3.connect("./db/feedbacks.db")
    # create a cursor
    c = conn.cursor()
    # execute an SQL command
    c.execute("SELECT * FROM feedbacks")
    # fetch all the feedbacks
    feedbacks = c.fetchall()
    # close the connection
    conn.close()
    # return the feedbacks
    return feedbacks


@app.get("/feedbacks/get/{category}")
async def get_feedbacks_by_category(category: CategoryEnum):
    """
    Get all the feedbacks from the databases
    """
    # Connect to database
    conn = sqlite3.connect("./db/feedbacks.db")
    # create a cursor
    c = conn.cursor()
    # execute an SQL command
    c.execute(
        "SELECT * FROM feedbacks WHERE category = :category", {"category": category}
    )
    # fetch all the feedbacks
    feedbacks = c.fetchall()
    # close the connection
    conn.close()
    # return the feedbacks
    return feedbacks


@app.post("/feedbacks/add")
async def add_review(review: Review):
    # Connect to database
    conn = sqlite3.connect("./db/feedbacks.db")
    # create a cursor
    c = conn.cursor()
    # execute an SQL command
    c.execute(
        "INSERT INTO feedbacks VALUES (:name, :review, :email, :date)",
        {
            "name": review.name,
            "review": review.review,
            "email": review.email,
            "date": review.review_date,
        },
    )
    # commit the changes
    conn.commit()
    # close the connection
    conn.close()


# HTTP Exception
@app.exception_handler(HTTPException)
async def http_exception_handler(request, exc):
    return JSONResponse(status_code=exc.status_code, content={"message": exc.detail})


if __name__ == "__main__":
    uvicorn.run(app, port=8080)
