import React from "react";
import styles from "../css/ScoreBoard.css";

export default class ScoreBoard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <div id={styles.scorecard}>
          <table
            id={styles.scorecardTable}
            class={styles.scorecard}
            cellpadding="1"
            cellspacing="0"
          >
            <tr>
              <th colspan="6">Frame 1</th>
              <th colspan="6">Frame 2</th>
              <th colspan="6">Frame 3</th>
              <th colspan="6">Frame 4</th>
              <th colspan="6">Frame 5</th>
              <th colspan="6">Frame 6</th>
              <th colspan="6">Frame 7</th>
              <th colspan="6">Frame 8</th>
              <th colspan="6">Frame 9</th>
              <th colspan="6">Frame 10</th>
            </tr>
            <tr>
              <td colspan="3" />
              <td id={styles.frame1} colspan="3" />
              <td colspan="3" />
              <td id={styles.frame2} colspan="3" />
              <td colspan="3" />
              <td id={styles.frame3} colspan="3" />
              <td colspan="3" />
              <td id={styles.frame4} colspan="3" />
              <td colspan="3" />
              <td id={styles.frame5} colspan="3" />
              <td colspan="3" />
              <td id={styles.frame6} colspan="3" />
              <td colspan="3" />
              <td id={styles.frame7} colspan="3" />
              <td colspan="3" />
              <td id={styles.frame8} colspan="3" />
              <td colspan="3" />
              <td id={styles.frame9} colspan="3" />
              <td colspan="3" />
              <td id={styles.frame10} colspan="3" />
            </tr>
            <tr>
              <td colspan="6" id={styles.marker0} />
              <td colspan="6" id={styles.marker0} />
              <td colspan="6" id={styles.marker0} />
              <td colspan="6" id={styles.marker0} />
              <td colspan="6" id={styles.marker0} />
              <td colspan="6" id={styles.marker0} />
              <td colspan="6" id={styles.marker0} />
              <td colspan="6" id={styles.marker0} />
              <td colspan="6" id={styles.marker0} />
              <td colspan="6" id={styles.marker0} />
            </tr>
          </table>
        </div>
      </div>
    );
  }
}
