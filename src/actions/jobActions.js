import { type } from "@testing-library/user-event/dist/type";
let intervalId;
export function fetchJobs(limit, offset, interval) {
  return (dispatch) => {
    if (intervalId) {
      clearInterval(intervalId);
    }
    intervalId = setInterval(() => {
      dispatch({ type: "LOADING_JOBS" }); // Dispatch loading action
      const myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");

      const body = JSON.stringify({
        limit: limit,
        offset: offset,
      });

      const requestOptions = {
        method: "POST",
        headers: myHeaders,
        body,
      };
      fetch(
        "https://api.weekday.technology/adhoc/getSampleJdJSON",
        requestOptions,
      )
        .then((res) => res.json())
        .then((data) => {
          if (typeof data === "object" && data !== null) {
            // Convert the object to an array
            const jobsArray = Object.values(data);
            const flatJobsArray = [].concat(...jobsArray);
            dispatch({ type: "APPEND_JOBS", payload: flatJobsArray });
            dispatch({ type: "LOADED_JOBS" });
            // Dispatch loaded action
          } else {
            console.error("Data from API is not an object:", data);
          }
        })
        .catch((error) => {
          console.error(error);
          dispatch({ type: "ERROR_JOBS" }); // Dispatch error action
        });
    }, 5000);
  };
}

export function toggleDarkMode() {
  return {
    type: "TOGGLE_DARK_MODE",
  };
}
