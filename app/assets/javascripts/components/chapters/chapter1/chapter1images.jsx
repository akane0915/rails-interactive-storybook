var Chapter1Images = React.createClass({

  render: function() {
    return (
      <div>

        <div className = "family_type_image" id = "bear" style={{display:'none'}} >
          <img className = "user-selected-image" src="https://farm5.staticflickr.com/4297/35992200362_e71c49f967_m.jpg" alt="bear"/>
        </div>

        <div className = "family_type_image" id = "puffin" style={{display:'none'}} >
          <img className = "user-selected-image" src="https://farm5.staticflickr.com/4311/35992215332_2248b3f160_m.jpg" alt="puffin"/>
        </div>

        <div className = "family_type_image" id = "banana-slug" style={{display:'none'}} >
          <img className = "user-selected-image" src="https://farm5.staticflickr.com/4314/36119855596_af2db4c0fd_m.jpg " alt="banana slug"/>
        </div>

        <div className = "family_type_image" id = "donkey" style={{display:'none'}} >
          <img className = "user-selected-image" src="https://farm5.staticflickr.com/4321/35992209302_603a1ae309_m.jpg " alt="donkey"/>
        </div>
      </div>
    )
  }
});
