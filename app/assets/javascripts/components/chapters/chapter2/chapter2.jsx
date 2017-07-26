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
    $('#chapter2-button').addClass('animated rubberBand');
  },

  render: function() {
      return (
        <div>
          <LandscapeType landscape_type = {this.state.landscape_type}/>

          <h1>{this.props.chapter.title}</h1>

          <form onSubmit={this.updateChapterTwoFieldsSubmit} className="center-text">
            <h1>Pick a food!</h1>

            <select name="book[food]" value={this.state.food}
            onChange={this.handleFoodChange} className="form-select">
              <option value=""></option>
              <option value="porridge">Porridge</option>
              <option value="fried rice">Fried Rice</option>
              <option value="pho">Pho</option>
              <option value="kebabs">Kebabs</option>
              <option value="gazpacho">Gazpacho</option>
            </select>

            <h1>Then pick a structure.</h1>

            <select name="book[house_type]" value={this.state.house_type}
            onChange={this.handleHouseTypeChange} className="form-select">
              <option value=""></option>
              <option value="cabin">Cabin</option>
              <option value="igloo">Igloo</option>
              <option value="treehouse">Treehouse</option>
              <option value="tepee">Tepee</option>
            </select>


            <h1>Finally, type a girl name.</h1>

            <input name="book[girl_name]" value={this.state.girl_name}
            onChange={this.handleGirlNameChange} className="form-select"/>

            <h1>Then Click Save!</h1>

            <input type="submit" value="Save" id="chapter2-button" className='btn btn-default save-button'/>
          </form>

          <div className="center-text">
            <Chapter2Images />
          </div>

          <Chapter2Text food = {this.state.food} family_type = {this.state.family_type} house_type = {this.state.house_type} girl_name = {this.state.girl_name} />

        </div>

      )
  }
});
