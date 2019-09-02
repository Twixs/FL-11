import React, { Component } from "react";
import Button from '../shared/button/button.component';
import styles from "./item.module.scss";

class AddItem extends Component {
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
            this.setState({emojes: emojes.emoji})
        })
  }
  render() {
    const { emojes } = this.state;
    return (
      <div className={styles.Container}>
        {emojes.map(emoj => {
          let emi = emoj.emoji;
            return <div key={emoj.id} className={styles.Item}>
                <p className={styles.imageHolder}>{emi[0].char}</p>
                <p className={styles.imageHolderSmall}>{emi[1].char}</p>
                <p className={styles.imageHolderSmallest}>{emi[2].char}</p>
                <h4>{emoj.title}</h4>
                <Button price={emoj.price}/>
            </div>;
          })}
      </div>
    );
  }
}

export default AddItem;
