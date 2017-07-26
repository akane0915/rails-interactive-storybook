var Chapter3Images = React.createClass({

  render: function() {
    return (
      <div>
        <div className = "seat_type_image" id = "chair" style={{display:'none'}} >
          <img className = "user-selected-image" src="https://farm5.staticflickr.com/4328/35992340972_7c65deb75b_m.jpg" alt="chair"/>
        </div>

        <div className = "seat_type_image" id = "bike-seat" style={{display:'none'}} >
          <img className = "user-selected-image" src="https://farm5.staticflickr.com/4293/35992335822_6028aa0865_m.jpg" alt="bike-seat"/>
        </div>

        <div className = "seat_type_image" id = "toilet" style={{display:'none'}} >
          <img className = "user-selected-image" src="https://farm5.staticflickr.com/4326/35353477693_959f0c0aa5_m.jpg" alt="toilet"/>
        </div>

        <div className = "seat_type_image" id = "saddle" style={{display:'none'}} >
          <img className = "user-selected-image" src="https://farm5.staticflickr.com/4319/35353476383_886a6f7df8_m.jpg" alt="saddle"/>
        </div>

      </div>
    )
  }
});
