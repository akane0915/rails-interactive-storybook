var LandscapeType = React.createClass({

  componentDidMount: function(){
    $('body').css("text-shadow", "3px 4px 2px #bdbdbd");

    if (this.props.landscape_type == "forest") {
      $('body').css("background", "url('https://farm5.staticflickr.com/4316/35321253134_bf1569ce4a_o.jpg') no-repeat").css("background-size", "cover").css("color", "white");
      $('body select').css("color", "black");
      $('body input').css("color", "black");
      $('body').css("text-shadow", "3px 4px 2px #000");
      $('a.chapter-navigation-link').css("text-shadow", "3px 4px 2px #bdbdbd");
    } else if (this.props.landscape_type == "tundra") {
      $('body').css("background", "url('https://farm5.staticflickr.com/4329/35321271654_9ef44b5c1c_o.jpg') no-repeat").css("background-size", "cover").css("color", "black");
    } else if (this.props.landscape_type == "grassland") {
      $('body').css("background", "url('https://farm5.staticflickr.com/4292/35321258984_4ff3ee7f0f_o.jpg ') no-repeat").css("background-size", "cover").css("color", "black");
    } else if (this.props.landscape_type == "desert") {
      $('body').css("background", "url('https://farm5.staticflickr.com/4308/35992305862_80be18696e_o.jpg') no-repeat").css("background-size", "cover").css("color", "black");
    } else if (this.props.landscape_type == "ocean") {
      $('body').css("background", "url('https://farm5.staticflickr.com/4326/35321265694_5c8551247b_o.jpg') no-repeat").css("background-size", "cover").css("color", "white");
      $('body select').css("color", "black");
      $('body input').css("color", "black");
      $('body').css("text-shadow", "3px 4px 2px #000");
      $('a.chapter-navigation-link').css("text-shadow", "3px 4px 2px #bdbdbd");
    } else {
      $('body').css("background", "url('https://farm5.staticflickr.com/4328/36048567901_6b9ce897e4_o.jpg') no-repeat").css("background-size", "cover").css("color", "black");
    }
  },

  render: function() {
      return (
        <div>
        </div>
      )
  }
});
