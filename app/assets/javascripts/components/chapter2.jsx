var Chapter2 = React.createClass({

  getInitialState: function(){
    return {
      food: this.props.book.food,
      family_type: this.props.book.family_type,
      house_type: this.props.book.house_type,
      girl_name: this.props.book.girl_name,
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

          <div className = "food_image" id = "porridge" style={{display:'none'}} >
            <img src="https://farm5.staticflickr.com/4312/35769089980_c515492fb5_m.jpg" alt="porridge"/>
          </div>

          <div className = "food_image" id = "fried-rice" style={{display:'none'}} >
            <img src="https://farm5.staticflickr.com/4306/35353419133_278037e122_m.jpg" alt="fried-rice"/>
          </div>

          <div className = "food_image" id = "pho" style={{display:'none'}} >
            <img src="https://farm5.staticflickr.com/4293/36119875996_e9c25dc9d7_m.jpg" alt="pho"/>
          </div>

          <div className = "food_image" id = "kebabs" style={{display:'none'}} >
            <img src="https://farm5.staticflickr.com/4320/36119873316_4f3dc5d7b9_m.jpg" alt="kebabs"/>
          </div>

          <div className = "food_image" id = "gazpacho" style={{display:'none'}} >
            <img src="https://farm5.staticflickr.com/4306/36119866716_82d2051019_m.jpg" alt="gazpacho"/>
          </div>



          <div className = "house_type_image" id = "cabin" style={{display:'none'}} >
            <img src="https://farm5.staticflickr.com/4309/35769094890_63eb47cb1e_m.jpg" alt="cabin"/>
          </div>

          <div className = "house_type_image" id = "igloo" style={{display:'none'}} >
            <img src="https://farm5.staticflickr.com/4293/35992287272_3f6f16b799_m.jpg" alt="igloo"/>
          </div>

          <div className = "house_type_image" id = "treehouse" style={{display:'none'}} >
            <img src="https://farm5.staticflickr.com/4301/35992293742_3dc75c527a_m.jpg" alt="treehouse"/>
          </div>

          <div className = "house_type_image" id = "tepee" style={{display:'none'}} >
            <img src="https://farm5.staticflickr.com/4319/35992276232_c386763f30_m.jpg " alt="tepee"/>
          </div>





          <Chapter2Text food = {this.state.food} family_type = {this.state.family_type} house_type = {this.state.house_type} girl_name = {this.state.girl_name} />

        </div>

      )
  }
});
