var Chapter6Text = React.createClass({

  render: function() {
    return (
      <div>
        <p>
          Then, Baby <strong><em>{this.props.family_type}</em></strong> said, as he began to cry, "Somebody’s been sleeping in my <strong><em>{this.props.bed_type}</em></strong> and she’s still there!"
        </p>

        <p>
          <strong><em>{this.props.girl_name}</em></strong> heard the <strong><em>{this.props.family_type}</em></strong>s talking and woke up. She was so scared to see the three <strong><em>{this.props.family_type}</em></strong>s that she jumped out of Baby <strong><em>{this.props.family_type}</em></strong>'s bed, ran out of the <strong><em>{this.props.family_type}</em></strong>'s <strong><em>{this.props.house_type}</em></strong> and all the way home. The <strong><em>{this.props.family_type}</em></strong>s never saw <strong><em>{this.props.girl_name}</em></strong> again.
        </p>

        <Chapter6Images/>

        <div className="centered" id="the-end-text">
          <h1>The End</h1>
        </div>

      </div>
    )
  }
});
