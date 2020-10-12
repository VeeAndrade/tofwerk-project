import React, { useState, useEffect } from "react";
import socketIOClient from "socket.io-client";

import { Panel } from "../panel";
import { ConcentrationToolbar } from "./concentration-toolbar";
import { ConcentrationChart } from "./concentration-chart";
import { ConcentrationMap } from "./concentration-map";
import styles from "./index.module.scss";

const ENDPOINT = 'http://127.0.0.1:5000'

export function ConcentrationPanel() {
  const [response, setResponse] = useState([]);
  
  useEffect(() => {
    const socket = socketIOClient(ENDPOINT);
    socket.on('data', data => {
        setResponse(response => [...response, data])
    });
  }, []);

  return (
    <>
      <Panel title="CONCENTRATION TIME-SERIES" showFavorited={false}>
        <ConcentrationToolbar />
        <div className={styles["concentration-chart-container"]}>
          <ConcentrationChart chartData={response}/>
        </div>
      </Panel>
      <Panel title="CONCENTRATION MAP" showFavorited={false}>
        <ConcentrationToolbar />
        <div className={styles["concentration-chart-container"]}>
          <ConcentrationMap mapData={response}/>
        </div>
      </Panel>
    </>
  );
}
