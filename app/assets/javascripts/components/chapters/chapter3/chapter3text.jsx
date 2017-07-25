var Chapter3Text = React.createClass({

  render: function() {
    return (
      <div>

        <p>
          She sat down and tasted Papa <strong><em>{this.props.family_type}</em></strong>’s <strong><em>{this.props.food}</em></strong>, but it was too hot. So, she tried Mama <strong><em>{this.props.family_type}</em></strong>’s <strong><em>{this.props.food}</em></strong>, but it was too cold. Then, she tasted Baby <strong><em>{this.props.family_type}</em></strong>’s <strong><em>{this.props.food}</em></strong> and thought it was just right and ate it all up.
        </p>

        <p>
          She explored some more and saw three <strong><em>{this.props.seat_type}</em></strong>s. She sat in Papa <strong><em>{this.props.family_type}</em></strong>’s <strong><em>{this.props.seat_type}</em></strong> and thought, "This <strong><em>{this.props.seat_type}</em></strong> is too hard.” She tried Mama <strong><em>{this.props.family_type}</em></strong>’s <strong><em>{this.props.seat_type}</em></strong> and thought, ”This <strong><em>{this.props.seat_type}</em></strong> is too soft.” So, she tried Baby <strong><em>{this.props.family_type}</em></strong>’s <strong><em>{this.props.seat_type}</em></strong> and said, "Oooh, this <strong><em>{this.props.seat_type}</em></strong> is just right." But, oops! She was too heavy and broke the <strong><em>{this.props.seat_type}</em></strong>.
        </p>
      </div>
    )
  }
});
