import React from 'react';

export default class PostForm extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      comment: '',
    };
  }

  submitHandler = event => {
    event.preventDefault();
    this.setState({ comment: '' });
  }

  changeInputHandler = event => {
    event.persist();
    this.setState(prev => ({ ...prev, ...{
      [event.target.name]: event.target.value,
    } }));
  }


  render() {
    return (
      <form onSubmit={this.submitHandler}>
        <div className="form-group">
          <label htmlFor="comment">
            <input
              type="text"
              id="comment"
              value={this.state.comment}
              name="comment"
              onChange={this.changeInputHandler}
              placeholder="Напишите комментарий"
            />
          </label>
          <button type="submit">Создать</button>
        </div>
      </form>
    );
  }
}
