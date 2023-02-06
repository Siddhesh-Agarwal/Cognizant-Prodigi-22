import sqlite3

import pandas as pd
import pandas_profiling
import streamlit as st
from st_aggrid import AgGrid
from streamlit_pandas_profiling import st_profile_report


@st.cache(allow_output_mutation=True)
def load_data():
    # Create a connection
    conn = sqlite3.connect("../db/feedbacks.db")
    # fetch required data
    df = pd.read_sql_query("SELECT * FROM feedbacks", conn)
    # Change Datatypes
    conn.close()
    # change the datatypes
    df = df.astype({"category": "category"})
    # sort the data acc. to dates
    df.sort_values(by="review_date", inplace=True)
    # return the dataframe
    return df


@st.cache(allow_output_mutation=True)
def gen_profile_report(df, *report_args, **report_kwargs):
    return df.profile_report(*report_args, **report_kwargs)


if __name__ == "__main__":
    st.title("Reviews")
    df = load_data()
    AgGrid(df.head(100))

    pr = gen_profile_report(df, explorative=True)
    with st.expander("Data Profiling Report"):
        st_profile_report(pr)
