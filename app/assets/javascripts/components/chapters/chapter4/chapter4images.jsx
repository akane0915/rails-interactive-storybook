var Chapter4Images = React.createClass({

  render: function() {
    return (
      <div>
        <div className = "bed_type_image" id = "bed" style={{display:'none'}} >
          <img className = "user-selected-image" src="https://farm5.staticflickr.com/4302/36119840866_4bf917584f_m.jpg" alt="bed"/>
        </div>

        <div className = "bed_type_image" id = "hammock" style={{display:'none'}} >
          <img className = "user-selected-image" src="https://farm5.staticflickr.com/4312/36119850026_f2383aea63_m.jpg" alt="hammock"/>
        </div>

        <div className = "bed_type_image" id = "yoga-mat" style={{display:'none'}} >
          <img className = "user-selected-image" src="https://farm5.staticflickr.com/4295/36119852506_2b010f188e_m.jpg" alt="yoga mat"/>
        </div>
      </div>
    )
  }
});
