import React, { Component } from "react";
import Button from "../shared/button/button.component";
import styles from "./newsbar.module.scss";

class NewsBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      emojes: []
    };
  }
  componentDidMount() {
    fetch("http://localhost:1337/emoji-shop")
      .then(res => res.json())
      .then(emojes => {
        this.setState({ emojes: emojes.emoji });
      });
  }
  render() {
    const { emojes } = this.state;
    return (
        <div className={styles.Container}>
            <h1>New! Bugs pack!</h1>
            <h6>Includes</h6>
            <div className={styles.imagesContainer}>
                <p></p>
                <p></p>
                <p></p>
            </div>
            <Button className={styles.buttonBar} price="1"/>
        </div>
    )
  }
}

export default NewsBar;
