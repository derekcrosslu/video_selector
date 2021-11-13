import React from 'react'
import styles from "./Player.module.css";
//disregard this component, this same code appears in player component
function Selector(props:any) {
    return (
        <div>
          <button
            onClick={(e) => props.videoIdHandler(e.target)}
            className={styles.selectorContainer}
          >
            {props.screens.Selector.map((view: any, index: number) => {
              return (
                <div>
                  <img
                    src={view.thumbnail}
                    alt={view.description}
                    key={index}
                    id={view.id}
                    className={styles.thumbnail}
                  />
                  <div className={styles.duration}>
                    <h3>{view.info} min</h3>
                  </div>
                </div>
              );
            })}
          </button>
        </div>
    )
}

export default Selector
