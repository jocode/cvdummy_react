import { useState, useEffect } from 'react';

const api = "https://us-central1-gndx-cv.cloudfunctions.net/me";

const useGetData = () => {

  const [mydata, setdata] = useState([]);

  useEffect(() => {
    fetch(api)
      .then(response => response.json())
      .then(data => setdata(data))
  }, []);

  return mydata;

}

export default useGetData;