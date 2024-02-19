import axios from "axios";
import { showAlert } from "./alerts";

//update data

export const updateSettings = async (data) => {
  console.log(data)

    try {
      const res = await axios({
        method:"PATCH",
        url:'/api/v1/users/updateMe',
        data
       
        

      })
 
      if (res.data.status === 'success') {
        console.log("s")
        showAlert('success', ` updated successfully!Refresh to see the changes`);
      }
    } catch (err) {
      showAlert('error', err.response.data.message);
    }
  };

  