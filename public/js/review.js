import axios from "axios";
import { showAlert } from "./alerts";

//update data

export const reviews = async (review) => {
    try {
        const res = await axios({
          method: "POST",
          url: "/api/v1/reviews",
          data: {
           review
          },
        });
    
        if (res.data.status === "success") {
          showAlert("success", "Recorded your review!");
    
        }
      } catch (err) {
        showAlert("success", "Adding Soon.Thanks for review");
      }
    };
    