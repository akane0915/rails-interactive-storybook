var Chapter2 = React.createClass({

  getInitialState: function(){
    return {
      food: this.props.book.food,
      family_type: this.props.book.family_type,
      house_type: this.props.book.house_type,
      girl_name: this.props.book.girl_name,
      landscape_type: this.props.landscape_type,
    }
  },

  componentDidMount: function(){
    if (this.state.landscape_type == "forest") {
      $('body').css("background", "url('https://farm5.staticflickr.com/4316/35321253134_bf1569ce4a_o.jpg') no-repeat").css("background-size", "cover").css("color", "white");
      $('body select').css("color", "black");
    } else if (this.state.landscape_type == "tundra") {
      $('body').css("background", "url('https://farm5.staticflickr.com/4329/35321271654_9ef44b5c1c_o.jpg') no-repeat").css("background-size", "cover").css("color", "black");
    } else if (this.state.landscape_type == "grassland") {
      $('body').css("background", "url('https://farm5.staticflickr.com/4292/35321258984_4ff3ee7f0f_o.jpg ') no-repeat").css("background-size", "cover").css("color", "black");
    } else if (this.state.landscape_type == "desert") {
      $('body').css("background", "url('https://farm5.staticflickr.com/4308/35992305862_80be18696e_o.jpg') no-repeat").css("background-size", "cover").css("color", "black");
    } else if (this.state.landscape_type == "ocean") {
      $('body').css("background", "url('https://farm5.staticflickr.com/4326/35321265694_5c8551247b_o.jpg') no-repeat").css("background-size", "cover").css("color", "white");
      $('body select').css("color", "black");
    }
  },

  updateChapterTwoFieldsSubmit: function(e){
    e.preventDefault();
    $.ajax({
      url: "/books/1",
      dataType: 'json',
      type: 'PATCH',
      data: {
        book: {
          food: this.state.food,
          house_type: this.state.house_type,
          girl_name: this.state.girl_name,
        },
      },
      success: function(book) {
        this.props.parentUpdateBook(book);
      }.bind(this),
      error: function(response, status, err) {
        console.log("An error occurred");
      }
    });

    if (this.state.food == "porridge") {
      $('.food_image').hide();
      $('#porridge').fadeIn();
    } else if (this.state.food == "fried rice") {
      $('.food_image').hide();
      $('#fried-rice').fadeIn();
    } else if (this.state.food == "pho") {
      $('.food_image').hide();
      $('#pho').fadeIn();
    } else if (this.state.food == "kebabs") {
      $('.food_image').hide();
      $('#kebabs').fadeIn();
    } else if (this.state.food == "gazpacho") {
      $('.food_image').hide();
      $('#gazpacho').fadeIn();
    }

    if (this.state.house_type == "cabin") {
      $('.house_type_image').hide();
      $('#cabin').fadeIn();
    } else if (this.state.house_type == "igloo") {
      $('.house_type_image').hide();
      $('#igloo').fadeIn();
    } else if (this.state.house_type == "treehouse") {
      $('.house_type_image').hide();
      $('#treehouse').fadeIn();
    } else if (this.state.house_type == "tepee") {
      $('.house_type_image').hide();
      $('#tepee').fadeIn();
    }

  },


  handleFoodChange: function(e){
    this.setState({food: e.target.value});
  },

  handleHouseTypeChange: function(e){
    this.setState({house_type: e.target.value});
  },

  handleGirlNameChange: function(e){
    this.setState({girl_name: e.target.value});
  },

  render: function() {
      return (
        <div>
          <h1>{this.props.chapter.title}</h1>

          <form onSubmit={this.updateChapterTwoFieldsSubmit}>
            <h3>Pick a food!</h3>

            <select name="book[food]" value={this.state.food}
            onChange={this.handleFoodChange}>
              <option value=""></option>
              <option value="porridge">Porridge</option>
              <option value="fried rice">Fried Rice</option>
              <option value="pho">Pho</option>
              <option value="kebabs">Kebabs</option>
              <option value="gazpacho">Gazpacho</option>
            </select>

            <h3>Then pick a structure.</h3>

            <select name="book[house_type]" value={this.state.house_type}
            onChange={this.handleHouseTypeChange}>
              <option value=""></option>
              <option value="cabin">Cabin</option>
              <option value="igloo">Igloo</option>
              <option value="treehouse">Treehouse</option>
              <option value="tepee">Tepee</option>
            </select>


            <h3>Finally, type a girl name.</h3>

            <input name="book[girl_name]" value={this.state.girl_name}
            onChange={this.handleGirlNameChange}/>

            <h3>Then Click Save!</h3>

            <input type="submit" value="Save" className='btn btn-primary' />
          </form>

          <Chapter2Images/>

          <Chapter2Text food = {this.state.food} family_type = {this.state.family_type} house_type = {this.state.house_type} girl_name = {this.state.girl_name} />

        </div>

      )
  }
});
