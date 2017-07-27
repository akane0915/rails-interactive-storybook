var Chapter4Text = React.createClass({

  render: function() {
    return (
      <div>
        <p>
          She stretched her arms and yawned and thought,” I’m feeling tired,” so she looked for the bedroom. She laid on Papa <strong><em>{this.props.family_type}</em></strong>’s <strong><em>{this.props.bed_type}</em></strong> and thought,” This <strong><em>{this.props.bed_type}</em></strong> is too hard.” She laid on Mama <strong><em>{this.props.family_type}</em></strong>’s <strong><em>{this.props.bed_type}</em></strong> and thought,” This <strong><em>{this.props.bed_type}</em></strong> is too soft.” So, she tried Baby <strong><em>{this.props.family_type}</em></strong>’s <strong><em>{this.props.bed_type}</em></strong> and thought, “This <strong><em>{this.props.bed_type}</em></strong> is just right,” and she fell asleep.
        </p>
        <p>
          Meanwhile, the three <strong><em>{this.props.family_type}</em></strong> s decided to go back home to eat their warm <strong><em>{this.props.food}</em></strong>. When they came into the kitchen, Papa <strong><em>{this.props.family_type}</em></strong> said, in a deep voice, "Somebody’s been eating my <strong><em>{this.props.food}</em></strong>.” Mama <strong><em>{this.props.family_type}</em></strong> said, in a sweet voice, "Somebody’s been eating my <strong><em>{this.props.food}</em></strong>.” Then, Baby <strong><em>{this.props.family_type}</em></strong> said, as he began to cry, "Somebody’s been eating my <strong><em>{this.props.food}</em></strong> and ate it all up!"
        </p>

        <div id = "empty-bowl" className = "centered-picture">
          <img src="https://farm5.staticflickr.com/4320/36125277236_3cc5345f86_m.jpg" alt="empty bowl"/>
        </div>

      </div>
    )
  }
});
