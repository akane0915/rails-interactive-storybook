var Chapter2Images = React.createClass({

  render: function() {
    return (
      <div>

        <div className = "food_image" id = "porridge" style={{display:'none'}} >
          <img className = "user-selected-image" className = "user-selected-image" src="https://farm5.staticflickr.com/4312/35769089980_c515492fb5_m.jpg" alt="porridge"/>
        </div>

        <div className = "food_image" id = "fried-rice" style={{display:'none'}} >
          <img className = "user-selected-image" className = "user-selected-image" src="https://farm5.staticflickr.com/4306/35353419133_278037e122_m.jpg" alt="fried-rice"/>
        </div>

        <div className = "food_image" id = "pho" style={{display:'none'}} >
          <img className = "user-selected-image" src="https://farm5.staticflickr.com/4293/36119875996_e9c25dc9d7_m.jpg" alt="pho"/>
        </div>

        <div className = "food_image" id = "kebabs" style={{display:'none'}} >
          <img className = "user-selected-image" src="https://farm5.staticflickr.com/4320/36119873316_4f3dc5d7b9_m.jpg" alt="kebabs"/>
        </div>

        <div className = "food_image" id = "gazpacho" style={{display:'none'}} >
          <img className = "user-selected-image" src="https://farm5.staticflickr.com/4306/36119866716_82d2051019_m.jpg" alt="gazpacho"/>
        </div>



        <div className = "house_type_image" id = "cabin" style={{display:'none'}} >
          <img className = "user-selected-image" src="https://farm5.staticflickr.com/4309/35769094890_63eb47cb1e_m.jpg" alt="cabin"/>
        </div>

        <div className = "house_type_image" id = "igloo" style={{display:'none'}} >
          <img className = "user-selected-image" src="https://farm5.staticflickr.com/4293/35992287272_3f6f16b799_m.jpg" alt="igloo"/>
        </div>

        <div className = "house_type_image" id = "treehouse" style={{display:'none'}} >
          <img className = "user-selected-image" src="https://farm5.staticflickr.com/4301/35992293742_3dc75c527a_m.jpg" alt="treehouse"/>
        </div>

        <div className = "house_type_image" id = "tepee" style={{display:'none'}} >
          <img className = "user-selected-image" src="https://farm5.staticflickr.com/4319/35992276232_c386763f30_m.jpg " alt="tepee"/>
        </div>

      </div>
    )
  }
});
