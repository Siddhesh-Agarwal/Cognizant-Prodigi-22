import sqlite3

import pandas as pd
import pandas_profiling
import plotly.express as px
import streamlit as st
from streamlit_pandas_profiling import st_profile_report


@st.cache(allow_output_mutation=True)
def load_order_quantities() -> pd.DataFrame:
    # connect to the database
    conn = sqlite3.connect("../db/orders.db")
    # load the data from the database
    df = pd.read_sql_query("SELECT timestamp, item, quantity FROM orders", conn)
    # close the connection to the database
    conn.close()
    # return the data
    return df


@st.cache(allow_output_mutation=True)
def gen_profile_report(df: pd.DataFrame, *report_args, **report_kwargs):
    return df.profile_report(*report_args, **report_kwargs)


if __name__ == "__main__":
    df = load_order_quantities()
    # The dates are in YYYY-MM-DD format, so we need to convert them to datetime objects
    df["timestamp"] = df["timestamp"].str[:7]
    # Extracting years
    years = df.timestamp.str[:4].unique().tolist()
    # list of items
    items = list(df["item"].unique())

    cols = st.columns(2)
    with cols[0]:
        from_year = st.selectbox("From year", years, index=0)
    with cols[1]:
        to_year = st.selectbox("To year", years, index=len(years) - 1)
    # with cols[2]:
    #     item = st.selectbox("Products", [None].extend(items), index=0)

    # filter based on items name
    # if item != None:
    #     df = df[df.items == item]
    # remove items column
    df_ = df.drop(columns=["item"])
    # group the data by date and sum the quantities
    df_ = df_.groupby("timestamp", as_index=False).sum()
    # filters
    df_ = df_[(df_.timestamp.str[:4] >= from_year) & (df_.timestamp.str[:4] <= to_year)]

    # plot the data in a line chart
    fig = px.line(
        df_,
        x="timestamp",
        y="quantity",
        title="Order Quantities",
        labels={"timestamp": "Date", "quantity": "Quantity"},
        height=500,
    )
    st.plotly_chart(fig)
    pr = gen_profile_report(df_, explorative=True)
    with st.expander("Data Profiling Report"):
        st_profile_report(pr)
