from datetime import date
from enum import Enum

from pydantic import BaseModel, EmailStr


class CategoryEnum(str, Enum):
    category_1 = "review"
    category_2 = "complaint"
    category_3 = "suggestion"


class Review(BaseModel):
    name: str
    review: str
    email: EmailStr
    category: CategoryEnum
    review_date: date


class Order(BaseModel):
    name: str
    email: EmailStr
    item: str
    quantity: int
    timestamp: date
    delivery_date: date
