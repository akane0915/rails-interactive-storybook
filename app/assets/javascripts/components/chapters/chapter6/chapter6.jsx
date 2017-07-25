var Chapter6 = React.createClass({

  getInitialState: function(){
    return {
      bed_type: this.props.book.bed_type,
      family_type: this.props.book.family_type,
      house_type: this.props.book.house_type,
      girl_name: this.props.book.girl_name,
    }
  },


  render: function() {
      return (
        <div>
          <h1>{this.props.chapter.title}</h1>

          <Chapter6Text
            family_type = {this.state.family_type}
            bed_type = {this.state.bed_type}
            house_type = {this.state.house_type}
            girl_name = {this.state.girl_name}
          />

        </div>

      )
  }
});
