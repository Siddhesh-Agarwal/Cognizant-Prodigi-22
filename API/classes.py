from datetime import date, timedelta
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
    category: CategoryEnum = CategoryEnum.category_1
    review_date: date = date.today()


class Order(BaseModel):
    name: str
    email: EmailStr
    item: str
    quantity: int
    timestamp: date = date.today()
    delivery_date = date.today() + timedelta(days=15)
