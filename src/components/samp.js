
 
import React from 'react'

const samp = () => {
    $(document).ready(function () {
        $('#datepicker').datepicker({
          format: 'mm/dd/yyyy', // Customize the date format
          autoclose: true,      // Close the picker automatically after selecting a date
          todayHighlight: true  // Highlight today's date
        });
      });
  return (
    samp
  )
}

export default samp