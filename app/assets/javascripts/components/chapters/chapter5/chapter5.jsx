var Chapter5 = React.createClass({

  getInitialState: function(){
    return {
      bed_type: this.props.book.bed_type,
      family_type: this.props.book.family_type,
      seat_type: this.props.book.seat_type,

    }
  },

  componentDidMount: function(){
alert("componentdidmount");
      if (this.props.seat_type == "chair") {
        $('.seat_type_image').hide();
        $('#chair').fadeIn();
      } else if (this.state.seat_type == "bike seat") {
        $('.seat_type_image').hide();
        $('#bike-seat').fadeIn();
      } else if (this.state.seat_type == "toilet") {
        $('.seat_type_image').hide();
        $('#toilet').fadeIn();
      } else if (this.state.seat_type == "saddle") {
        $('.seat_type_image').hide();
        $('#saddle').fadeIn();
      }

      if (this.state.bed_type == "bed") {
        $('.bed_type_image').hide();
        $('#bed').fadeIn();
      } else if (this.state.bed_type == "hammock") {
        $('.bed_type_image').hide();
        $('#hammock').fadeIn();
      } else if (this.state.bed_type == "yoga mat") {
        $('.bed_type_image').hide();
        $('#yoga-mat').fadeIn();
      }
  },


  render: function() {
      return (
        <div>
          <h1>{this.props.chapter.title}</h1>

          <Chapter5Images/>

          <Chapter5Text family_type = {this.state.family_type} bed_type = {this.state.bed_type} seat_type = {this.state.seat_type} />
        </div>

      )
  }
});
