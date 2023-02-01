# Import the required libraries
from datetime import date
from enum import Enum

from pydantic import BaseModel, EmailStr


# Declare the category enum
class CategoryEnum(str, Enum):
    category_1 = "review"
    category_2 = "complaint"
    category_3 = "suggestion"


# Declare the review class
class Review(BaseModel):
    name: str
    review: str
    email: EmailStr
    category: CategoryEnum
    review_date: date


# Declare the order class
class Order(BaseModel):
    name: str
    email: EmailStr
    item: str
    quantity: int
    timestamp: date
    delivery_date: date
